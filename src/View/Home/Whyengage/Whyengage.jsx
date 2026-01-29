import React from 'react'
import './Whyengage.css'
import app from '../../../assets/Group 1597882945.png'
const Whyengage = () => {
    return (
        <>
            <div className='why_engage_wrapper'>
                <div className='container why_engage_content_wrapper'>
                    <h1 className='heading'>Why People Love Ngage</h1>
                    <div className='why_engage_app_wrapper'>
                        <div className='why_left'>
                            <div className='why_1'>
                                <h4>Easy to Launch</h4>
                                <p>Ngage experiences are quick to set up and simple to run. We handle the structure so teams can focus on participation, not logistics.</p>
                            </div>
                            <div className='why_1'>
                                <h4>Rewards That Motivate Participation</h4>
                                <p>Ngage turns engagement into something people actually want to take part in — using points, incentives, and tangible rewards that drive participation beyond the usual few.</p>
                            </div>

                            <div className='why_1'>
                                <h4>Everyone Gets Involved</h4>
                                <p>Experiences are designed to be inclusive and accessible, encouraging participation from introverts and extroverts alike — not just the same voices every time.</p>
                            </div>
                        </div>
                        <img src={app} />
                        <div className='why_left'>
                            <div className='why_1'>
                                <h4>Real Human Connection</h4>
                                <p>Ngage creates moments that spark conversation, collaboration, and shared energy — helping teams reconnect in ways that feel natural, not forced.</p>
                            </div>
                            <div className='why_1'>
                                <h4>Clear Results You Can Report</h4>
                                <p>Track participation, activity, and engagement trends in real time. Ngage gives HR teams clear visibility into what’s working and where to improve.</p>
                            </div>

                            <div className='why_1'>
                                <h4>Plenty of ways to engage</h4>
                                <p>From quick challenges to deeper quests and team-based activities, Ngage offers multiple ways to engage — keeping experiences fresh throughout the year. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whyengage
