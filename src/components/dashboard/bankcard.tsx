"use client"

import { useEffect, useState } from "react"

import {
  Wifi,
  CreditCard,
} from "lucide-react"

import {
  getCurrentUser,
} from "@/lib/auth"

import type { User } from "@/lib/auth"

export default function BankCard() {
  const [user, setUser] =
    useState<User | null>(null)

  useEffect(() => {
    async function fetchUser() {
      const currentUser =
        await getCurrentUser()

      setUser(currentUser)
    }

    fetchUser()
  }, [])

  const cardHolder =
    user?.email
      ?.split("@")[0]
      ?.toUpperCase() ||
    "YETUBANK USER"

  const balance = 125000

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-black via-gray-900 to-green-700 p-7 text-white shadow-2xl">

      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-green-400/20 blur-3xl" />

      <div className="relative z-10 flex h-full flex-col justify-between">

        <div className="flex items-start justify-between">

          <div>
            <p className="text-sm text-white/70">
              Solde disponible
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              {balance.toLocaleString()} XOF
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <Wifi className="h-5 w-5 rotate-90 text-white/80" />

            <div className="rounded-xl bg-white/10 p-2 backdrop-blur-md">
              <CreditCard className="h-5 w-5 text-white" />
            </div>
          </div>

        </div>

        <div className="mt-10">
          <p className="text-lg tracking-[0.3em] text-white/90">
            5356 •••• •••• 4589
          </p>
        </div>

        <div className="mt-8 flex items-end justify-between">

          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">
              Titulaire
            </p>

            <p className="mt-1 text-sm font-medium tracking-wide">
              {cardHolder}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-white/60">
              Expire
            </p>

            <p className="mt-1 text-sm font-medium">
              12/29
            </p>
          </div>

          <div>
            <p className="text-2xl font-bold italic tracking-tight">
              VISA
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}