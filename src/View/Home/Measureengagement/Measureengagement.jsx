import React from 'react'
import './Measureengagement.css'
import sample from '../../../assets/Ngage NES Report Template V3 Aug 2025 (3).png'
import ellipse from '../../../assets/Ellipse 254.svg'
import star from '../../../assets/Frame 1984078715.svg'
import event from '../../../assets/Event colour fill.svg'
import engagementImg from '../../../assets/Frame 1984078720 (1).svg'
import img2 from '../../../assets/Group 1597882952.svg'
import img3 from '../../../assets/Frame 1984078716.png'
import img4 from '../../../assets/Frame 1984078720.svg'
import img5 from '../../../assets/Frame 1984078717.svg'
const Measureengagement = () => {
    return (
        <>
            <div className='measure_engagement_wrapper engage_measure_rythm_wrapper'>
                <div className='container measure_engagement_content_wrapper'>
                    <div className='measure_engagement_content'>
                        <h1 className='heading' style={{
                            marginBottom: '15px'
                        }}>Measure engagement without the guesswork.</h1>
                        <p style={{
                            marginBottom: '15px'
                        }}>Ngage also gives HR teams a <span style={{
                            paddingLeft: '0'
                        }}>clear, simple way to track engagement progress over time.</span></p>
                        <span>Introducing the Ngage Engagement Score (NES)</span>
                        <p style={{
                            marginTop: '15px',
                            marginBottom: '15px'
                        }}>NES brings participation, consistency, and feedback together into one easy-to-understand engagement score — so you can:</p>

                        <div className='content_wrapper5656'>
                            <div style={{
                                marginBottom: '15px'
                            }} className='measure_box_div_wrapper'>


                                <div className='measure_box_div'>
                                    <img src={engagementImg} />
                                </div>

                                <div className='measure_box_div'>
                                    <img src={img2} />
                                </div>

                                <div className='measure_box_div'>
                                    <img src={img3} />
                                </div>

                                <div className='measure_box_div'>
                                    <img src={img4} />
                                </div>
                                <div className='measure_box_div'>
                                    <img src={img5} />
                                </div>
                            </div>

                            <p style={{
                                paddingLeft: '0'
                            }}>See how engaged your teams actually are, track progress across initiatives and time, share clear engagement insights with leadership, no complicated dashboards, no survey overload.
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
