import React from 'react'
import './Measureengagement.css'
import sample from '../../../assets/image 222.png'
import ellipse from '../../../assets/Ellipse 254.svg'
import star from '../../../assets/Frame 1984078715.svg'
import event from '../../../assets/Event colour fill.svg'
const Measureengagement = () => {
    return (
        <>
            <div className='measure_engagement_wrapper'>
                <div className='container measure_engagement_content_wrapper'>
                    <div className='measure_engagement_content'>
                        <h1 className='heading' style={{
                            marginBottom:'15px'
                        }}>Measure engagement without the guesswork.</h1>
                        <p style={{
                            marginBottom:'15px'
                        }}>Ngage also gives HR teams a <span style={{
                            paddingLeft:'0'
                        }}>clear, simple way to track engagement progress over time.</span></p>
                        <span>Introducing the Ngage Engagement Score (NES)</span>
                        <p style={{
                            marginTop:'15px',
                            marginBottom:'15px'
                        }}>NES brings participation, consistency, and feedback together into one easy-to-understand engagement score — so you can:</p>

                        <div className='content_wrapper5656'>
                        <div style={{
                            marginBottom:'15px'
                        }} className='measure_box_div_wrapper'>
                            <div className='measure_box_div'>
                                <div className='ellipse_img'>
                                    <img src={ellipse} />
                                    <h2>+85%</h2>
                                </div>
                                <h3>Average Participation</h3>
                            </div>
                            <div className='measure_box_div'>
                                <h4>9.2/10</h4>
                                <img style={{
                                    width: '100%'
                                }} src={star} />
                                <h3>Average Satisfaction
                                </h3>
                            </div>
                            <div className='measure_box_div'>
                                <h4>31+</h4>
                                <img src={event} />
                                <h3>Events Powered in 2024</h3>
                            </div>
                        </div>

                        <p style={{
                            paddingLeft:'0'
                        }}>See how engaged your teams actually are,
                            Track progress across initiatives and time, Share clear engagement insights with leadership, No complicated dashboards, No survey overload.
                        </p>
                        </div>
                        <span>Engagement that's easy to run. Results you can report.</span>
                    </div>
                    <div className='measure_engagement_img'>
                        <img src={sample} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Measureengagement
