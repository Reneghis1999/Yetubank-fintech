"use client"

import {
  Wifi,
  Eye,
  EyeOff,
} from "lucide-react"

import { useState } from "react"

type BankCardProps = {
  holderName: string
  cardNumber: string
  expiryDate: string
  balance: number
}

export default function BankCard({
  holderName,
  cardNumber,
  expiryDate,
  balance,
}: BankCardProps) {
  const [showNumber, setShowNumber] =
    useState(false)

  const formattedNumber = showNumber
    ? cardNumber
    : "**** **** **** 2048"

  return (
    <div className="relative overflow-hidden rounded-3xl bg-black p-7 text-white shadow-2xl">

      {/* BACKGROUND GLOW */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-500/20 blur-3xl" />

      <div className="relative z-10">

        {/* TOP */}
        <div className="flex items-start justify-between">
          
          <div>
            <p className="text-sm text-gray-300">
              Carte Virtuelle
            </p>

            <h2 className="mt-1 text-2xl font-bold">
              YetuBank
            </h2>
          </div>

          <Wifi className="h-7 w-7 rotate-90 text-white/80" />

        </div>

        {/* BALANCE */}
        <div className="mt-10">
          <p className="text-sm text-gray-300">
            Solde disponible
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {balance.toLocaleString()} XOF
          </h3>
        </div>

        {/* CARD NUMBER */}
        <div className="mt-8 flex items-center justify-between">

          <p className="text-lg tracking-[0.3em]">
            {formattedNumber}
          </p>

          <button
            onClick={() =>
              setShowNumber(!showNumber)
            }
            className="transition hover:opacity-70"
          >
            {showNumber ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>

        </div>

        {/* FOOTER */}
        <div className="mt-8 flex items-end justify-between">

          <div>
            <p className="text-xs uppercase text-gray-400">
              Titulaire
            </p>

            <p className="mt-1 font-medium">
              {holderName}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase text-gray-400">
              Expire
            </p>

            <p className="mt-1 font-medium">
              {expiryDate}
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}