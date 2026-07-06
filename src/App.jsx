import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { Hero } from '@/features/portfolio/components/Hero'
import { FeatureStrip } from '@/features/portfolio/components/FeatureStrip'
import { About } from '@/features/portfolio/components/About'
import { PortfolioSection } from '@/features/portfolio/components/PortfolioSection'
import { SkillsSection } from '@/features/portfolio/components/SkillsSection'
import { ServicesSection } from '@/features/portfolio/components/ServicesSection'
import { ContactSection } from '@/features/contact/components/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <Hero />
      <FeatureStrip />
      <About />
      <PortfolioSection />
      <SkillsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
