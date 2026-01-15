import HomeBanner from './HomeBanner/HomeBanner'
import { Cmslandingpage } from '../../data/Cmslandingpage'
import Problemstatement from './Problemstatement/Problemstatement'
import MeetEngage from './MeetEnage/MeetEngage'
import Trustedteams from './Trustedteams/Trustedteams'
import Engageworks from './Engageworks/Engageworks'
import Simplesteps from './Simplesteps/Simplesteps'
import Measureengagement from './Measureengagement/Measureengagement'
import Onesystem from './Onesystem/Onesystem'
import Whyengage from './Whyengage/Whyengage'
import Testimonial from './Testimonial/Testimonial'
import Buildengagement from './Buildengagement/Buildengagement'
const Home = () => {
  return (
    <>
      <HomeBanner data={Cmslandingpage.hero} />
      <Problemstatement />
      <MeetEngage />
      <Trustedteams />
      <Engageworks />
      <Simplesteps />
      <Measureengagement />
      <Onesystem />
      <Whyengage />
      <Testimonial />
      <Buildengagement title={'Build engagement that lasts.'} demobtn={true} explorebtn={true} description={"Happier Teams. Stronger Connections."} />
    </>
  )
}

export default Home
