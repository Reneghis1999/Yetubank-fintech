import {
  ShieldCheck,
  LockKeyhole,
  Server,
} from "lucide-react"

const securityStats = [
  {
    title: "BCEAO",
    description: "Conformité réglementaire",
    icon: ShieldCheck,
  },
  {
    title: "AES-256",
    description: "Chiffrement des données",
    icon: LockKeyhole,
  },
  {
    title: "99.9%",
    description: "Disponibilité des services",
    icon: Server,
  },
]

export default function InfrastructureSection() {
  return (
    <section className="px-6 py-24 md:px-16">

      <div className="mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[40px] bg-emerald-950 px-8 py-14 text-white md:px-14 md:py-20">

          {/* BACKGROUND EFFECTS */}
          <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-green-500/20 blur-3xl" />

          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

          {/* CONTENT */}
          <div className="relative grid gap-14 lg:grid-cols-2 lg:items-center">

            {/* LEFT */}
            <div className="max-w-2xl">

              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-400">
                
                Infrastructure sécurisée    
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                Votre argent mérite une technologie de confiance.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-emerald-100 md:text-lg">
                YetuBank construit une expérience financière moderne,
                sécurisée et pensée pour accompagner le quotidien des
                utilisateurs africains avec rapidité, stabilité et transparence.
              </p>

            </div>

            {/* RIGHT */}
            <div className="grid gap-5 sm:grid-cols-3">

              {securityStats.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10">

                      <Icon className="h-6 w-6 text-green-400" />

                    </div>

                    <div className="mt-6">

                      <h3 className="text-3xl font-bold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-emerald-100">
                        {item.description}
                      </p>

                    </div>

                  </div>
                )
              })}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}