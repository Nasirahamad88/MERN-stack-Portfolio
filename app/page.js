
import Image from 'next/image'
import Hero from './component/Hero/page'
import Skills from './(back-com)/projects/skills/page'
import Projects from './(back-com)/projects/page'



export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Skills />
      {/* <Login/> */}
      <Projects/>
    </div>
  )
}


