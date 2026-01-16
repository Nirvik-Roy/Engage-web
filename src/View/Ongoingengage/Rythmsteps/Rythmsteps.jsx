import React from 'react'
import './Rythmsteps.css'
import img from '../../../assets/Group 1597882974.png'
import oneImg from '../../../assets/1.svg'
import twoImg from '../../../assets/2.svg'
import threeImg from '../../../assets/3.svg'
import fourImg from '../../../assets/4.svg'
const Rythmsteps = () => {
    return (
        <>
            <div className='rythm_steps_wrapper_container'>
                <div className='container rythm_steps_content_wrapper'>
                    <div className='rythm_steps_wrapper'>
                        <div className='rythm_step' style={{
                            borderRadius: '50px 0 0 0'
                        }}>
                            <img src={oneImg} />
                            <p>Organizations with hybrid or remote teams</p>
                        </div>
                        <div className='rythm_step' style={{
                            borderRadius: '0px 0 0 50px'
                        }}>
                            <img src={twoImg} />
                            <p>Companies looking for year-round engagement</p>
                        </div>
                    </div>
                    <div className='rythm_img_wrapper'>
                        <img src={img} />
                        <h1>Start building your engagement rhythm</h1>
                        <h4>Rhythm works best for:</h4>
                    </div>
                    <div className='rythm_steps_wrapper'>
                        <div className='rythm_step' style={{
                            borderRadius: '0px 50px 0 0px',
                            justifyContent: 'end',
                            alignItems: 'end'
                        }}>
                            <img src={threeImg} />
                            <p style={{
                                textAlign: 'end'
                            }}>HR teams with limited time and capacity</p>
                        </div>

                        <div style={{
                            borderRadius: '0px 0px 50px 0px',
                            justifyContent: 'end',
                            alignItems: 'end'
                        }} className='rythm_step'>
                            <img src={fourImg} />
                            <p style={{
                                textAlign: 'end'
                            }}>Teams that want connection without forced activities</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rythmsteps
