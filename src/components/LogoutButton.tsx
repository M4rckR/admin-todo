"use client";
import { signOut, useSession } from "next-auth/react";
import { CiLogout } from "react-icons/ci";

export const LogoutButton = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
    <button
      disabled
      className="px-4 w-full text-center flex justify-center py-3 bg-gray-700 cursor-not-allowed items-center space-x-4 rounded-md text-gray-400 group animate-pulse"
    >
      <CiLogout color="#AAA" />
      <span className="text-gray-300">Cargando...</span>
    </button>
    );
  }

  return (
    <button
      onClick={() => signOut()}
      className="px-4 w-full text-center flex justify-center py-3 bg-gray-700 cursor-pointer items-center space-x-4 rounded-md text-gray-600 group"
    >
      <CiLogout color="#FFF" />
      <span className="text-white">Logout</span>
    </button>
  );
};
