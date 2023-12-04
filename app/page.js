
import Image from 'next/image'
import Hero from './component/Hero/page'
import Skills from './(back-com)/projects/skills/page'
import Projects from './(back-com)/projects/page'
import Language from './component/language/page'



export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Language/>
      <Skills />
      
      <Projects/>
    </div>
  )
}


