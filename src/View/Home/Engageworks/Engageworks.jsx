import React from 'react'
import './Engageworks.css'
import img from '../../../assets/Group 1597882936.png'
const Engageworks = () => {
  return (
    <>
      <div className='engage_works_wrapper'>
        <div className='container engage_works_content_wrapper'>
            <div className='engage_works_img_wrapper'>
                <img src={img}/>
            </div>
            <div className='engage_works_content'>
                <h1 className='heading'>How Ngage Works</h1>
                <p>Choose an experience, invite your team, and watch participation grow.</p>
                <p>Employees join instantly, earn points for participating, and see progress live — while HR gets a clear view of engagement across the organization. </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Engageworks
