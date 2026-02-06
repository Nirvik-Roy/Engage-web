import React from 'react'
import './EngageComestolife.css'
import img from '../../../assets/Group 1597882936 (2).png'
const EngageComestolife = () => {
    return (
        <>
            <div className='founder_message_wrapper'>
                <div className='container founder_message_content_Wrapper'>
                    <div className='founder_img_div'>
                        <img src={img} />
                    </div>
                    <div className='founder_content_div'>
                        <h1 className='heading' style={{
                            marginBottom:'10px'
                        }}>How engagement comes <br />to life</h1>
                        <p>Every Ngage Live experience is designed around your goal — whether that’s awareness, learning, participation, or action.
                            <br />
                            <br />
                            Using a mix of interactive mechanics, experiences are shaped to fit your campaign, event, or initiative.
                            <br />
                            <br />
                            Common elements may include:
                        </p>

                        <ul style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '10px',
                            margin: '10px 0',
                            marginLeft:'18px',
                            color:'rgba(55, 54, 54, 1)'
                        }}>
                            <li>Quests and challenges</li>
                            <li>Trivia and puzzles</li>
                            <li>Scavenger-style activities</li>
                            <li>Media-based interactions</li>
                            <li>Points and leaderboards</li>
                        </ul>

                        <p>Participants join using a simple link or QR code, then explore, interact, and take part at their own pace.
                            <br />
                            <br />
                            Engagement feels voluntary, light, and motivating — turning passive audiences into active participants.
                        </p>

                    </div>
                </div>
            </div>
        </>
    )
}

export default EngageComestolife
