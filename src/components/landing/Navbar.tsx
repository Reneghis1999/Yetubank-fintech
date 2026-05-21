"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Pourquoi YetuBank ?", href: "#why" },
  { label: "Produits & Services", href: "#features" },
  { label: "Sécurité", href: "#security" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"
  }, [open])

  return (
    <header className="relative flex items-center justify-between bg-white px-6 py-4 lg:px-16">

      {/* LOGO */}
      <Link href="/" className="flex items-center">
        <Image
          src="/images/yetubank-logo-light.svg"
          alt="YetuBank"
          width={180}
          height={60}
          priority
          className="h-12 w-auto md:h-14"
        />
      </Link>

      {/* DESKTOP NAV */}
      <nav className="hidden items-center gap-8 text-sm font-medium text-gray-600 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="transition-colors duration-200 hover:text-green-600"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <div className="hidden md:flex">
        <Link href="/auth/register">
          <Button className="rounded-full bg-black px-7 py-5 text-white transition-colors duration-300 cursor-pointer">
            Ouvrir un compte gratuit
          </Button>
        </Link>
      </div>

      {/* MOBILE BUTTON */}
      <button onClick={() => setOpen(true)} className="text-black md:hidden">
        <Menu size={26} />
      </button>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition duration-300 ${
          open
            ? "opacity-100 scale-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >

        {/* CLOSE */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6"
        >
          <X size={28} />
        </button>

        {/* LINKS */}
        <nav className="flex flex-col items-center gap-8 text-xl font-semibold text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="transition-colors duration-200 hover:text-green-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA MOBILE */}
        <div className="mt-10">
          <Link href="/register" onClick={() => setOpen(false)}>
            <Button className="rounded-full bg-black px-8 text-white transition-colors duration-300 hover:bg-green-600">
              Ouvrir un compte gratuit
            </Button>
          </Link>
        </div>

      </div>
    </header>
  )
}