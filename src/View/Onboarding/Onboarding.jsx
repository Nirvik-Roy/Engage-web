import React from 'react'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import Buildonboarding from './Buildonboarding/Buildonboarding'
import Launchpadworks from './Launchpadworks/Launchpadworks'
import sample from '../../assets/image 222.png'
import Ngagepricing from './Ngagepricing/Ngagepricing'
import Buildengagement from '../Home/Buildengagement/Buildengagement'
import Onboardingmoudles from './Onboardingmodules.jsx/Onboardingmoudles'
import Buildonce from './Buildonce/Buildonce'
import Launchpadsteps from './Launchpadsteps/Launchpadsteps'

const Onboarding = () => {
    return (
        <>
            <BannerLayout subTitle={'Onboarding that builds culture from day one'} title={'NGAGE Launchpad'} />
            <Buildonboarding />
            <Onboardingmoudles />
            <Buildonce />
            <Launchpadworks />
            <div className='measure_engagement_wrapper'>
                <div className='container measure_engagement_content_wrapper'>
                    <div className='measure_engagement_content'>
                        <h1 className='heading' style={{
                            marginBottom: '15px',
                            fontSize: '3.5rem',
                            lineHeight: '4.5rem'
                        }}>Measure onboarding with confidence</h1>
                        

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
            <Launchpadsteps/>
            <Ngagepricing />
            <Buildengagement demobtn={true} explorebtn={true} para={'Ngage Launchpad helps organizations build culture, clarity, and connection from the first week.'} title={'Start onboarding the Ngage way'}  />
        </>
    )
}

export default Onboarding
