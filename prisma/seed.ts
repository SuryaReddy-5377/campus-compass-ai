import "dotenv/config";
import { prisma } from "../lib/prisma";

async function main() {
  const colleges = await prisma.college.findMany();

  console.log("Connected successfully!");
  console.log(colleges);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });