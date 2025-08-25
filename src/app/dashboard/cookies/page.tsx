import { TabBar } from "@/components/TabBar"
import { cookies } from "next/headers"

export const metadata = {
  title: "Cookies",
  description: "Cookies",
}

export default async function cookiesPage() {

  const cookieStore = await cookies()
  const cookieTab = Number(cookieStore.get('selectedTab')?.value ?? '1')
  const allCookies = cookieStore.getAll()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col space-y-2">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={cookieTab}/>
      </div>
      <div className="flex flex-col space-y-2">
        <span className="text-3xl">All Cookies</span>
        <pre>{JSON.stringify(allCookies, null, 2)}</pre>
      </div>
    </div>
  )
}

