type TransactionType = "deposit" | "withdraw"

type Transaction = {
  id: number
  type: TransactionType
  amount: number
  date: string
}

export const transactions: Transaction[] = [
  {
    id: 1,
    type: "deposit",
    amount: 50000,
    date: "2026-05-20",
  },
  {
    id: 2,
    type: "withdraw",
    amount: 12000,
    date: "2026-05-21",
  },
  {
    id: 3,
    type: "deposit",
    amount: 70000,
    date: "2026-05-22",
  },
]