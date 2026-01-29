import React from 'react'
import img from '../../../assets/Group 1597882974 (1).png'
import oneImg from '../../../assets/1.svg'
import twoImg from '../../../assets/2.svg'
import threeImg from '../../../assets/3.svg'
import fourImg from '../../../assets/4.svg'
const Launchpadsteps = () => {
  return (
    <>
        <div className='rythm_steps_wrapper_container'>
                      <div className='container rythm_steps_content_wrapper'>
                          <div className='rythm_steps_wrapper'>
                              <div className='rythm_step' style={{
                                  borderRadius: '50px 0 0 0'
                              }}>
                                  <img src={oneImg} />
                                  <p>Growing teams hiring regularly</p>
                              </div>
                              <div className='rythm_step' style={{
                                  borderRadius: '0px 0 0 50px'
                              }}>
                                  <img src={twoImg} />
                                  <p>Graduate and intern programmes</p>
                              </div>
                          </div>
                          <div className='rythm_img_wrapper'>
                              <img src={img} />
                              <h1>Who Launchpad is built for</h1>
                              {/* <h4>Rhythm works best for:</h4> */}
                          </div>
                          <div className='rythm_steps_wrapper'>
                              <div className='rythm_step' style={{
                                  borderRadius: '0px 50px 0 0px',
                                  justifyContent: 'end',
                                  alignItems: 'end'
                              }}>
                                  <img src={threeImg} />
                                  <p style={{
                                      textAlign: 'end'
                                  }}>High-turnover environments</p>
                              </div>
      
                              <div style={{
                                  borderRadius: '0px 0px 50px 0px',
                                  justifyContent: 'end',
                                  alignItems: 'end'
                              }} className='rythm_step'>
                                  <img src={fourImg} />
                                  <p style={{
                                      textAlign: 'end'
                                  }}>Distributed or multi-location teams</p>
                              </div>
                          </div>
                      </div>
                  </div>
    </>
  )
}

export default Launchpadsteps
