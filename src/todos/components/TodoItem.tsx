import { Todo } from "@prisma/client"
import styles from './Todo.module.css'
import { IoCheckboxSharp, IoSquareOutline } from "react-icons/io5";

type Props = {
  todo: Todo;
  toggleTodo: (id:string, completed:boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  return (
    <div className={todo.completed ? styles.todoDone : styles.todoPending}>
        <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
            <div 
            onClick={() => toggleTodo(todo.id, !todo.completed)}
            className={
                `flex p-2 rounded-md cursor-pointer 
                 hover:bg-opacity-60 
                 bg-blue-100
                `
            }>
                {
                    todo.completed ? (
                        <IoCheckboxSharp size={30} className="text-blue-500" />
                    ) : (
                        <IoSquareOutline size={30} className="text-red-500" />
                    )
                }
            </div>
                <div className="text-lg font-medium">
                    {todo.description}
                </div>
        </div>
    </div>
  )
}
