import Link from "next/link"
import Image from "next/image"

import { FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi"

const productLinks = [
  { label: "Fonctionnalités", href: "#features" },
  { label: "Sécurité", href: "#security" },
  { label: "Portefeuille", href: "#" },
]

const companyLinks = [
  { label: "À propos", href: "#" },
  { label: "Contact", href: "#contact" },
  { label: "Support", href: "#" },
]

const legalLinks = [
  { label: "Confidentialité", href: "#" },
  { label: "Conditions", href: "#" },
]

const socials = [
  { icon: FiTwitter, href: "#" },
  { icon: FiLinkedin, href: "#" },
  { icon: FiInstagram, href: "#" },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black px-6 py-20 text-zinc-400 md:px-16"
    >

      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="grid gap-14 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-5">

          {/* BRAND */}
          <div className="lg:col-span-2">

            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/yetubank-logo-dark (1).svg"
                alt="YetuBank"
                width={170}
                height={50}
                className="h-auto w-44"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-400">
              YetuBank simplifie la gestion financière grâce à une plateforme
              moderne, sécurisée et pensée pour les utilisateurs africains.
            </p>

          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Produit
            </h3>

            <div className="space-y-4">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm transition hover:text-green-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Entreprise
            </h3>

            <div className="space-y-4">
              {companyLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm transition hover:text-green-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* LEGAL */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Légal
            </h3>

            <div className="space-y-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-sm transition hover:text-green-500"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row">

          <p className="text-sm text-zinc-500">
            © 2026 YetuBank. Tous droits réservés.
          </p>

          {/* SOCIALS */}
          <div className="flex items-center gap-3">

            {socials.map((social, index) => {
              const Icon = social.icon

              return (
                <Link
                  key={index}
                  href={social.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-green-500 hover:bg-green-500/10"
                >
                  <Icon className="h-4 w-4 text-zinc-300 hover:text-green-500" />
                </Link>
              )
            })}

          </div>

        </div>

      </div>

    </footer>
  )
}