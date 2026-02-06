import React from 'react'
import './Footer.css'
import img from '../../../assets/Screenshot_2024-05-15_012750-removebg-preview 1.svg'
import bgImg from '../../../assets/ebf31c36be4d5a4115c88449b339245d1798fab9.png'
import icon from '../../../assets/Group 1321314283.svg'
import icon2 from '../../../assets/Group 1321314288.svg'
import icon3 from '../../../assets/Group 1321314286.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className='footer_wrapper'>
        <div className='footer_container '>
          <div className='footer_content_wrapper'>

            <div className='footer_logo_content'>
              <img className='footer_logo' src={img} />
              <p>Happier Teams. Stronger Connections.</p>
              <div className='icons_wrapper'>
                <img src={icon} />
                <img src={icon2} />
                <img src={icon3} />
              </div>
            </div>

            <div className='footer_1'>
              <h3>Company</h3>
              <Link to='/'>Home</Link>
              <Link to='/solutions/engagement'>Solutions</Link>
              <Link to='/about-engage'>About</Link>
              <Link to='/games/library'>Ngage Game Library</Link>
              <Link to='/games/experience'>Ngage Game Experience</Link>
              {/* <Link to='/'>Blogs</Link> */}
              <Link to='/faq'>FAQ</Link>
              <Link to='/contact-us'>Contact</Link>
              <Link onClick={(() => window.open('https://calendly.com/ngageworld-sales/30min', '_blank'))}>Book a demo</Link>

            </div>


            <div className='footer_1'>
              <h3>Legal</h3>
              <Link to='/terms-conditions'>Terms & Conditions</Link>
              <Link to='/privacy-policy'>Privacy Policy</Link>
              <Link to='/refund-policy'>Refund Policy</Link>
            </div>



            <div className='footer_1'>
              <h3>Contact</h3>
              <Link><strong>Address</strong> - 5 Old Church Rd. Kingston 8, Kingston Jamaica</Link>
              <Link><strong>Phone</strong> - 8762767188</Link>
              <Link><strong>Email</strong> - sales@ngageworld.com</Link>
            </div>
          </div>
          <p style={{
            marginLeft: 'auto',
            color: 'rgba(19, 19, 19, 1)',
            fontSize: '1rem',
            width: 'fit-content'
          }}>© Copyright 2024, All Rights Reserved</p>
        </div>
        <img src={bgImg} style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          objectPosition: 'center',
          objectFit: 'cover',
          opacity: '0.2',
          height: '100%',
          zIndex: -1
        }} />
      </div>
    </>
  )
}

export default Footer
