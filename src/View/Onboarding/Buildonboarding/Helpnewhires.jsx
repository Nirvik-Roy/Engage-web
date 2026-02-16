import React from 'react'
import bgImg from '../../../assets/Rectangle 6682.png'
import img from '../../../assets/Rectangle 6674 (4).png'
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
            {/* <h1 className='heading'> A smarter way to onboard</h1> */}
            <h1 className='heading' style={{
              lineHeight: '3.8rem',
              marginBottom:'20px'
            }}>Onboarding that actually builds connection — not just compliance.</h1>
            <p>Ngage Launchpad turns onboarding into an interactive experience new hires complete on their phone. 
              <br />
              <br />
              Instead of repeating presentations, your culture, values, and expectations are delivered through structured, gamified modules that employees explore at their own pace.
              <br />
              <br />
              Built once using your content. Used for every hire.
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
