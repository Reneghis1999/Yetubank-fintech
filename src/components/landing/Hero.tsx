"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-6 pb-20 pt-10 md:px-16 md:pt-16">

      {/* Background glow */}
      <div className="absolute -top-24 left-10 hidden h-72 w-72 rounded-full bg-green-400/20 blur-3xl md:block" />
      <div className="absolute bottom-0 right-10 hidden h-72 w-72 rounded-full bg-green-300/20 blur-3xl md:block" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-5 text-center md:text-left"
        >

          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-4 py-2 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                Banque digitale sécurisée pour l’Afrique
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl"
          >
            Gérez votre argent simplement avec{" "}
            <span className="text-green-600">YetuBank</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto max-w-lg text-base text-gray-600 md:mx-0 md:text-lg"
          >
            Envoyez, recevez et gérez votre argent depuis une plateforme moderne,
            sécurisée et conçue pour l’Afrique.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center gap-3 pt-2 sm:flex-row sm:justify-start"
          >

            {/* REGISTER */}
            <Link href="/auth/register">
              <Button className="cursor-pointer bg-green-600 px-6 py-5 text-base text-white transition-all duration-300 hover:bg-green-700 md:hover:scale-105">
                Créer un compte
              </Button>
            </Link>

            {/* DISCOVER SERVICES */}
            <a href="#features">
              <Button
                variant="outline"
                className="cursor-pointer border-green-600 px-6 py-5 text-base text-green-600 transition-all duration-300 hover:bg-green-50 md:hover:scale-105"
              >
                Découvrir nos services
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
            </a>

          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
            className="pt-1 text-sm text-gray-500"
          >
            Déjà adopté par{" "}
            <span className="font-semibold text-green-600">
              +10 000 utilisateurs
            </span>
          </motion.p>

        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden justify-center md:flex"
        >

          <Image
            src="/images/mockupphone.png"
            alt="YetuBank App"
            width={420}
            height={520}
            className="h-auto w-[420px] drop-shadow-2xl"
          />

        </motion.div>

        {/* MOBILE IMAGE WITHOUT ANIMATION */}
        <div className="flex justify-center md:hidden">

          <Image
            src="/images/mockupphone.png"
            alt="YetuBank App"
            width={420}
            height={520}
            className="h-auto w-[320px] drop-shadow-2xl"
          />

        </div>

      </div>

    </section>
  )
}