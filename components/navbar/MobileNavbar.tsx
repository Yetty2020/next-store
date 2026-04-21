import Logo from "./Logo"
import CartButton from "./CartButton"
import MobileMenuButton from "./MobileMenuButton"
import Container from '../global/Container';
import DarkMode from "./DarkMode";

export default function MobileNavbar() {

  const baseClasses = `
    navbar
    absolute top-0 left-0 w-full z-50
    bg-transparent px-4 
    transition-all duration-500 ease-in-out  items-center
  h-24
  `;
  return (
    <nav id="nav" className={`${baseClasses} sm:block lg:hidden`}>
        <Container className="flex items-center justify-between lg:hidden">
          <div className="flex gap-2 items-center">
            <MobileMenuButton />
            <Logo />

          </div>
        
        <div className="flex gap-2 items-center">
          <DarkMode/>
            <CartButton />
            
        </div>
        </Container>

    </nav>
  )
}
