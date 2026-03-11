"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";

export async function approveApplication(applicationId: string) {
  try {
    const application = await prisma.application.findUnique({
      where: { id: applicationId },
    });

    if (!application) {
      return { error: "Application not found" };
    }

    if (application.status === "APPROVED") {
      return { error: "Application already approved" };
    }

    // Create a default password and hash it
    const defaultPassword = "password123";
    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    // We use a transaction to ensure all operations succeed or fail together
    await prisma.$transaction(async (tx) => {
      // 1. Update application status
      await tx.application.update({
        where: { id: applicationId },
        data: { status: "APPROVED" },
      });

      // 2. Create user (check if user already exists first)
      let user = await tx.user.findUnique({
        where: { email: application.email },
      });

      if (!user) {
        user = await tx.user.create({
          data: {
            email: application.email,
            password: hashedPassword,
            role: "TENANT",
            name: application.name,
            phone: application.phone,
          },
        });
      }

      // 3. Create TenantProfile
      const existingProfile = await tx.tenantProfile.findUnique({
        where: { userId: user.id },
      });

      if (!existingProfile) {
        await tx.tenantProfile.create({
          data: {
            userId: user.id,
            balance: 0,
          },
        });
      }
    });

    revalidatePath("/admin/tenants");
    return { success: true };
  } catch (error) {
    console.error("Failed to approve application:", error);
    return { error: "Failed to approve application" };
  }
}

export async function rejectApplication(applicationId: string) {
  try {
    await prisma.application.update({
      where: { id: applicationId },
      data: { status: "REJECTED" },
    });
    revalidatePath("/admin/tenants");
    return { success: true };
  } catch (error) {
    console.error("Failed to reject application:", error);
    return { error: "Failed to reject application" };
  }
}

export async function assignProperty(tenantProfileId: string, propertyId: string) {
  try {
    await prisma.$transaction(async (tx) => {
      // We just update the property
      await tx.property.update({
        where: { id: propertyId },
        data: {
          tenantId: tenantProfileId,
          status: "OCCUPIED",
        },
      });
      
      const oneYearFromNow = new Date();
      oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);

      // Update lease start to today
      await tx.tenantProfile.update({
         where: { id: tenantProfileId },
         data: {
            leaseStart: new Date(),
            leaseEnd: oneYearFromNow,
         }
      })
    });
    
    revalidatePath("/admin/tenants");
    return { success: true };
  } catch (error) {
    console.error("Failed to assign property:", error);
    return { error: "Failed to assign property" };
  }
}

export async function unassignProperty(propertyId: string) {
  try {
    await prisma.$transaction(async (tx) => {
      const property = await tx.property.findUnique({
        where: { id: propertyId },
      });

      if (property?.tenantId) {
        await tx.tenantProfile.update({
          where: { id: property.tenantId },
          data: {
            leaseStart: null,
            leaseEnd: null,
          },
        });
      }

      await tx.property.update({
        where: { id: propertyId },
        data: {
          tenantId: null,
          status: "AVAILABLE",
        },
      });
    });
    
    revalidatePath("/admin/tenants");
    return { success: true };
  } catch (error) {
    console.error("Failed to unassign property:", error);
    return { error: "Failed to unassign property" };
  }
}
