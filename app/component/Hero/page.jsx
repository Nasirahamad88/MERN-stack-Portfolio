import React from 'react'
import Image from 'next/image'
import IMG from './nasir1.jpg'
import Link from 'next/link'

function Hero() {
  return (
      <div>
          <div className="hero min-h-screen  ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <Image src={IMG} className="max-w-sm w-36 lg:w-auto shadow-2xl rounded-full" />
    <div className='space-y-10'>
      <h1 className="lg:text-5xl text-start text-2xl  font-bold space-y-10">Hello!<br/> I am Nasir Ahamad <br/> MERN Stack Developer !</h1>
      <p className="py-6 text-start">I am Nasir Ahamad.Passionate MERN Stack Developer | Next.js | React| APIs | Node.js| Express.js| Open Source Enthusiast | JavaScript | HTML | CSS | Tailwind CSS| Seeking front-end developer internship</p>
      <button className="btn btn-primary"><Link href='https://www.linkedin.com/in/nasirdeveloper/'>Hire Me</Link></button>
    </div>
  </div>
</div>
    </div>
  )
}

export default Hero