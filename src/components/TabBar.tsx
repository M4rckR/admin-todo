"use client"
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useState } from "react"  
type TabBarProps = {
  currentTab?: number
  tabOptions?: number[]
}
export const TabBar = ({ currentTab= 1, tabOptions= [1, 2, 3, 4, 5] }: TabBarProps) => {

  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState(currentTab)


  const handleTabChange = (tab: number) => {
    setSelectedTab(tab)
    setCookie('selectedTab', tab.toString())
    router.refresh()
  }

  return (
    <div 
      style={{ display: 'grid', gridTemplateColumns: `repeat(${tabOptions.length}, 1fr)` }}
      className="w-full space-x-2 rounded-xl bg-gray-200 p-2"
    >
      {tabOptions?.map((option) => (
        <div key={option}>
          <input
            type="radio"
            id={option.toString()}
            className="peer hidden"
            checked={selectedTab === option}
            onChange={() => handleTabChange(option)}
          />
          <label
            htmlFor={option.toString()}
            className="block cursor-pointer select-none rounded-xl p-2 text-center transition-all duration-300 ease-in-out
              peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white
              bg-transparent"
          >
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
