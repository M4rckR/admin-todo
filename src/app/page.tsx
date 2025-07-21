"use client"
import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold">Hello World</h1>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => signIn("github")}
      >
        Sign in with GitHub
      </button>
    </>
  )
}
