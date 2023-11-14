import Link from 'next/link'
import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <header className='lg:h-[250px]'>
      <div className="navbar text-white  mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><Link href='https://www.facebook.com/mohammad.toriqul.toriq'>Submenu 1</Link></li>
          
          </ul>
        </li>
        
      </ul>
    </div>
    <Link href={'/'} className="btn btn-ghost normal-case text-xl "><span className='text-green-500 text-2xl font-bold'>ToriqulIslam</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="  menu menu-horizontal px-1">
      <li><Link href={'/'} className='link'>HOME</Link></li>
      <li><Link href={'/'} className='link'>ABOUT</Link></li>
      <li><Link href={'/'} className='link'>PORTFOLIO</Link></li>
      <li><Link href={'/'} className='link'>RESUME</Link></li>
     
    </ul>
  </div>
  <div className="navbar-end">
    <Link href={'/'} className="btn text-white border-none bg-[#08D665] hover:bg-[#08D665]">Contact</Link>
  </div>
</div>
      </header>
    </>
  )
}

export default Navbar