import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Toaster } from "sonner"

import "./globals.css"

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "YetuBank - Banque Digitale pour l'Afrique",
  description:
    "YetuBank est une plateforme de banque digitale moderne permettant de gérer, envoyer et recevoir de l'argent facilement et en toute sécurité en Afrique.",
  keywords: [
    "YetuBank",
    "digital banking",
    "fintech africa",
    "mobile money",
    "wallet",
    "online banking",
  ],
  authors: [{ name: "YetuBank Team" }],
  creator: "YetuBank",
  openGraph: {
    title: "YetuBank - Banque Digitale pour l'Afrique",
    description:
      "Gérez votre argent facilement avec YetuBank, une solution fintech moderne pour l'Afrique.",
    type: "website",
  },
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html
      lang="fr"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}

        {/* GLOBAL TOASTER */}
        <Toaster
          richColors
          position="top-right"
          closeButton
        />
      </body>
    </html>
  )
}