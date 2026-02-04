import React from 'react'
import bgImg from '../../../assets/Rectangle 6682.png'
import img from '../../../assets/Group 1597882971 (1).png'
import button from '../../../assets/svg159.svg'
import buttonIcon2 from '../../../assets/svg159 (2).svg'
import './Teambuilding.css'
import { useNavigate } from 'react-router-dom'
const Corporateteam = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='help_new_hires_wrapper'>
                <img src={bgImg} style={{
                    position: 'absolute',
                    top: '-100%',
                    left: '0',
                    pointerEvents:'none'
                }} />
                <div className='container  help_new_hires_content_wrapper'>
                    <div className='help_new_hires_content'>
                        <h1 className='heading' style={{
                            lineHeight:'4rem'
                        }}> A better way to run corporate team building</h1>
                        <p style={{
                            marginBottom: '10px',
                            marginTop:'10px'
                        }}>Ngage Play Day is a fully facilitated, in-person team-building experience powered by the Ngage engagement system.
                            <br />
                            <br />

                            <strong>Ngage Play Day features Ngage games and activities designed</strong> to encourage collaboration, communication, and light competition — without requiring athletic ability, confidence, or prior experience to participate.
                            <pre />
                            The result is team building that feels natural, inclusive, and genuinely engaging.
                        </p>

                        <p style={{
                            marginBottom:'10px'
                        }}><strong>How it works:</strong><pre/>
                            HR leaders or department managers select a Play Day experience from the Ngage Experience Library. Each experience is built around a clear engagement objective and delivered through a guided sequence of activities.
                        </p>

                        <p style={{
                            marginBottom: '10px'
                        }}><strong>Experiences combine:</strong><pre />
                            <strong>- Interactive indoor activities</strong> (e.g. team dance-offs, problem-solving games)<br/>
                            <strong>- Light field or outdoor challenges </strong> (e.g. hula hoop challenges, QR scan relays)<br />
                            <strong>- Digital Ngage games </strong> (e.g. Small Talk, Treasure Hunt, Network Bingo)<br />
                        </p>

                        <p>Facilitators guide the experience from start to finish, managing flow, energy, and participation — so teams stay engaged without pressure or awkward moments.</p>
                        <div className='corporate_btn_wrapper'>
                            <button className='base_btn_design' onClick={(()=>{
                                navigate('/solutions/engagement')
                            })}>Explore Ngage World<img src={button} /></button>
                            <button className='base_btn_design' onClick={(() => window.open('https://calendly.com/ngageworld-sales/30min', '_blank'))}>Get a demo<img src={buttonIcon2} /></button>
                        </div>

                    </div>
                    <div className='help_new_hires_img'>
                        <img src={img} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Corporateteam
