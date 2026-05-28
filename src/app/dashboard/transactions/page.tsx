import {
  ArrowDownRight,
  ArrowUpRight,
  Wallet,
} from "lucide-react"

import TransactionTable from "@/components/dashboard/transaction-table"

export default function TransactionsPage() {
  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Transactions
        </h1>

        <p className="mt-1 text-gray-500">
          Consultez l’historique complet de vos transactions.
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* TOTAL REVENUS */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Revenus
            </p>

            <div className="rounded-xl bg-green-100 p-2">
              <ArrowDownRight className="h-5 w-5 text-green-600" />
            </div>
          </div>

          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            +120,000 XOF
          </h2>
        </div>

        {/* TOTAL DEPENSES */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Dépenses
            </p>

            <div className="rounded-xl bg-red-100 p-2">
              <ArrowUpRight className="h-5 w-5 text-red-500" />
            </div>
          </div>

          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            -45,000 XOF
          </h2>
        </div>

        {/* SOLDE */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              Solde actuel
            </p>

            <div className="rounded-xl bg-blue-100 p-2">
              <Wallet className="h-5 w-5 text-blue-600" />
            </div>
          </div>

          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            125,000 XOF
          </h2>
        </div>

      </div>

      {/* TRANSACTIONS TABLE */}
      <TransactionTable />

    </div>
  )
}