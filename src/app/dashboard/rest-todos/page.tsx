// import { useEffect } from "react";

import { prisma } from "@/lib/prisma";

export default async function RestTodos() {
  const todos = await prisma.todo.findMany({orderBy: {description: "asc"}});

  // useEffect(() => {
  //   fetch('/api/todos')
  //   .then(res => res.json())
  //   .then(console.log)
  // }, [])

  return (
      // <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      //   <WidgetItem />
      // </div>
      <>
        <h1>Rest Todos</h1>
        {
          JSON.stringify(todos)
        }
      </>
  );
}