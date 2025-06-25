// import { useEffect } from "react";

import { prisma } from "@/lib/prisma";
import { TodosGrid } from "@/todos/components/TodosGrid";

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
      {/* Formulario para agregar nuevos todos */}
        {
          // JSON.stringify(todos)
          <TodosGrid todos={todos} />
        }
      </>
  );
}