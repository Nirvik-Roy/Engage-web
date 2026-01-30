import React from 'react'
import img from '../../../assets/Rectangle 6667.png'
import bgImg from '../../../assets/Rectangle 6682.png'
const Engagementreport = () => {
    return (
        <>
            <div className='engamenet_report_Wrapper'>
            <img src={bgImg} className='engage_report_bg' style={{
                position:'absolute',
                top:'-100%',
                left:'0'
            }}/>
                <div className='container engage_world_content_wrapper engamen_report_wrapper'>
                    <div className='engage_world_content'>
                        <h1 className='heading' style={{
                            marginBottom:'30px'
                        }}>Engagement you can run — and report on</h1>
                        <p>Every solution in Ngage World is powered by the same engagement engine, making it easier to:</p>
                        <ul>
                            <li>See who’s participating
                            </li>
                            <li>Track engagement over time</li>
                            <li>Share clear results with leadership</li>
                        </ul>

                        <p>That’s where the <span style={{
                            fontWeight:'700'
                        }}>Ngage Engagement Score (NES)</span> comes in — giving HR teams a simple way to understand and report engagement progress.</p>
                        <span style={{
                            marginTop:'20px',
                            display:'block',
                            fontWeight:'700'
                        }}>Engagement that's easy to run. Results you can report.</span>
                    </div>
                    <img src={img} />
                </div>
            </div>
        </>
    )
}

export default Engagementreport
