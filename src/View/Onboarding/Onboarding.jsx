import React from 'react'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import Buildonboarding from './Buildonboarding/Buildonboarding'
import Launchpadworks from './Launchpadworks/Launchpadworks'
import sample from '../../assets/Ngage NES Report Template V3 Aug 2025 (3).png'
import Ngagepricing from './Ngagepricing/Ngagepricing'
import Buildengagement from '../Home/Buildengagement/Buildengagement'
import Onboardingmoudles from './Onboardingmodules.jsx/Onboardingmoudles'
import Buildonce from './Buildonce/Buildonce'
import Launchpadsteps from './Launchpadsteps/Launchpadsteps'
import img2 from '../../assets/Group 1597882952.svg'
import img3 from '../../assets/Frame 1984078716.png'
import img4 from '../../assets/Frame 1984078720.svg'
import img5 from '../../assets/Frame 1984078717.svg'
import engagementImg from '../../assets/Frame 1984078720 (1).svg'
const Onboarding = () => {
    return (
        <>
            <BannerLayout subTitle={'Onboarding that builds culture from day one'} title={'NGAGE Launchpad'} />
            <Buildonboarding />
            <Onboardingmoudles />
            <Buildonce />
            <Launchpadworks />
            <div className='measure_engagement_wrapper'>
                <div className='container measure_engagement_content_wrapper launchpad_measure_rythm_wrapper'>
                    <div className='measure_engagement_content'>
                        <h1 className='heading' style={{
                            marginBottom: '15px',
                            fontSize: '3.2rem',
                            lineHeight: '4rem'
                        }}>Measure onboarding with confidence</h1>

                        <div style={{
                            marginBottom: '15px',
                            padding:'0px 30px'
                        }} className='measure_box_div_wrapper'>


                            <div className='measure_box_div'>
                                <img src={engagementImg} />
                            </div>

                            <div className='measure_box_div'>
                                <img src={img2} />
                            </div>

                            <div className='measure_box_div'>
                                <img src={img3} />
                            </div>

                            <div className='measure_box_div'>
                                <img src={img4} />
                            </div>
                            <div className='measure_box_div'>
                                <img src={img5} />
                            </div>
                        </div>
                        <p style={{
                            marginTop: '15px'
                        }}>Launchpad includes an NES onboarding summary, helping HR understand:</p>

                        <ul>
                            <li>Completion rates</li>
                            <li>Engagement levels</li>
                            <li>Information retention trends</li>
                        </ul>

                    </div>
                    <div className='measure_engagement_img'>
                        <img src={sample} />
                    </div>
                </div>
            </div>
            <Ngagepricing />
            <Launchpadsteps />
            <Buildengagement demobtn={true} explorebtn={true} para={'Ngage Launchpad helps organizations build culture, clarity, and connection from the first week.'} title={'Start onboarding the Ngage way'} />
        </>
    )
}

export default Onboarding
