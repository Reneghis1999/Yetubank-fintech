"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  LayoutDashboard,
  ArrowLeftRight,
  CreditCard,
  Settings,
  Bell,
  Wallet,
  PiggyBank,
  BarChart3,
  Receipt,
  LogOut,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { logoutUser } from "@/lib/auth"

const mainNavItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Transactions",
    href: "/dashboard/transactions",
    icon: ArrowLeftRight,
  },
  {
    label: "Cartes",
    href: "/dashboard/cards",
    icon: CreditCard,
  },
  {
    label: "Notifications",
    href: "/dashboard/notifications",
    icon: Bell,
  },
]

const financeNavItems = [
  {
    label: "Portefeuille",
    href: "/dashboard/wallet",
    icon: Wallet,
  },
  {
    label: "Épargne",
    href: "/dashboard/savings",
    icon: PiggyBank,
  },
  {
    label: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    label: "Factures",
    href: "/dashboard/bills",
    icon: Receipt,
  },
  {
    label: "Paramètres",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

type NavItem = {
  label: string
  href: string
  icon: React.ElementType
}

type NavSectionProps = {
  title: string
  items: NavItem[]
  collapsed: boolean
}

function NavSection({
  title,
  items,
  collapsed,
}: NavSectionProps) {
  const pathname = usePathname()

  return (
    <div className="mb-8">

      {!collapsed && (
        <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          {title}
        </p>
      )}

      <div className="flex flex-col gap-2">

        {items.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                collapsed ? "justify-center" : "gap-3"
              } ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-gray-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5 shrink-0" />

              {!collapsed && (
                <span>{item.label}</span>
              )}
            </Link>
          )
        })}

      </div>

    </div>
  )
}

function SidebarContent() {
  const [collapsed, setCollapsed] = useState(false)

  const handleLogout = () => {
    logoutUser()
    window.location.href = "/auth/login"
  }

  return (
    <aside
      className={`flex h-full flex-col border-r border-white/10 bg-[#0F172A] transition-all duration-300 ${
        collapsed ? "w-20" : "w-72"
      }`}
    >

      {/* HEADER */}
      <div className="border-b border-white/10 px-4 py-5">

        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "justify-between"
          }`}
        >

          {/* LOGO */}
          <div
            className={`flex items-center ${
              collapsed ? "justify-center" : "gap-3"
            }`}
          >

            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/20">
              <Wallet className="h-6 w-6 text-green-400" />
            </div>

            {!collapsed && (
              <div>
                <h1 className="text-lg font-bold text-white">
                  YetuBank
                </h1>

                <p className="text-xs text-gray-400">
                      Banque Digitale
                </p>
              </div>
            )}

          </div>

          {!collapsed && (
            <button
              onClick={() => setCollapsed(true)}
              className="rounded-xl p-2 text-gray-300 transition hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}

        </div>

        {collapsed && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => setCollapsed(false)}
              className="rounded-xl p-2 text-gray-300 transition hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

      </div>

      {/* NAVIGATION */}
      <div className="flex-1 overflow-y-auto px-3 py-6">

        <NavSection
          title="Principal"
          items={mainNavItems}
          collapsed={collapsed}
        />

        <NavSection
          title="Finance"
          items={financeNavItems}
          collapsed={collapsed}
        />

      </div>

      {/* FOOTER */}
      <div className="border-t border-white/10 p-3">

        <button
          onClick={handleLogout}
          className={`cursor-pointer flex w-full items-center rounded-2xl px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10 ${
            collapsed ? "justify-center" : "gap-3"
          }`}
        >
          <LogOut className="h-5 w-5" />

          {!collapsed && (
            <span>Déconnexion</span>
          )}

        </button>

      </div>

    </aside>
  )
}

export default function Sidebar() {
  return (
    <>
      {/* DESKTOP */}
      <div className="hidden md:block">
        <SidebarContent />
      </div>

      {/* MOBILE */}
      <div className="p-4 md:hidden">

        <Sheet>

          <SheetTrigger asChild>
            <button className="rounded-xl border border-gray-200 bg-white p-2 shadow-sm">
              <Menu className="h-6 w-6 text-gray-800" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[300px] p-0"
          >
            <SidebarContent />
          </SheetContent>

        </Sheet>

      </div>
    </>
  )
}