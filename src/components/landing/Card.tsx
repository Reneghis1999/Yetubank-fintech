"use client"

import Image from "next/image"
import { CreditCard, ShieldCheck, Zap } from "lucide-react"

export default function CardsSection() {
  return (
    <section className="w-full bg-white py-20 md:py-24 px-6 md:px-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6 text-center md:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 text-sm font-medium mx-auto md:mx-0">
            <CreditCard className="w-4 h-4" />
            Cartes YetuBank
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Des cartes bancaires modernes pour une nouvelle expérience financière
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg">
            Gérez votre argent facilement avec des cartes intelligentes conçues pour les paiements,
            les économies et le suivi en temps réel.
          </p>

          {/* Features */}
          <div className="space-y-6 pt-2">

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
              <Zap className="w-5 h-5 text-green-600 mt-0 md:mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Paiements instantanés
                </h4>
                <p className="text-sm text-gray-600">
                  Effectuez vos transactions rapidement partout dans le monde.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
              <ShieldCheck className="w-5 h-5 text-green-600 mt-0 md:mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Sécurité avancée
                </h4>
                <p className="text-sm text-gray-600">
                  Vos données et transactions sont protégées en temps réel.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 text-center md:text-left">
              <CreditCard className="w-5 h-5 text-green-600 mt-0 md:mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900">
                  Suivi intelligent
                </h4>
                <p className="text-sm text-gray-600">
                  Analyse automatique de vos dépenses et habitudes.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center">

          {/* glow background */}
          <div className="absolute w-64 h-64 md:w-72 md:h-72 bg-green-100 blur-3xl rounded-full opacity-50"></div>

          {/* card image */}
          <Image
            src="/images/yetubank-cards (1).svg"
            alt="Cartes YetuBank"
            width={500}
            height={500}
            className="relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />

        </div>

      </div>
    </section>
  )
}