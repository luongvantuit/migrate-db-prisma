import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.$connect();
}

main().catch(async (e) => {
    await prisma.$disconnect();
    throw e;
});
