// components/dashboard/topbar.tsx

"use client"

import { Bell, LogOut, Search } from "lucide-react"

import {
  getCurrentUser,
  logoutUser,
} from "@/lib/auth"

import { useRouter } from "next/navigation"

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Topbar() {
  const router = useRouter()

  const user = getCurrentUser()

  const handleLogout = () => {
    logoutUser()

    router.push("/auth/login")
  }

  const userInitial =
    user?.email?.charAt(0).toUpperCase() || "Y"

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-gray-200 bg-white/90 px-6 backdrop-blur-xl">

      {/* LEFT */}
      <div className="flex items-center gap-4">

        {/* SEARCH */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

          <Input
            placeholder="Rechercher..."
            className="h-11 w-[260px] rounded-xl border-gray-200 bg-gray-50 pl-10 focus-visible:ring-green-500"
          />
        </div>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* NOTIFICATIONS */}
        <button
          className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white transition hover:bg-gray-50"
        >
          <Bell className="h-5 w-5 text-gray-700" />

          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-green-500" />
        </button>

        {/* USER */}
        <div className="hidden items-center gap-3 md:flex">

          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-green-100 text-sm font-semibold text-green-700">
              {userInitial}
            </AvatarFallback>
          </Avatar>

          <div className="leading-tight">
            <p className="text-sm font-semibold text-gray-900">
              YetuBank User
            </p>

            <p className="text-xs text-gray-500">
              {user?.email}
            </p>
          </div>

        </div>

        {/* LOGOUT */}
        <Button
          variant="outline"
          onClick={handleLogout}
          className="h-11 rounded-xl border-gray-200 cursor-pointer"
        >
          <LogOut className="mr-2 h-4 w-4" />

          <span className="hidden md:inline">
            Déconnexion
          </span>
        </Button>

      </div>
    </header>
  )
}