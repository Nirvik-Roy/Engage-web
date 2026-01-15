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
                                <h4>Effortless Setup</h4>
                                <p>Ready in days. We handle design, QRs, and leaderboards.</p>
                            </div>
                            <div className='why_1'>
                                <h4>Inclusive Engagement</h4>
                                <p>Works for introverts and extroverts — every voice counts.</p>
                            </div>

                            <div className='why_1'>
                                <h4>Branding & Analytics</h4>
                                <p>Your brand, your data, your engagement score.</p>
                            </div>
                        </div>
                        <img src={app} />
                        <div className='why_left'>
                            <div className='why_1'>
                                <h4>Real Human Connection</h4>
                                <p>Games make people laugh, talk, and collaborate again — turning departments into communities.</p>
                            </div>
                            <div className='why_1'>
                                <h4>Caribbean Roots, Global Vision</h4>
                                <p>Proudly born in Jamaica — built to scale.</p>
                            </div>

                            <div className='why_1'>
                                <h4>Branding & Analytics</h4>
                                <p>Your brand, your data, your engagement score.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whyengage
