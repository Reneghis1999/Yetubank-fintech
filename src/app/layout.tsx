import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "YetuBank - Digital Banking for Africa",
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
    title: "YetuBank - Digital Banking for Africa",
    description:
      "Gérez votre argent facilement avec YetuBank, une solution fintech moderne pour l'Afrique.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}