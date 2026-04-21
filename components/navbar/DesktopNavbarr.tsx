import React from 'react'
import Heritage from './Heritage'
import FeaturedProducts from './FeaturedProducts'
import Individual from './Individual'
import Logo from './Logo'
import NavSearch from './NavSearch'
import UserIcon from './UserIcon'
import CartButton from './CartButton'

function DesktopNavbarr() {
  return (
    <nav>

      {/* Desktop layout for the navbar */}

      <div className="hidden lg:flex">
      <div>
        <Heritage/>
      <FeaturedProducts/>
      <Individual/>
      </div>
      <div>
        <Logo/>
      </div>
      <div>
        <NavSearch/>
        <UserIcon/>
        <CartButton/>
      </div>
      
      
    </div>

    </nav>
    
  )
}

export default DesktopNavbarr
