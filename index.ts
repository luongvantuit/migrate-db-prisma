import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();

  await prisma.personModel.create({
    data: {
      name: "John",
      email: "john@example.com",
      phone: "123",
      dob: "John",
    },
  });
}

main()
  .catch(async (e) => {
    await prisma.$disconnect();
    console.log("failed to connect");
  })
  .then(() => {});
