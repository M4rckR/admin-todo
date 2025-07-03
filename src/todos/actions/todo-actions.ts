'use server'
import { Todo } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (id: string, completed: boolean):Promise<Todo> => {
    const todo = await prisma.todo.findFirst({where: {id}}) 

    if( !todo ) {
        throw new Error(`Todo con id ${id} no encontrado`)
    }

    const updatedTodo = await prisma.todo.update({
        where: {id},
        data: {completed}
    })

    revalidatePath('/dashboard/server-todos')
    return updatedTodo
}