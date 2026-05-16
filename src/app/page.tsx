import Navbar from "@/components/landing/Navbar"
import Hero from "@/components/landing/Hero"
import Features from "@/components/landing/Features"
import Footer from "@/components/landing/Footer"
import Security from "@/components/landing/Security"
import CTA from "@/components/landing/CTA"
import Reasons from "@/components/landing/Reasons"


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Security />
      <Features />
      <Reasons />
      <CTA />
      <Footer />
      
    </>
  )
}