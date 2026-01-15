import React from 'react'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import Missionvision from './Missionvision/Missionvision'
import Foundermessage from './Foundermessage/Foundermessage'
import Correctvalues from './Correctvalues/Correctvalues'
import Ourteam from './Ourteam/Ourteam'
import Buildengagement from '../Home/Buildengagement/Buildengagement'

const Aboutengage = () => {
  return (
    <>
      <BannerLayout title={'About Ngage'}/>
      <Missionvision/>
      <Foundermessage/>
      <Correctvalues/>
      <Ourteam/>
      <Buildengagement demobtn={true} explorebtn={true} title={'Work with Ngage'} para={'Whether you’re onboarding new hires, building ongoing engagement, or bringing teams together for shared moments, Ngage gives organizations a practical way to strengthen culture through connection.'}/>
    </>
  )
}

export default Aboutengage
