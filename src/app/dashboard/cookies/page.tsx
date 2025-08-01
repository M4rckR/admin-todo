import { TabBar } from "@/components/TabBar"


export const metadata = {
  title: "Cookies",
  description: "Cookies",
}

export default function cookiesPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col space-y-2">
        <span className="text-3xl">Tabs</span>
        <TabBar />
      </div>
    </div>
  )
}

