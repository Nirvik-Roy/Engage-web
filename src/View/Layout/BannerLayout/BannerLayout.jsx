import React from 'react'
import './BannerLayout.css'
import bgImg from '../../../assets/Group 1597882989.png'
const BannerLayout = ({title}) => {
  return (
    <>
      <div className='banner_layout_wrapper' style={{
        background:`url(${bgImg})`,
        backgroundSize:'100% 100%',
        backgroundRepeat:'no-repeat'
      }}>

        <h1>{title}</h1>
      </div>
    </>
  )
}

export default BannerLayout
