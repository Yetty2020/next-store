// import Container from "../global/Container"
// import CartButton from "./CartButton"
// import Logo from "./Logo"
// import NavSearch from "./NavSearch"
// import DarkMode from "./DarkMode"
// import LinksDropDown from "./LinksDropDown"
// import MobileMenu from "./MobileMenu"
// import { Suspense } from "react"


// export default function Navbar() {
//   return (
//     <nav className="lg:border-b border-gray-300">
//     <Container className="py-8">
//         {/* Mobile View: Logo and Menu on top, Search below */}
//         <div className="sm:hidden">
//           <div className="flex justify-between items-center mb-4">
//             <Logo />
//             <MobileMenu /> {/* This acts as the menu button */}
//           </div>
//           <div className="flex justify-center">
//             <NavSearch />
//           </div>
//         </div>

//         {/* Desktop View: Logo, Search on left; Cart, DarkMode, LinksDropDown on right */}
//         <div className="hidden sm:flex sm:justify-between sm:items-center w-full">
//           <div className="flex items-center gap-x-4">
//             <Logo />
//             <Suspense>
//               <NavSearch />
//             </Suspense>
            
//           </div>
//           <div className="flex items-center gap-x-4">
//             <CartButton />
//             <DarkMode />
//             <LinksDropDown />
//           </div>
//           </div>
//           </Container>
//     </nav>
    
   
//   )
// }


import Logo from './Logo';
import LinksDropdown from './LinksDropDown';
import DarkMode from './DarkMode';
import CartButton from './CartButton';
import NavSearch from './NavSearch';
import Container from '../global/Container';
function Navbar() {
  return (
    <nav className='border-b '>
      <Container className='flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8'>
        <Logo />
        <NavSearch />
        <div className='flex gap-4 items-center '>
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;