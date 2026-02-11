import BannerLayout from "../Layout/BannerLayout/BannerLayout"
import Chooseyourteam from "./Chooseyourteam/Chooseyourteam"
import Corporatefunday from "./Corporatefunday/Corporatefunday"
import Halfdayteambuilding from "./Hafldayteambuilding/Halfdayteambuilding"
import Minuteteambuilding from "./Minuteteambuilding/Minuteteambuilding"
import Playday from "./Playday/Playday"
import Teambuilding from "./Teambuilding/Teambuilding"
import Buildengagement from '../Home/Buildengagement/Buildengagement.jsx'
const Facilitatedteam = () => {
  return (
    <>
      <BannerLayout subTitle={'Facilitated team building experiences that bring everyone in'} title={'NGAGE Play Day'}/>
      <Teambuilding/>
      <Chooseyourteam/>
      <Corporatefunday/>
      <Halfdayteambuilding/>
      <Minuteteambuilding/>
      <Playday/>
      <Buildengagement explorebtn={false} expertBtn={true} demobtn={false} para={'Tell us about your team, goals, and timeline — we’ll help you choose the right Play Day experience.'} title={'Not sure which option fits best?'}/>
    </>
  )
}

export default Facilitatedteam
