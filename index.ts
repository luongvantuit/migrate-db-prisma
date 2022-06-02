import { PrismaClient } from "@prisma/client";
import { join } from "path";
import { config } from "dotenv";

config({
  path: join(process.cwd(), ".env"),
});

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
}

main()
  .catch(async (e) => {
    await prisma.$disconnect();
    console.log(e);

    console.log("failed to connect");
  })
  .then(async () => {
    await prisma.personModel.create({
      data: {
        name: "John",
        email: "john@example.com",
        phone: "123",
        dob: "John",
      },
    });
  });
