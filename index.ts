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
    console.log("failed to connect!");
  })
  .then(async () => {
    await prisma.user.create({
      data: {
        
      },
    });
  });
