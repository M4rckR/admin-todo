'use client'

import { useSession } from "next-auth/react"
import { useEffect } from "react"

export default function Page() {

  const {data: session} = useSession()

    useEffect(() => {
        console.log('Client Side')
    }, [])

  return (
    <div>
        <h1>{session?.user?.name || 'No name'}</h1>
        <h1>{session?.user?.email || 'No email'}</h1>
        <h1>{session?.user?.image || 'No image'}</h1>
    </div>
  )
}

