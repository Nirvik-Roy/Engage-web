import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../../assets/image 214.svg'
import { NavLink, useLocation } from 'react-router-dom'
const Navbar = () => {
  const [solutionDropdown, setsolutiondropdown] = useState(false);
  const [gamesDropdown, setgamesDropdown] = useState(false)
  const location = useLocation();
  const dropdownRef = useRef();
  const dropdownRef2 = useRef();
  const togglebtnref = useRef();
  const togglebtnref2 = useRef();
  useEffect(() => {
    const closeDropdowns = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target) &&
        togglebtnref.current && !togglebtnref.current.contains(e.target) ||
        dropdownRef2.current && !dropdownRef2.current.contains(e.target) &&
        togglebtnref2.current && !togglebtnref2.current.contains(e.target)) {
        setsolutiondropdown(false);
        setgamesDropdown(false)
      }
    }

    document.addEventListener('mousedown', closeDropdowns)

    return () => {
      document.removeEventListener("mousedown", closeDropdowns);
    };
  }, [])
  return (
    <>
      <div className='navbar_wrapper'>
        <img src={logo} />
        <div className='navbar_links_wrapper'>
          <NavLink to={'/'}>Home</NavLink>
          <div ref={togglebtnref} onClick={(() => { setsolutiondropdown(!solutionDropdown) })} className='nav_dropdown'>
            <p style={location.pathname.startsWith('/solutions') ? {
              color: 'rgba(238, 150, 1, 1)'
            } : {}}>Solutions</p>
            <i style={location.pathname.startsWith('/solutions') ? {
              color: 'rgba(238, 150, 1, 1)'
            } : {}} class="fa-solid fa-angle-down"></i>
            {solutionDropdown && <div ref={dropdownRef} onClick={((e) => e.stopPropagation())} className='solutions_dropdown'>
              <NavLink onClick={(() => setsolutiondropdown(false))} to={'/solutions/engagement'}>Engagement <br/> Solutions</NavLink>
              <NavLink onClick={(() => setsolutiondropdown(false))} to={'/solutions/ongoing-engage'}>Ngage  Rhythm</NavLink>
              <NavLink onClick={(() => setsolutiondropdown(false))} to={'/solutions/onboarding'}>Ngage Launchpad</NavLink>
              <NavLink onClick={(() => setsolutiondropdown(false))} to={'/solutions/facilitated-team'}>Ngage Playday</NavLink>
            </div>}
          </div>
          <div ref={togglebtnref2} onClick={(() => { setgamesDropdown(!gamesDropdown) })} className='nav_dropdown'>
            <p style={location.pathname.startsWith('/games') ? {
              color: 'rgba(238, 150, 1, 1)'
            } : {}}>Games</p>
            <i style={location.pathname.startsWith('/games') ? {
              color: 'rgba(238, 150, 1, 1)'
            } : {}} class="fa-solid fa-angle-down"></i>
            {gamesDropdown && <div ref={dropdownRef} onClick={((e) => e.stopPropagation())} className='solutions_dropdown'>
              <NavLink onClick={(() => setgamesDropdown(false))} to={'/games/library'}>Games Library</NavLink>
                            <NavLink onClick={(() => setgamesDropdown(false))} to={'/games/library'}>Game Experience</NavLink>
            </div>}
          </div>
          <NavLink to={'/about-engage'}>About</NavLink>
          <NavLink to={'/contact-us'}>Contact Us</NavLink>
          <button>Book a Demo <span>Free</span></button>
        </div>
      </div>
    </>
  )
}

export default Navbar
