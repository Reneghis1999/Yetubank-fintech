"use client"

import {
  ArrowUpRight,
  Lock,
  Plus,
} from "lucide-react"

const actions = [
  {
    title: "Envoyer",
    icon: ArrowUpRight,
  },
  {
    title: "Bloquer",
    icon: Lock,
  },
  {
    title: "Nouvelle carte",
    icon: Plus,
  },
]

export default function CardActions() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

      {actions.map((action) => (
        <button
          key={action.title}
          className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition hover:border-green-500 hover:shadow-md"
        >
          <div className="rounded-xl bg-green-100 p-3">
            <action.icon className="h-5 w-5 text-green-600" />
          </div>

          <span className="font-medium text-gray-800">
            {action.title}
          </span>
        </button>
      ))}
    </div>
  )
}