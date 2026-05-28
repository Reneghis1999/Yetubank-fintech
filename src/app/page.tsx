import Navbar from "@/components/landing/Navbar"
import Hero from "@/components/landing/Hero"
import Features from "@/components/landing/Features"
import Footer from "@/components/landing/Footer"
import Security from "@/components/landing/Security"
import CTA from "@/components/landing/CTA"
import Reasons from "@/components/landing/Reasons"
import Infra from "@/components/landing/Infra"
import Card from "@/components/landing/Card"


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Security />
      <Features />
      <Infra />
      <Card />
      <Reasons />
      <CTA />
      <Footer />
      
    </>
  )
}