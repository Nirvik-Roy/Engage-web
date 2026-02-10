import React from 'react'
import './Engageworks.css'
import img from '../../../assets/Group 1597882936 (1).png'
const Engageworks = () => {
  return (
    <>
      <div className='engage_works_wrapper'>
        <div className='container engage_works_content_wrapper'>
          <div className='engage_works_img_wrapper'>
            <img src={img} />
          </div>
          <div className='engage_works_content'>
            <h1 className='heading'>How Ngage Works</h1>
            <p>Choose an experience, invite your team, and watch participation grow.</p>
            <p>Employees join instantly, earn points for participating, and see progress live — while HR gets a clear view of engagement across the organization.</p>
            <p>Instead of relying on emails or announcements, engagement happens through play — making participation feel natural, inclusive, and low-pressure.</p>
            <ul style={{
              marginLeft:'15px',
              color:'#3b4954'
            }}>
              <li>Teams scan a QR code or tap a link</li>
              <li>Participants complete challenges, puzzles, or activities</li>
              <li>Points, leaderboards, and rewards motivate participation</li>
              <li>Engagement is tracked automatically</li>
            </ul>

            <p style={{
              marginTop:'20px'
            }}>Keep employees motivated with real rewards, available in the Ngage marketplace. Because everything runs through one platform, HR teams don’t have to juggle tools or chase participation.
</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Engageworks
