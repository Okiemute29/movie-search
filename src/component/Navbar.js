// Style 
import './Navbar.css' 

import Logo from '../assets/logo/Logo.svg'

const Navbar = () => { 

  return (
    <nav className=''>
       <img src={Logo} alt='logo' />
    </nav>
  )
}

export default Navbar
