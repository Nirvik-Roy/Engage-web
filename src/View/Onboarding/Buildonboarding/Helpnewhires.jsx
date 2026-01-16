import React from 'react'
import bgImg from '../../../assets/Rectangle 6682.png'
import img from '../../../assets/623e89ba689da139c2cb8b68eb186ba6e717c610.jpg'
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
            <h1 className='heading'> Help new hires feel part of the team — faster.</h1>
            <p style={{
              marginBottom:'10px'
            }}>Launchpad turns onboarding into:</p>
            <ul>
              <li>A shared experience, not a presentation</li>
              <li>Interactive instead of passive</li>
              <li>Consistent across teams and locations</li>
              <li>Easier to run without constant follow-ups</li>
            </ul>

            <p>Instead of overwhelming new hires with information, Launchpad guides them through what matters most — at the right pace.</p>
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
