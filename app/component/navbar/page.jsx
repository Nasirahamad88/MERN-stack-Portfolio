import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
      <div className=' w-[80%] mx-auto  '>
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-2xl font-bold">
        <Link href='/'>Home</Link>
        <li>
          <Link href='/projects'>Projects</Link>
          <ul className="p-2">
            <li><Link href='/skills'>Skills</Link></li>
            <li><a>Certificats</a></li>
          </ul>
        </li>
        <Link href='/projects'>Projects</Link>
      </ul>
    </div>
    <Link href='/' className="btn btn-ghost text-xl">MERN Stack</Link>
  </div>
  <div className="navbar-center hidden lg:flex mx-20">
    <ul className="menu menu-horizontal px-1 text-1xl font-bold">
      <li><Link href='/'>Home</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>All Skills</summary>
          <ul className="p-2 w-20">
            <li><Link href='/skills'>Skills</Link></li>
            <li><a>Soft Skills</a></li>
          </ul>
        </details>
      </li>
      <li><Link href='/projects'>Projects</Link></li>
    </ul>
  </div>
  <div className="navbar-end ">
    <Link href='/contact' className="btn text-2xl font-bold">Hire Me</Link>
  </div>
</div>
    </div>
  )
}

export default page