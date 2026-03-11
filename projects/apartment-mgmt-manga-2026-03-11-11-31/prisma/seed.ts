import { PrismaClient, Role, PropertyStatus, AppStatus } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const adminPassword = await bcrypt.hash('admin', 10)
  const tenantPassword = await bcrypt.hash('tenant', 10)

  // Create an admin user
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: { password: adminPassword },
    create: {
      email: 'admin@example.com',
      password: adminPassword,
      role: Role.ADMIN,
      name: 'Manga Admin',
    },
  })

  // Create a tenant user
  const tenantUser = await prisma.user.upsert({
    where: { email: 'tenant@example.com' },
    update: { password: tenantPassword },
    create: {
      email: 'tenant@example.com',
      password: tenantPassword,
      role: Role.TENANT,
      name: 'Naruto Uzumaki',
      phone: '555-0101',
    },
  })

  // Create tenant profile
  const tenantProfile = await prisma.tenantProfile.upsert({
    where: { userId: tenantUser.id },
    update: {},
    create: {
      userId: tenantUser.id,
      leaseStart: new Date(),
      leaseEnd: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
      balance: 1500.0,
    },
  })

  // Create properties
  await prisma.property.createMany({
    data: [
      {
        title: 'Hidden Leaf Apartment - Unit 7',
        description: 'Cozy one-bedroom unit with ramen shop nearby.',
        price: 1500.0,
        size: 800,
        status: PropertyStatus.OCCUPIED,
        tenantId: tenantProfile.id,
      },
      {
        title: 'Uchiha Compound - Unit 1',
        description: 'Spacious studio with great lighting. Requires some cleanup.',
        price: 1200.0,
        size: 600,
        status: PropertyStatus.AVAILABLE,
      },
    ],
    skipDuplicates: true, // skip if they already exist
  })

  // Add dummy application
  await prisma.application.create({
    data: {
      name: 'Sasuke Uchiha',
      email: 'sasuke@example.com',
      phone: '555-0102',
      message: 'Looking for a quiet place.',
      status: AppStatus.PENDING,
    },
  })

  console.log('Seed completed successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
