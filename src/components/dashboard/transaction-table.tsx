"use client"

import {
  ArrowDownRight,
  ArrowUpRight,
} from "lucide-react"

import { transactions } from "@/lib/mock/transactions"

type TransactionType = "deposit" | "withdraw"

type Transaction = {
  id: number
  type: TransactionType
  amount: number
  date: string
}

export default function TransactionTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
      
      <table className="w-full min-w-[600px] border-collapse">
        
        <thead>
          <tr className="border-b bg-gray-50">
            
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Type
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
              Date
            </th>

            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
              Montant
            </th>

            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-600">
              Statut
            </th>

          </tr>
        </thead>

        <tbody>

          {transactions.map((transaction: Transaction) => {
            const isDeposit =
              transaction.type === "deposit"

            return (
              <tr
                key={transaction.id}
                className="border-b last:border-none transition-colors hover:bg-gray-50"
              >
                
                {/* TYPE */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        isDeposit
                          ? "bg-green-100"
                          : "bg-red-100"
                      }`}
                    >
                      {isDeposit ? (
                        <ArrowDownRight className="h-5 w-5 text-green-600" />
                      ) : (
                        <ArrowUpRight className="h-5 w-5 text-red-500" />
                      )}
                    </div>

                    <div>
                      <p className="font-medium text-gray-900">
                        {isDeposit
                          ? "Dépôt"
                          : "Retrait"}
                      </p>

                      <p className="text-sm text-gray-500">
                        Transaction bancaire
                      </p>
                    </div>

                  </div>
                </td>

                {/* DATE */}
                <td className="px-6 py-5 text-sm text-gray-600">
                  {transaction.date}
                </td>

                {/* AMOUNT */}
                <td
                  className={`px-6 py-5 text-right text-sm font-semibold ${
                    isDeposit
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {isDeposit ? "+" : "-"}
                  {transaction.amount.toLocaleString()} XOF
                </td>

                {/* STATUS */}
                <td className="px-6 py-5 text-right">
                  <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                    Complété
                  </span>
                </td>

              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  )
}