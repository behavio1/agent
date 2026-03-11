import { PrismaClient, Role, PropertyStatus, AppStatus } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data (optional, be careful in production!)
  // await prisma.maintenanceRequest.deleteMany()
  // await prisma.payment.deleteMany()
  // await prisma.application.deleteMany()
  // await prisma.property.deleteMany()
  // await prisma.tenantProfile.deleteMany()
  // await prisma.user.deleteMany()

  // Create an admin user
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      password: 'hashedpassword', // In a real app, hash this! e.g., using bcrypt
      role: Role.ADMIN,
      name: 'Manga Admin',
    },
  })

  // Create a tenant user
  const tenantUser = await prisma.user.upsert({
    where: { email: 'tenant@example.com' },
    update: {},
    create: {
      email: 'tenant@example.com',
      password: 'hashedpassword',
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
