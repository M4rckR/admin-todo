import { Todo } from "@prisma/client";


const sleep = (seconds:number) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    })
}

export const updatedTodo = async (id:string, completed:boolean):Promise<Todo> => {
    await sleep(2)
    const body = { completed }

    const todo = await fetch(`/api/todos/${id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json())
    console.log(todo)

    return todo
}

export const createTodo = async (description:string):Promise<Todo> => {
    const body = { description }  

    const todo = await fetch(`/api/todos`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(res => res.json())
    console.log(todo)

    return todo
}

export const deleteCompleted = async ():Promise<boolean> => {
    await fetch(`/api/todos`, {
        method: 'DELETE',
    }).then(res => res.json())

    return true
}   