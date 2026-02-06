import React from 'react'
import img from '../../../assets/Group 1597882971 (2).png'
const Engagementyousee = () => {
    return (
        <>
            <div className='engamenet_report_Wrapper'>

                <div className='container engage_world_content_wrapper engamen_report_wrapper'>
                    <div className='engage_world_content'>
                        <h1 className='heading' style={{
                            marginBottom: '30px'
                        }}>Engagement you can see and measure</h1>
                        <p style={{
                            marginBottom: '10px'
                        }}>Ngage Live provides clear visibility into how people engage with your experience — beyond simple attendance.
                            <br />
                            <br />
                            Depending on the format, teams can track:
                        </p>
                        <ul style={{
                            display: 'flex',
                            flexDirection: 'column',
                            rowGap: '10px'
                        }}>
                            <li>Participation levels</li>
                            <li>Completion rates
                            </li>
                            <li>Content interaction
                            </li>
                            <li>Engagement trends over time</li>
                        </ul>
                        <p style={{
                            marginTop: '10px'
                        }}>This makes it easier to demonstrate impact, not just activity.
                        </p>
                    </div>
                    <img src={img} />
                </div>
            </div>
        </>
    )
}

export default Engagementyousee
