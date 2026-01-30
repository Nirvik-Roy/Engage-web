import React from 'react'
import './Buildonboarding.css'
import img from '../../../assets/Rectangle 6667 (2).png'
import shadow from '../../../assets/Rectangle 6684.png'
import Helpnewhires from './Helpnewhires'
const Buildonboarding = () => {
    return (
        <>
            <div className='build_culture_wrapper'>
                <img src={shadow} style={{
                    position: 'absolute',
                    top: '-80%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }} />
                <div className='container build_culture_content_wrapper'>
                    <div className='build_culture_img'>
                        <img src={img} />
                    </div>
                    <div className='build_culture_content'>
                        <h1 className='heading'>Turn onboarding into a shared starting experience — not a checklist.</h1>
                        <p>Most onboarding is overloaded with information and short on connection.
                        <br/>
                        <br/>
                        New hires skim documents, forget key details, and take weeks to feel part of the team — while HR and managers repeat the same sessions.
                         <br/>
                        <br/>
                        <span>Ngage Launchpad transforms onboarding into an interactive journey</span> that helps new hires learn, explore, and connect — at their own pace.
                        </p>
                    </div>
                </div>
                <Helpnewhires/>
                
            </div>
        </>
    )
}

export default Buildonboarding
