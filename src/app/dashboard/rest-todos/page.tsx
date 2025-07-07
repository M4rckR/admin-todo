// import { useEffect } from "react";
export const dynamic = "force-dynamic";
export const revalidate = 0;

import { prisma } from "@/lib/prisma";
import { NewTodo } from "@/todos/components/NewTodo";
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
      <div className="w-full px-3 mx-5  mb-5">
        <NewTodo />
      </div>

        {
          // JSON.stringify(todos)
          <TodosGrid todos={todos} />
        }
      </>
  );
}