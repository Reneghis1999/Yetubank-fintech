"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  LayoutDashboard,
  ArrowLeftRight,
  CreditCard,
  Settings,
  Wallet,
  PiggyBank,
  LogOut,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { logoutUser } from "@/lib/auth"

/* =========================
   TYPES
========================= */
type NavItem = {
  label: string
  href: string
  icon: React.ElementType
}

type NavSectionType = {
  title: string
  items: NavItem[]
}

/* =========================
   DATA (EN FRANÇAIS)
========================= */
const sidebarSections: NavSectionType[] = [
  {
    title: "PRINCIPAL",
    items: [
      { label: "Tableau de bord", href: "/dashboard", icon: LayoutDashboard },
      { label: "Transactions", href: "/dashboard/transactions", icon: ArrowLeftRight },
      { label: "Envoyer de l'argent", href: "/dashboard/send", icon: Wallet },
    ],
  },
  {
    title: "BANQUE",
    items: [
      { label: "Cartes", href: "/dashboard/cards", icon: CreditCard },
      { label: "Épargne", href: "/dashboard/savings", icon: PiggyBank },
    ],
  },
  {
    title: "SYSTÈME",
    items: [
      { label: "Paramètres", href: "/dashboard/settings", icon: Settings },
    ],
  },
]

/* =========================
   NAV SECTION
========================= */
function NavSection({
  title,
  items,
  collapsed,
}: {
  title: string
  items: NavItem[]
  collapsed: boolean
}) {
  const pathname = usePathname()

  return (
    <div className="mb-6">
      {!collapsed && (
        <p className="mb-3 px-3 text-xs font-semibold tracking-widest text-gray-500">
          {title}
        </p>
      )}

      <div className="flex flex-col gap-1">
        {items.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center rounded-xl px-4 py-3 text-sm transition-all duration-200 ${
                collapsed ? "justify-center" : "gap-3"
              } ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5 shrink-0" />

              {!collapsed && <span>{item.label}</span>}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

/* =========================
   SIDEBAR CONTENT
========================= */
function SidebarContent() {
  const [collapsed, setCollapsed] = useState(false)

  const handleLogout = () => {
    logoutUser()
    window.location.href = "/auth/login"
  }

  return (
    <aside
      className={`flex h-full flex-col border-r border-white/10 bg-[#0F172A] transition-all duration-300 overflow-hidden ${
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
                <h1 className="text-lg font-bold text-white">YetuBank</h1>
                <p className="text-xs text-gray-400">Banque Digitale</p>
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

      {/* QUICK ACTION */}
      {!collapsed && (
        <div className="px-3 pt-4">
          <button className="mb-4 w-full cursor-pointer rounded-xl bg-green-500/10 px-4 py-3 text-sm text-green-400 transition hover:bg-green-500/20">
            + Envoyer de l'argent
          </button>
        </div>
      )}

      {/* NAVIGATION */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        {sidebarSections.map((section) => (
          <NavSection
            key={section.title}
            title={section.title}
            items={section.items}
            collapsed={collapsed}
          />
        ))}
      </div>

      {/* FOOTER */}
      <div className="border-t border-white/10 p-3">
        <button
          onClick={handleLogout}
          className={`flex w-full items-center rounded-xl px-4 py-3 text-sm text-red-400 transition hover:bg-red-500/10 ${
            collapsed ? "justify-center" : "gap-3"
          }`}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span>Déconnexion</span>}
        </button>
      </div>
    </aside>
  )
}

/* =========================
   MAIN COMPONENT
========================= */
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

          <SheetContent side="left" className="w-[300px] p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}