import React from 'react'
import NavSearch from './NavSearch'
import LinksDropdown from './LinksDropdown'
import Darkmode from './Darkmode'
import Logo from './Logo'

const Navbar = () => {
  return (
    <nav className='border-b'>
      <div className='container flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo />
        <NavSearch />
        <div className='flex gap-4 items-center '>
          <Darkmode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
