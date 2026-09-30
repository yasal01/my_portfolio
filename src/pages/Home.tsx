import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { FeaturedContent } from '../components/FeaturedContent'
import { Hero } from '../components/Hero'
import { Marquee } from '../components/Marquee'
import { MoreProjects } from '../components/MoreProjects'
import { Process } from '../components/Process'
import { SelectedWork } from '../components/SelectedWork'
import { Services } from '../components/Services'

/** Hero → Selected work → Content in motion → More projects → Services → About → Process → Contact */
export function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <SelectedWork />
      <FeaturedContent />
      <MoreProjects />
      <Services />
      <About />
      <Process />
      <Contact />
    </main>
  )
}
