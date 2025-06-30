
import { prisma } from '@/lib/prisma'
import { NextResponse} from 'next/server'

export async function GET() { 
 
    await prisma.todo.deleteMany() // delete all todos

    const todo = await prisma.todo.create({
        data: {
            description: 'Piedra del alma',
            completed: true
        }
    })

    await prisma.todo.createMany({
        data: [
            { description: 'Piedra del poder'},
            { description: 'Piedra del espacio'},
            { description: 'Piedra de la realidad'},
            { description: 'Piedra del tiempo'},
            { description: 'Piedra de la mente', completed: true},
        ]
    })
  
    return NextResponse.json({message: 'Seed executed', todo})
}
