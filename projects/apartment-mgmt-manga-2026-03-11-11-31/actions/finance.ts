"use server";

import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function payRent(formData: FormData) {
  try {
    const session = await getSession();
    if (!session?.id) {
      return { error: "Not authenticated" };
    }

    const amountStr = formData.get("amount") as string;
    const amount = parseFloat(amountStr);

    if (isNaN(amount) || amount <= 0) {
      return { error: "Invalid amount" };
    }

    const user = await prisma.user.findUnique({
      where: { id: session.id },
      include: { tenantProfile: true },
    });

    if (!user || !user.tenantProfile) {
      return { error: "Tenant profile not found" };
    }

    // Create payment record
    await prisma.payment.create({
      data: {
        amount,
        status: "COMPLETED",
        userId: session.id,
      },
    });

    // Update tenant balance
    await prisma.tenantProfile.update({
      where: { id: user.tenantProfile.id },
      data: {
        balance: {
          decrement: amount,
        },
      },
    });

    revalidatePath("/tenant");
    revalidatePath("/tenant/rent");
    revalidatePath("/admin/finance");
    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: error.message || "Failed to process payment." };
    }
    return { error: "Failed to process payment." };
  }
}

export async function getTenantPayments() {
  const session = await getSession();
  if (!session?.id) {
    throw new Error("Not authenticated");
  }

  return await prisma.payment.findMany({
    where: { userId: session.id },
    orderBy: { date: "desc" },
  });
}

export async function getAdminFinanceData() {
  const session = await getSession();
  if (!session?.id || session.role !== "ADMIN") {
    throw new Error("Not authorized");
  }

  const payments = await prisma.payment.findMany({
    orderBy: { date: "desc" },
    include: {
      user: {
        select: {
          name: true,
          email: true,
          tenantProfile: {
            include: {
              property: true,
            },
          },
        },
      },
    },
  });

  const tenantProfiles = await prisma.tenantProfile.findMany({
    where: { balance: { gt: 0 } },
    include: {
      user: {
        select: {
          name: true,
          email: true,
        },
      },
      property: {
        select: {
          title: true,
        },
      },
    },
    orderBy: { balance: "desc" },
  });

  const totalRevenue = payments.reduce((sum, payment) => sum + payment.amount, 0);
  const totalOutstanding = tenantProfiles.reduce((sum, profile) => sum + profile.balance, 0);

  return {
    payments,
    outstandingBalances: tenantProfiles,
    totalRevenue,
    totalOutstanding,
  };
}
