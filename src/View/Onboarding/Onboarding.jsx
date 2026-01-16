import React from 'react'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import Buildonboarding from './Buildonboarding/Buildonboarding'
import Buildonce from './Buildonce/Buildonce'
import sample from '../../assets/image 222.png'
import Ngagepricing from './Ngagepricing/Ngagepricing'
import Buildengagement from '../Home/Buildengagement/Buildengagement'

const Onboarding = () => {
    return (
        <>
            <BannerLayout title={'Onboarding that builds culture from day one'} />
            <Buildonboarding />
            <Buildonce />
            <div className='measure_engagement_wrapper'>
                <div className='container measure_engagement_content_wrapper'>
                    <div className='measure_engagement_content'>
                        <h1 className='heading' style={{
                            marginBottom: '15px',
                            fontSize: '3.5rem',
                            lineHeight: '4.5rem'
                        }}>Measure onboarding engagement with confidence</h1>
                        <p>Every Launchpad journey contributes to the Ngage Engagement Score (NES), giving HR teams a clear view of onboarding effectiveness.
                        </p>

                        <p style={{
                            marginTop: '15px'
                        }}>You can:</p>

                        <ul>
                            <li>Track engagement across onboarding cohorts</li>
                            <li>See participation and completion trends</li>
                            <li>Share simple, leadership-ready insights</li>
                        </ul>
                        <p style={{
                            marginTop: '15px',
                            fontWeight: '700'
                        }}>Engagement that's easy to run. Results you can report.
                        </p>
                    </div>
                    <div className='measure_engagement_img'>
                        <img src={sample} />
                    </div>
                </div>
            </div>
            <Ngagepricing />
            <Buildengagement demobtn={true} explorebtn={true} para2={'Whether you onboard occasionally or constantly, Launchpad gives you a simple, repeatable way to start every relationship right.'} list={['Introduce culture consistently','Reduce HR and manager onboarding time','Create a welcoming first-week experience','Understand what information actually sticks']} para={'Launchpad helps organizations:'} title={'Start onboarding the Ngage way'}/>
        </>
    )
}

export default Onboarding
