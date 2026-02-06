import React from 'react'
import './UniqueEngagement.css'
import img from '../../../assets/Group 1597882971 (2).png'
const UniqueEngagement = () => {
  return (
    <>
      <div className='engamenet_report_Wrapper'>

        <div className='container engage_world_content_wrapper engamen_report_wrapper'>
          <div className='engage_world_content'>
            <h1 className='heading' style={{
              marginBottom: '30px'
            }}>Designed for unique engagement moments</h1>
            <p style={{
              marginBottom:'10px'
            }}>Ngage Live allows organizations to <span style={{
              fontWeight:'600'
            }}>craft custom engagement experiences</span> around:</p>
            <ul style={{
              display:'flex',
              flexDirection:'column',
              rowGap:'10px'
            }}>
              <li>Their audience (staff, guests, customers, or partners)</li>
              <li>Their objective (awareness, learning, participation, action)</li>
              <li>Their environment (virtual, in-person, or hybrid)</li>
              <li>Their timeline (short bursts or multi-day experiences)</li>
            </ul>
            <p style={{
              marginTop:'10px'
            }}>All delivered through the Ngage engagement platform.</p>
          </div>
          <img src={img} />
        </div>
      </div>
    </>
  )
}

export default UniqueEngagement
