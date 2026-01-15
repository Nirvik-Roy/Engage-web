import React from 'react'
import './Engageworld.css'
import img from '../../../assets/Group 1597882971.png'
import Engageworldsolutions from './Engageworldsolutions'
const Engageworld = () => {
    return (
        <>
            <div className='engage_world_wrapper'>
                <div className='container engage_world_content_wrapper'>
                    <div className='engage_world_content'>
                        <h1 className='heading' >Ngage World: The home of Staff Engagement</h1>
                        <p style={{
                            marginBottom:'20px'
                        }}>Ngage World brings together a set of connected solutions designed to help organizations build culture, participation, and connection — without relying on one-off activities or constant effort from HR.
                            At its core, Ngage World is an employee engagement system.
                            You can start with one solution or combine them over time.
                        </p>
                        <h1 className='heading'>Engagement, designed — not improvised</h1>
                        <p>Most engagement efforts struggle because they’re:</p>
                        <ul>
                            <li>Disconnected
                            </li>
                            <li>Hard to sustain</li>
                            <li>Difficult to measure</li>
                        </ul>
                        <p>Ngage World simplifies engagement by organizing it into clear, usable solutions that work together — or on their own.</p>
                    </div>
                    <img src={img} />
                </div>
                <Engageworldsolutions/>
            </div>
        </>
    )
}

export default Engageworld
