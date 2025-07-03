'use client'
import { Todo } from "@prisma/client"
import { TodoItem } from "./TodoItem"
import { toggleTodo } from "../actions/todo-actions"

type Props = {
  todos?: Todo[]
}

export const TodosGrid = ({ todos = [] }: Props) => {


  // const toggleTodo = async (id:string, completed:boolean) => {
  //   const updatedTodo = await todosApi.updatedTodo(id, completed)
  //   console.log(updatedTodo)


  //   router.refresh()
  // }
    
  // const toggleTodo = async (id:string, completed:boolean) => {
  //   const todo = await todosApi.updatedTodo(id, completed)
  //   console.log(todo)
  // }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {
        todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))
      }
    </div>
  )
}
