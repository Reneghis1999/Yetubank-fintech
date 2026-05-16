"use client"

import { CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

const reasons = [
  "Ouverture de compte rapide et gratuite",
  "Transactions sécurisées en temps réel",
  "Interface simple et intuitive",
  "Support client disponible 24/7",
]

export default function WhyYetuBank() {
  return (
    <section id="why" className="bg-slate-50 px-6 py-28 md:px-16">

      <div className="mx-auto max-w-7xl">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
            Pourquoi YetuBank
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-5xl">
            Une nouvelle façon de gérer votre argent
          </h2>
        </motion.div>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-white p-10 shadow-xl md:p-16"
        >

          {/* glow */}
          <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-green-100/40 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-slate-100/40 blur-3xl" />

          <div className="relative grid gap-12 md:grid-cols-2 md:items-center">

            {/* LEFT */}
            <div className="space-y-6">

              <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl">
                Tout ce dont vous avez besoin dans une seule plateforme
              </h3>

              <p className="text-gray-600 leading-relaxed">
                YetuBank vous permet de gérer vos finances simplement,
                rapidement et en toute sécurité, directement depuis votre mobile.
              </p>

            </div>

            {/* RIGHT */}
            <div className="space-y-5">

              {reasons.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />

                  <p className="text-sm text-gray-700">{item}</p>
                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  )
}