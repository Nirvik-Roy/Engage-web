import React from 'react'
import img from '../../../assets/Group 1597882936.png'
import './LiveEvents.css'
const LiveEvents = () => {
    return (
        <>
            <div className='live_events_wrapper'>

                <div className='container build_culture_content_wrapper'>
                    <div className='build_culture_img'>
                        <img src={img} />
                    </div>
                    <div className='build_culture_content'>
                        <h1 className='heading'>Bring live events and campaigns to life</h1>
                        <p>Conferences, expos, and campaigns are full of potential — but too often, people simply attend, observe, and move on.<br /> <br />
                            <strong>Ngage Live helps organizations create interactive experiences</strong> that invite people to take part, explore, connect, and engage — whether the audience is staff, customers, partners, or event attendees.
                            <br />
                            <br />
                            The result is higher participation, more energy, and engagement you can see and measure.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveEvents
