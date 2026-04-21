import React from 'react'
import Heritage from './Heritage'
import FeaturedProducts from './FeaturedProducts'
import Individual from './Individual'
import Logo from './Logo'
import NavSearch from './NavSearch'
import UserIcon from './UserIcon'
import CartButton from './CartButton'
import LinksDropdown from './LinksDropDown'

function DesktopNavbarr() {
  return (
    <nav className="flex justify-between w-full bg-amber-950 text-white">

      {/* Desktop layout for the navbar */}

      <div className="hidden lg:flex justify-between items-center w-full p-10 ">
      <div className='flex justify-between gap-6'>
        <Heritage/>
      <FeaturedProducts/>
      <Individual/>
      </div>
      <div className="flex">
        <Logo/>
      </div>
      <div className="flex justify-between gap-6">
        <NavSearch/>
        <UserIcon/>
        <CartButton/>
        <LinksDropdown/>
      </div>
      
      
    </div>

    </nav>
    
  )
}

export default DesktopNavbarr
