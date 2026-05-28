"use client"

import { useEffect, useState } from "react"

import {
  ArrowDownRight,
  ArrowUpRight,
  Wallet,
} from "lucide-react"

import { getCurrentUser } from "@/lib/auth"
import type { User } from "@/lib/auth"

import { transactions } from "@/lib/mock/transactions"

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const currentUser = getCurrentUser()

    setUser(currentUser)
  }, [])

  if (!user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-gray-500">
          Chargement...
        </p>
      </div>
    )
  }

  const balance = 125000

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Bonjour 👋 {user.email}
        </h1>

        <p className="mt-1 text-gray-500">
          Voici un aperçu de votre activité financière
        </p>
      </div>

      {/* BALANCE */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Solde disponible
            </p>

            <h2 className="mt-1 text-3xl font-bold text-gray-900">
              {balance.toLocaleString()} XOF
            </h2>
          </div>

          <div className="rounded-xl bg-green-50 p-3">
            <Wallet className="h-6 w-6 text-green-600" />
          </div>

        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        <div className="rounded-2xl border bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Dépenses
            </p>

            <ArrowDownRight className="h-5 w-5 text-red-500" />
          </div>

          <h3 className="mt-2 text-xl font-bold">
            -45,000 XOF
          </h3>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Revenus
            </p>

            <ArrowUpRight className="h-5 w-5 text-green-600" />
          </div>

          <h3 className="mt-2 text-xl font-bold">
            +120,000 XOF
          </h3>
        </div>

        <div className="rounded-2xl border bg-white p-5">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Épargne
            </p>

            <Wallet className="h-5 w-5 text-blue-500" />
          </div>

          <h3 className="mt-2 text-xl font-bold">
            30,000 XOF
          </h3>
        </div>

      </div>

      {/* TRANSACTIONS */}
      <div className="rounded-2xl border bg-white p-6">

        <h2 className="mb-4 text-lg font-semibold">
          Dernières transactions
        </h2>

        <div className="space-y-4">

          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between border-b pb-3 last:border-none"
            >

              <div>
                <p className="font-medium capitalize text-gray-800">
                  {tx.type}
                </p>

                <p className="text-xs text-gray-500">
                  {tx.date}
                </p>
              </div>

              <div
                className={`font-semibold ${
                  tx.type === "deposit"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {tx.type === "deposit" ? "+" : "-"}
                {tx.amount.toLocaleString()} XOF
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  )
}