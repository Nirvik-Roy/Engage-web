import React from 'react'
import BannerLayout from '../Layout/BannerLayout/BannerLayout.jsx'
import LiveEvents from './LiveEvents/LiveEvents.jsx'
import UniqueEngagement from './UniqueEngagement/UniqueEngagement.jsx'
import EngageComestolife from './EngageComestolife/EngageComestolife.jsx'
import Chooseyourengagelive from './Chooseyourengagelive/Chooseyourengagelive.jsx'
import Engagementyousee from './Engagementyousee/Engagementyousee.jsx'
const NgageLive = () => {
  return (
    <>
      <BannerLayout title={'NGAGE Live'}/>
      <LiveEvents/>
      <UniqueEngagement/>
      <EngageComestolife/>
      <Chooseyourengagelive/>
      <Engagementyousee/>
    </>
  )
}

export default NgageLive
