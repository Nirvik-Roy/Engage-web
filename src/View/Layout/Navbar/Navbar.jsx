import React from 'react'
import './Navbar.css'
import logo from '../../../assets/image 214.svg'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className='navbar_wrapper'>
        <img src={logo} />
        <div className='navbar_links_wrapper'>
          <NavLink>Home</NavLink>
          <NavLink>Solutions</NavLink>
          <NavLink>Games</NavLink>
          <NavLink>About</NavLink>
          <NavLink>Contact Us</NavLink>
          <button>Book a Demo <span>Free</span></button>
        </div>
      </div>
    </>
  )
}

export default Navbar
