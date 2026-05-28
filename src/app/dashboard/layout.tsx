"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

import { getCurrentUser } from "@/lib/auth"

import Sidebar from "@/components/dashboard/sidebar"
import Topbar from "@/components/dashboard/topbar"
import Bankcard from "@/components/dashboard/bankcard"

type DashboardLayoutProps = {
  children: React.ReactNode
}

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const router = useRouter()

  useEffect(() => {
    const user = getCurrentUser()

    if (!user) {
      router.push("/auth/login")
    }
  }, [router])

  return (
    <div className="flex min-h-screen bg-[#f7f8fa]">
      
      {/* SIDEBAR */}
      <Sidebar />

      {/* RIGHT SIDE */}
      <div className="flex flex-1 flex-col">

        {/* TOPBAR */}
        <Topbar />

        {/* MAIN CONTENT */}
        <main className="flex-1 p-6 md:p-8">

          <div className="grid gap-8 xl:grid-cols-[1fr_380px]">

            {/* PAGE CONTENT */}
            <div>
              {children}
            </div>

            {/* RIGHT PANEL */}
            <div className="space-y-6">

              {/* BANK CARD */}
              <Bankcard />

            </div>

          </div>

        </main>

      </div>

    </div>
  )
}