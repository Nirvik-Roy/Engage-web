import React from 'react'
import img from '../../../assets/Play Day 1 - Team building outdoors.png'
import shadow from '../../../assets/Rectangle 6684.png'
import '../../Onboarding/Buildonboarding/Buildonboarding.css'
import Corporateteam from './Corporateteam'
const Teambuilding = () => {
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
                        <h1 className='heading'>Turn team building into shared moments — not spectator activities.</h1>
                        <p>Too often, team building sessions engage the same few people while others sit out.<br /> <br />
                            Ngage Play Day is designed to create inclusive, facilitator-led team building experiences where participation is built in — not left to chance. <br />
                            <br />
                            Whether it’s a short session, a half-day experience, or a full company event, Play Day helps teams connect through play.
                            <br/>
                            <br/>
                            Ngage Play Day is part of the Ngage Engagement System — designed to work seamlessly with Workplace Rhythm and Launchpad. 
                        </p>
                    </div>
                </div>
                <Corporateteam/>
            </div>
        </>
    )
}

export default Teambuilding
