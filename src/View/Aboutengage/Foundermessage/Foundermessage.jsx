import React from 'react'
import './Foundermessage.css'
import img from '../../../assets/medium-shot-male-flight-attendant-posing 1 (1).png'
const Foundermessage = () => {
    return (
        <>
            <div className='founder_message_wrapper'>
                <div className='container founder_message_content_Wrapper'>
                    <div className='founder_img_div'>
                        <img src={img} />
                    </div>
                    <div className='founder_content_div'>
                        <h1 className='heading'>A message from our <br /> Founder</h1>
                        <h4>Damani Brown — Managing Director, Ngage </h4>
                        <p>Ngage started in <span>November 2019</span> with a simple question:</p>
                        <span style={{
                            display: 'block',
                            marginBottom: '10px'
                        }}>How can we get people to actually socialize and meet each other at our Adulting 101 Conference?</span>
                        <p>We wanted to solve the engagement problem in a way that felt natural, fun, and simple — not forced. So we created a game where attendees earned points for every person they interacted with. That game is now known as Network Bingo, but at the time, it was the entirety of Ngage. <br />     <br /> The response from attendees and sponsors alike was very encouraging. So much so that companies began reaching out for help making their own events more engaging.
                            <br />
                            <br />
                            Over time, Ngage grew from that single idea into a platform with 35 games and features, used across conferences, staff events, and internal initiatives.

                            <br />
                            <br />
                            As more organizations came on board, a broader pattern became clear.

                            <br />
                            <br />
                            The same engagement challenges were showing up everywhere — onboarding, team activities, staff events, and everyday work. HR teams were under pressure to keep people engaged, often without the time, tools, or structure to do it well.

                            <br />
                            <br />
                            That insight shaped Ngage’s evolution.

                            <p style={{
                                display: 'block',
                                marginTop: '10px'
                            }}>Today, Ngage is built as an <span>employee engagement system</span> designed to relieve that pressure — helping organizations strengthen culture through connection, not one-off activities. Our focus remains the same as day one: create engagement that feels human, inclusive, and sustainable.
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Foundermessage
