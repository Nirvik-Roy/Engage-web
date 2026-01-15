import React from 'react'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import Engageworld from './Engageworld/Engageworld'
import Engagementreport from './Engageworld/Engagementreport'
import Buildengagement from '../Home/Buildengagement/Buildengagement'

const EngagementSolutions = () => {
  return (
    <>
      <BannerLayout title={'Engagement Solutions'}/>
      <Engageworld/>
      <Engagementreport/>
      <Buildengagement demobtn={true} explorebtn={true} title={'Start where it makes sense for you'} para={
        "Some organizations start with onboarding. Others start with ongoing engagement or a fun day.Ngage World is designed to grow with you."
      }/>
    </>
  )
}

export default EngagementSolutions
