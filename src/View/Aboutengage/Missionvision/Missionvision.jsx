import React from 'react'
import './Missionvision.css'
import img from '../../../assets/Rectangle 6679 (1).png'
const Missionvision = () => {
    return (
        <>
            <div className='mission_vission_wrapper'>
                <div className='container mission_vision_content_wrapper'>
                    <div className='mission_content'>
                        <ul>
                            <li>Ngage is an employee engagement system designed to help organizations build stronger cultures by creating meaningful moments of connection.</li>
                            <li>We believe culture isn’t shaped by policies or statements alone.</li>
                            <li>It’s shaped by how people interact, participate, and feel included — day after day.</li>
                            <li>Our work focuses on making those moments easier to create, easier to join, and easier to sustain.</li>
                        </ul>
                        <div className='mission_vission_box_wrapper'>
                            <div className='mission_box'>
                                <h2>Our Mission</h2>
                                <p>To make people happier and more connected, starting with the teams and workplaces that shape their everyday lives.</p>
                            </div>
                            <div className='mission_box'>
                                <h2>Our Vision </h2>
                                <p>To re-ignite real human connection — at work, at play, and in every space where people meet.</p>
                            </div>
                        </div>
                    </div>
                    <div className='mission_img_wrapper'>
                        <img alt='group_img' src={img}/>
                        <h1>Strengthening culture through connection.</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Missionvision
