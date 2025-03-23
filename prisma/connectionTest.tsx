// prisma/index.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  //change to reference a table in your schema
  const val = await prisma.test_table.findMany();
  console.log(val);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });