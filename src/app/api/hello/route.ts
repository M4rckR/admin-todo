import { NextResponse } from 'next/server'

export async function GET() { 

  return NextResponse.json({
    message: 'Hello World'
  })
}


export async function POST(request: Request) { 
    return NextResponse.json({
        message: 'Hello World',
        method: request.method
    })
}