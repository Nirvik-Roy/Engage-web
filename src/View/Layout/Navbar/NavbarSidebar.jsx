import React, { useEffect, useState } from 'react'
import logo from '../../../assets/image 214.svg'
import { NavLink, useLocation } from 'react-router-dom'
const NavbarSidebar = ({ show, setShow }) => {
    const [solutionDropdown, setsolutiondropdown] = useState(false);
    const [gamesDropdown, setgamesDropdown] = useState(false);
    const location = useLocation();

    useEffect(()=>{
       setShow(false)
    },[location.pathname])
    return (
        <>  <div className={show ? 'nav_sidebar_overlay_show' : 'nav_sidebar_overlay_hide'}>
            <div className={show ? "nav_sidebar_wrapper_show" : 'nav_sidebar_wrapper_hide'}>
                <div className='nav_bar_sidebar_header'>
                    <img src={logo} />
                    <i onClick={(() => setShow(false))} class="fa-solid fa-xmark"></i>
                </div>

                <div className='navbar_sidebar_links_Wrapper'>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/about-engage'}>About</NavLink>
                    <div className='soultions_dropdown_wrapper'>
                        <p style={location.pathname.startsWith('/solutions') ? {
                            color: 'rgba(238, 150, 1, 1)'
                        } : {}} onClick={(() => { setsolutiondropdown(!solutionDropdown) })}>Solutions <i class="fa-solid fa-angle-down"></i></p>
                        {solutionDropdown && <div className='solution_dropdown5463'>
                            {/* <NavLink to={'/solutions/engagement'}>Solution Hub</NavLink> */}
                            <NavLink to={'/solutions/ongoing-engage'}>NGAGE Rhythm</NavLink>
                            <NavLink to={'/solutions/facilitated-team'}>NGAGE Play Day</NavLink>
                            <NavLink to={'/solutions/onboarding'}>NGAGE Launchpad</NavLink>
                            <NavLink to={'/solutions/ngage-live'}>NGAGE Live</NavLink>

                        </div>}
                    </div>


                    <div className='soultions_dropdown_wrapper'>
                        <p style={location.pathname.startsWith('/games')?{
                            color:'rgba(238, 150, 1, 1)'
                        }:{}} onClick={(() => { setgamesDropdown(!gamesDropdown) })}>Games <i class="fa-solid fa-angle-down"></i></p>
                        {gamesDropdown && <div className='solution_dropdown5463'>
                            <NavLink to={'/games/library'} >Games Library</NavLink>
                            <NavLink to={'/games/experience'}>Games Experience</NavLink>
                        </div>}
                    </div>
                    <NavLink to={'/contact-us'}>Contact Us</NavLink>
                    <NavLink onClick={(() => window.open('https://calendly.com/ngageworld-sales/30min', '_blank'))} to={'//'}>Book a Demo(Free)</NavLink>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavbarSidebar
