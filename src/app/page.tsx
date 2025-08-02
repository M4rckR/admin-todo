// "use client"
// import { signIn } from "next-auth/react"
import { redirect } from "next/navigation"

export default function Home() {

  redirect('/dashboard/')

  return (
    <>
      {/* <h1 className="text-5xl font-bold">Hello World</h1> */}
      {/* <div className="flex flex-col gap-4 mt-8 max-w-xs mx-auto">
        <button
          className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded shadow transition-colors duration-200"
          onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.68 5.41-5.24 5.7.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
          </svg>
          Iniciar sesión con GitHub
        </button>
        <button
          className="flex items-center justify-center gap-2 px-4 py-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold rounded shadow border border-gray-300 transition-colors duration-200"
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
        >
          <svg className="w-5 h-5" viewBox="0 0 48 48">
            <g>
              <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.7 32.9 30.1 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.5 29.6 4.5 24 4.5 12.7 4.5 3.5 13.7 3.5 25S12.7 45.5 24 45.5c10.5 0 19.5-8.5 19.5-19.5 0-1.3-.1-2.2-.3-3z"/>
              <path fill="#34A853" d="M6.3 14.7l7 5.1C15.5 16.1 19.4 13.5 24 13.5c3.1 0 5.9 1.1 8.1 2.9l6.1-6.1C34.5 6.5 29.6 4.5 24 4.5c-7.2 0-13.3 4.1-16.7 10.2z"/>
              <path fill="#FBBC05" d="M24 45.5c5.6 0 10.5-1.9 14.3-5.1l-6.6-5.4c-2 1.4-4.6 2.2-7.7 2.2-6.1 0-11.2-4.1-13-9.6l-7 5.4C6.7 41.1 14.7 45.5 24 45.5z"/>
              <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.1 5.5-7.7 5.5-2.2 0-4.2-.7-5.7-2.1l-7 5.4C15.5 41.9 19.4 45.5 24 45.5c10.5 0 19.5-8.5 19.5-19.5 0-1.3-.1-2.2-.3-3z"/>
            </g>
          </svg>
          Iniciar sesión con Google
        </button>
      </div> */}
    </>
  )
}
