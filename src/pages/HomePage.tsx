import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Timeline from '@/components/sections/Timeline'
import Skills from '@/components/sections/Skills'
import Portfolio from '@/components/sections/Portfolio'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Timeline />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
