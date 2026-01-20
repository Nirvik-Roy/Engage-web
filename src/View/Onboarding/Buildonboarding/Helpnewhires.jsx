import React from 'react'
import bgImg from '../../../assets/Rectangle 6682.png'
import img from '../../../assets/Group 1597882936.png'
const Helpnewhires = () => {
  return (
    <>
      <div className='help_new_hires_wrapper'>
        <img src={bgImg} style={{
          position: 'absolute',
          top: '-100%',
          left: '0'
        }} />
        <div className='container  help_new_hires_content_wrapper'>
          <div className='help_new_hires_content'>
            <h1 className='heading'> A smarter way to onboard</h1>
            <p>Ngage Launchpad is a custom-built onboarding experience designed specifically for your organization.
              <br />
              <br />
              Built once using your content, Launchpad becomes a reusable journey that introduces new hires to your culture, people, policies, and workplace — without repeating presentations.
            </p>

          </div>
          <div className='help_new_hires_img'>
            <img src={img} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Helpnewhires
