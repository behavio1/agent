"use server";

import { revalidatePath } from "next/cache";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getTenantDashboardData() {
  const session = await getSession();
  if (!session?.id) {
    throw new Error("Not authenticated");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.id },
    include: {
      tenantProfile: {
        include: {
          property: true,
        },
      },
      maintenance: {
        where: {
          status: {
            not: "RESOLVED",
          },
        },
        orderBy: {
          createdAt: "desc",
        },
        take: 3,
      },
    },
  });

  return user;
}

export async function updateTenantProfile(formData: FormData) {
  const session = await getSession();
  if (!session?.id) {
    throw new Error("Not authenticated");
  }

  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;

  await prisma.user.update({
    where: { id: session.id },
    data: {
      name: name || null,
      phone: phone || null,
    },
  });

  revalidatePath("/tenant/profile");
  revalidatePath("/tenant");
}
