import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-6 py-20 md:px-16">

      {/* Background glow */}
      <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* TEXT */}
        <div className="space-y-6 text-center md:text-left">

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Gérez votre argent simplement avec{" "}
            <span className="text-green-600">YetuBank</span>
          </h1>

          <p className="mx-auto max-w-lg text-base text-gray-600 md:mx-0 md:text-lg">
            Envoyez, recevez et gérez votre argent depuis une plateforme moderne,
            sécurisée et conçue pour l’Afrique.
          </p>

          {/* CTA */}
          <div className="flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">

            {/* REGISTER */}
            <Link href="/register">
              <Button className="bg-green-600 px-6 py-5 text-base text-white hover:bg-green-700 cursor-pointer">
                Créer un compte
              </Button>
            </Link>

            {/* LOGIN */}
            <Link href="/login">
              <Button
                variant="outline"
                className="border-green-600 px-6 py-5 text-base text-green-600 hover:bg-green-50 cursor-pointer"
              >
                Se connecter
              </Button>
            </Link>

          </div>

          <p className="text-sm text-gray-500">
            Déjà adopté par{" "}
            <span className="font-semibold text-green-600">
              +10 000 utilisateurs
            </span>
          </p>

        </div>

        {/* IMAGE */}
        <div className="flex justify-center">

          <Image
            src="/images/mockupphone.png"
            alt="YetuBank App Preview"
            width={420}
            height={520}
            priority
            className="drop-shadow-2xl"
          />

        </div>

      </div>

    </section>
  )
}