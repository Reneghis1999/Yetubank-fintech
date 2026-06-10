"use client"

import { useEffect, useState } from "react"

import {
  getTransactions,
  getCurrentUser,
} from "@/lib/auth"

import type {
  Transaction,
  User,
} from "@/lib/auth"

export default function TransactionTable() {
  const [transactions, setTransactions] =
    useState<Transaction[]>([])

  const [user, setUser] =
    useState<User | null>(null)

  useEffect(() => {
    async function fetchData() {
      const txs =
        await getTransactions()

      const currentUser =
        await getCurrentUser()

      setTransactions(txs)
      setUser(currentUser)
    }

    fetchData()
  }, [])

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-lg font-semibold text-gray-900">
        Historique des transactions
      </h2>

      {transactions.length === 0 ? (
        <p className="text-sm text-gray-500">
          Aucune transaction trouvée.
        </p>
      ) : (
        <div className="space-y-4">

          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between border-b pb-4 last:border-none"
            >

              <div>
                <p className="font-medium capitalize text-gray-900">
                  {tx.transaction_type}
                </p>

                <p className="text-sm text-gray-500">
                  {new Date(
                    tx.created_at
                  ).toLocaleDateString()}
                </p>
              </div>

              <div
                className={`font-semibold ${
                  tx.sender === user?.username
                    ? "text-red-500"
                    : "text-green-600"
                }`}
              >
                {tx.sender === user?.username
                  ? "-"
                  : "+"}

                {Number(tx.amount).toLocaleString()} XOF
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  )
}