"use client"
import React from "react";
import { CiBellOn, CiChat1, CiMenuBurger, CiSearch } from "react-icons/ci";
import { signOut } from "next-auth/react"


export const TopMenu = () => {



  return (
    <>
      {/* TODO: src/components <TopMenu /> */}
      <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
        <div className="px-6 flex items-center justify-between space-x-4">
          <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
            Dashboard
          </h5>
          <button className="w-12 h-16 -mr-2 border-r lg:hidden">
            <CiMenuBurger size={30} />
          </button>
          <div className="flex justify-between items-center space-x-2">
            <div hidden className="md:block">
              <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                  <CiSearch />
                </span>
              </div>
            </div>
            <button className="text-gray-100 bg-gray-500 rounded-xl p-2 cursor-pointer hover:bg-gray-600" onClick={() => signOut()}>Cerrar sesión</button>
            
            

            <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
              <CiSearch />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
              <CiChat1 size={25} />
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
              <CiBellOn size={25} />
            </button>
          </div>
        </div>
      </div>
      {/* TODO: Fin del <TopMenu /> */}
    </>
  );
};
