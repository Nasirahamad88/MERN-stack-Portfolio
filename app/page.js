
import Image from 'next/image'
import Hero from './component/Hero/page'
import Skills from './(back-com)/skills/page'
import Projects from './(back-com)/projects/page'
import Language from './component/language/page'
import Contact from './(back-com)/contact/page'



export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Language/>
      <Skills />
      
      <Projects />
      <Contact/>
    </div>
  )
}


