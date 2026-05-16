import { ShieldCheck, Lock, Fingerprint, CheckCircle } from "lucide-react"

export default function SecuritySection() {
  return (
    <section
      id="security"
      className="relative overflow-hidden bg-white px-6 py-20 md:py-28 md:px-16"
    >

      {/* background effects */}
      <div className="absolute -top-32 right-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-green-100/40 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-72 w-72 md:h-96 md:w-96 rounded-full bg-slate-100/40 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 md:gap-20 md:grid-cols-2">

        {/* LEFT */}
        <div className="space-y-6 text-center md:text-left">

          <div className="space-y-3">

            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-green-600">
              Sécurité
            </p>

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
              Une protection pensée pour une confiance totale
            </h2>

            <p className="text-sm md:text-base leading-relaxed text-gray-600 md:text-lg max-w-xl mx-auto md:mx-0">
              Toutes vos transactions sont protégées par une infrastructure sécurisée
              de niveau bancaire.
            </p>

          </div>

          {/* LIST */}
          <div className="space-y-4 flex flex-col items-center md:items-start">

            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                Chiffrement de bout en bout
              </p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                Surveillance des transactions en temps réel
              </p>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                Authentification renforcée
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* badges - hidden on very small screens */}
          <div className="hidden sm:flex absolute left-0 md:-left-6 top-10 items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <ShieldCheck className="h-4 w-4 text-green-600" />
            <span className="text-xs">Sécurisé</span>
          </div>

          <div className="hidden sm:flex absolute right-0 md:-right-6 bottom-10 items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm">
            <Lock className="h-4 w-4 text-green-600" />
            <span className="text-xs">Chiffré</span>
          </div>

          <div className="flex flex-col items-center text-center">

            <div className="flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-green-100">
              <Fingerprint className="h-8 w-8 md:h-10 md:w-10 text-green-600" />
            </div>

            <h3 className="mt-5 md:mt-6 text-lg md:text-xl font-semibold text-gray-900">
              Système actif 24/7
            </h3>

            <p className="mt-2 text-sm text-gray-600 max-w-sm">
              Protection continue de toutes vos opérations
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}