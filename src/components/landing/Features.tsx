import {
  ArrowUpRight,
  ShieldCheck,
  BarChart3,
  Wallet,
} from "lucide-react"

import {
  Card,
  CardContent,
} from "@/components/ui/card"

const features = [
  {
    title: "Transferts instantanés",
    description:
      "Envoyez et recevez de l’argent rapidement depuis votre portefeuille numérique.",
    icon: ArrowUpRight,
  },
  {
    title: "Paiements sécurisés",
    description:
      "Toutes vos transactions sont protégées avec une sécurité avancée.",
    icon: ShieldCheck,
  },
  {
    title: "Suivi des dépenses",
    description:
      "Analysez vos dépenses et gardez le contrôle sur votre budget.",
    icon: BarChart3,
  },
  {
    title: "Portefeuille mobile",
    description:
      "Accédez à votre argent partout depuis votre smartphone.",
    icon: Wallet,
  },
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="bg-white px-6 py-24 md:px-16"
    >

      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            SOLUTIONS
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Une expérience bancaire moderne pensée pour l’Afrique
          </h2>

          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            Gérez votre argent facilement grâce à une plateforme rapide,
            sécurisée et conçue pour le quotidien.
          </p>

        </div>

        {/* FEATURES GRID */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <Card
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:border-green-100 hover:shadow-2xl hover:shadow-green-100/40"
              >

                {/* Glow */}
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-green-100 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                <CardContent className="relative p-7">

                  {/* ICON */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 shadow-lg shadow-green-200 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">

                    <Icon className="h-8 w-8 text-white" />

                  </div>

                  {/* CONTENT */}
                  <div className="mt-7 space-y-3">

                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-gray-600">
                      {feature.description}
                    </p>

                  </div>

                </CardContent>

              </Card>
            )
          })}

        </div>

      </div>

    </section>
  )
}