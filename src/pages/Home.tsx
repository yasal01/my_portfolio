import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { FeaturedContent } from '../components/FeaturedContent'
import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { Process } from '../components/Process'
import { SelectedWork } from '../components/SelectedWork'
import { Services } from '../components/Services'

export function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <FeaturedContent />
      <SelectedWork />
      <Services />
      <About />
      <Process />
      <Contact />
    </main>
  )
}
