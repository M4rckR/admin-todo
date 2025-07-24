import { WidgetItem } from "@/components/WidgetItem";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth()

  if(!session) {
    return redirect('/')
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
      <WidgetItem title="Usuario conectado">
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Información del usuario</h2>
          <ul className="list-disc pl-4">
            <li>Nombre: {session.user?.name}</li>
            <li>Email: {session.user?.email}</li>
          </ul>
        </div>
      </WidgetItem>
    </div>
  )
}