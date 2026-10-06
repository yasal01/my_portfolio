import { About } from '../components/About'
import { CaseFiles } from '../components/CaseFiles'
import { Contact } from '../components/Contact'
import { Formats } from '../components/Formats'
import { Hero } from '../components/Hero'
import { LongForm } from '../components/LongForm'
import { Process } from '../components/Process'
import { Services } from '../components/Services'
import { ShortForm } from '../components/ShortForm'
import { Stills } from '../components/Stills'

/** Sky half: hero → formats → short-form → long-form → case studies → stills; pink half: about → services → process → contact */
export function Home() {
  return (
    <main>
      <Hero />
      <Formats />
      <ShortForm />
      <LongForm />
      <CaseFiles />
      <Stills />
      <About />
      <Services />
      <Process />
      <Contact />
    </main>
  )
}
