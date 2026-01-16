import React from 'react'
import './Buildonboarding.css'
import img from '../../../assets/Rectangle 6667 (1).png'
import shadow from '../../../assets/Rectangle 6684.png'
import Helpnewhires from './Helpnewhires'
const Buildonboarding = () => {
    return (
        <>
            <div className='build_culture_wrapper'>
                <img src={shadow} style={{
                    position: 'absolute',
                    top: '-60%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }} />
                <div className='container build_culture_content_wrapper'>
                    <div className='build_culture_img'>
                        <img src={img} />
                    </div>
                    <div className='build_culture_content'>
                        <h1 className='heading'>Build your onboarding once. Run it every time.</h1>
                        <p>Ngage Launchpad is a custom-built onboarding experience designed specifically for your organization — your culture, your people, your way of working.<pre />
                            Once it’s set up, HR can run the same onboarding journey every time a new hire joins, without repeating presentations, walkthroughs, or sessions.
                        </p>

                        <span style={{
                            fontWeight: '700',
                            marginTop: '20px',
                            display: 'block'
                        }}>It’s how culture shows up from day one — without adding to HR’s workload.</span>
                    </div>
                </div>
                <Helpnewhires/>
                
            </div>
        </>
    )
}

export default Buildonboarding
