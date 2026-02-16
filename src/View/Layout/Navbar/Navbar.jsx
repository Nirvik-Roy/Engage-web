import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../../assets/image 214.svg'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import bars from '../../../assets/Vector (9).svg'
import NavbarSidebar from './NavbarSidebar'
const Navbar = () => {
  const [solutionDropdown, setsolutiondropdown] = useState(false);
  const [gamesDropdown, setgamesDropdown] = useState(false)
  const location = useLocation();
  const dropdownRef = useRef();
  const [stickNavbar, setstickyNavbar] = useState(false)
  const dropdownRef2 = useRef();
  const togglebtnref = useRef();
  const togglebtnref2 = useRef();
  const navigate = useNavigate()
  const [show, setShow] = useState(false)
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

  useEffect(() => {
    if (show) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [show])


  const stickYNavbar = () => {
    if (window.scrollY > 350) {
      setstickyNavbar(true)
    } else {
      setstickyNavbar(false)
    }
  }

  window.addEventListener('scroll', stickYNavbar)



  return (
    <>
      <NavbarSidebar setShow={setShow} show={show} />
      <div className={stickNavbar ? 'navbar_wrapper_fixed navbar_wrapper' : 'navbar_wrapper '}>
        <img onClick={(() => navigate('/'))} src={logo} />
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
              {/* <NavLink onClick={(() => setsolutiondropdown(false))} to={'/solutions/engagement'}>Solution Hub</NavLink> */}
              <NavLink onClick={(() => setsolutiondropdown(false))} to={'/solutions/ongoing-engage'}>Ngage  Rhythm</NavLink>
              <NavLink onClick={(() => setsolutiondropdown(false))} to={'/solutions/onboarding'}>Ngage Launchpad</NavLink>
              <NavLink onClick={(() => setsolutiondropdown(false))} to={'/solutions/facilitated-team'}>Ngage Play Day</NavLink>
              <NavLink onClick={(() => setsolutiondropdown(false))} to={'/solutions/ngage-live'}>Ngage Live</NavLink>
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
              {/* <NavLink onClick={(() => setgamesDropdown(false))} to={'/games/experience'}>Game Experience</NavLink> */}
            </div>}
          </div>
          <NavLink to={'/about-engage'}>About</NavLink>
          <NavLink to={'/contact-us'}>Contact Us</NavLink>
          <button onClick={(() => window.open('https://calendly.com/ngageworld-sales/30min', '_blank'))}>Book a Demo <span>Free</span></button>
        </div>
        <img onClick={(() => setShow(true))} className='bar_img' style={{
          width: 'auto'
        }} src={bars} />
      </div>
    </>
  )
}

export default Navbar
