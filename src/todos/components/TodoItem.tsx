import { Todo } from "@prisma/client"
import styles from './Todo.module.css'
import { IoCheckboxSharp, IoSquareOutline } from "react-icons/io5";
import { startTransition, useOptimistic } from "react";

type Props = {
  todo: Todo;
  toggleTodo: (id:string, completed:boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {

    const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
        todo,
        (state, newCompletedValue: boolean) => ({
            ...state,
            completed: newCompletedValue
        })
    );


    const onToggleTodo = async() => {
        try {
            startTransition(() => {
                toggleTodoOptimistic(!todoOptimistic.completed)
            })
            await toggleTodo(todoOptimistic.id, !todoOptimistic.completed)
        } catch (error) {
            console.error(error)
            startTransition(() => {
                toggleTodoOptimistic(!todoOptimistic.completed)
            })
        }
    }

  return (
    <div className={todoOptimistic.completed ? styles.todoDone : styles.todoPending}>
        <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
            <div 
            // onClick={() => toggleTodo(todoOptimistic.id, !todoOptimistic.completed)}
            onClick={onToggleTodo}
            className={
                `flex p-2 rounded-md cursor-pointer 
                 hover:bg-opacity-60 
                 bg-blue-100
                `
            }>
                {
                    todoOptimistic.completed ? (
                        <IoCheckboxSharp size={30} className="text-blue-500" />
                    ) : (
                        <IoSquareOutline size={30} className="text-red-500" />
                    )
                }
            </div>
                <div className="text-lg font-medium">
                    {todoOptimistic.description}
                </div>
        </div>
    </div>
  )
}
