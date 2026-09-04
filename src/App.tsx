import { useEffect } from 'react'
import Lenis from 'lenis'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { ProductShowcase } from './components/ProductShowcase'
import { IndustrySolutions } from './components/IndustrySolutions'
import { PainPoints } from './components/PainPoints'
import { Workflow } from './components/Workflow'
import { Features } from './components/Features'
import { Customers } from './components/Customers'
import { Implementation } from './components/Implementation'
import { Consultant } from './components/Consultant'
import { LeadForm } from './components/LeadForm'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { FloatingContact } from './components/FloatingContact'
import { initAnalytics } from './lib/analytics'

function configureCanonical() {
  const configured = import.meta.env.VITE_SITE_URL as string | undefined
  const url = configured || window.location.href.split(/[?#]/)[0]
  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = url

  let ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
  if (!ogUrl) {
    ogUrl = document.createElement('meta')
    ogUrl.setAttribute('property', 'og:url')
    document.head.appendChild(ogUrl)
  }
  ogUrl.content = url

  const ogImage = document.querySelector<HTMLMetaElement>('meta[property="og:image"]')
  if (ogImage) ogImage.content = new URL(`${import.meta.env.BASE_URL}og-image.png`, window.location.href).href
  const twitterImage = document.querySelector<HTMLMetaElement>('meta[name="twitter:image"]')
  if (twitterImage) twitterImage.content = new URL(`${import.meta.env.BASE_URL}og-image.png`, window.location.href).href
}

export default function App() {
  useEffect(() => {
    initAnalytics()
    configureCanonical()

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const lenis = new Lenis({ duration: 0.85, smoothWheel: true })
    let frame = 0
    const raf = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <ProductShowcase />
        <IndustrySolutions />
        <PainPoints />
        <Workflow />
        <Features />
        <Consultant />
        <Implementation />
        <Customers />
        <LeadForm />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}
