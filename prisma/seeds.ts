import { prisma } from "../lib/prisma";

async function main() {
  const todo = await prisma.todo.create({
    data: { name: "todo test 1" },
  });
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
