import React from 'react'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import { Outlet,useLocation } from 'react-router-dom'
import EngageFilter from './EngageFilter'
const Engagelayout = () => {
  return (
    <>
          <BannerLayout title={'Ngage Experience'} />
          <div className='games_layout_wrapper'>
              <div className='container games_layout_content_wrapper'>
                  { <EngageFilter />}
                  <Outlet />
              </div>
          </div>
    </>
  )
}

export default Engagelayout
