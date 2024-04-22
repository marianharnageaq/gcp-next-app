import { prisma } from "@/lib/prisma";

import { NextResponse } from "next/server";

async function GET() {
  // const todosDB = await prisma.todos.findMany();

  const todos = [
    {
      id: -1,
      name: "test todo 1",
    },
    {
      id: -2,
      name: "test todo 2",
    },
  ];

  return NextResponse.json(todos);
}

export { GET };
