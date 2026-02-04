import React from 'react'
import img from '../../../assets/Rectangle 6679 (2).png'
import listimg from '../../../assets/Vector (8).svg'
import button from '../../../assets/svg159.svg'
import buttonIcon2 from '../../../assets/svg159 (2).svg'
import './Corporatefunday.css'
import { useNavigate } from 'react-router-dom'
const Corporatefunday = () => {
    const navigate = useNavigate()
    const data = [
        {
            id: 1,
            title: 'How it works',
            list: [
                'Choose one team building experience as the foundation',
                'Activities expanded and customized for scale',
                'Multiple activity zones and full-day facilitation'
            ],
        },
        {
            id: 2,
            title: 'What’s included',
            list: [
                'Full Ngage facilitation team on-site',
                'Customised activity design and run-of-show',
                'Multiple game zones and activity formats',
                'Ngage-powered leaderboard & scoring system',
                'Prize tokens, awards, and recognition moments',
                'End-to-end coordination and event execution'
            ],

        },
        {
            id: 3,
            title: 'Best for',
            list: [
                'Annual sports days',
                'Company celebrations',
                'Large-scale staff events'
            ],

        },
    ]
    return (
        <>
            <div className=' corporate_fun_wrapper'>
                <div className='container rythm_package_prices_wrapper'>
                    <div className='solutions_engage_world'>
                        <img src={img} />
                        <h1 style={{
                            textAlign: 'right',
                        }}>Corporate Fun Day / Sports Day</h1>
                    </div>
                    <div className='rythm_prices_wrapper'>
                        <div className='team_building_head'>
                            <h1 className='heading'>Corporate Fun Day / Sports Day</h1>
                            <h6 style={{
                                fontSize: '1.6rem',
                            }}>Signature Experience</h6>
                            <h4> 
                                Starting at US$4,999</h4>
                            <p>A fully gamified, all-staff Play Day where every activity contributes to a shared team competition. Using Ngage, employees are registered into teams ahead of time, earn points through pre-event challenges, and continue scoring on the day by participating in any attraction — from sports races and field games to dominoes, bounce houses, QR challenges, and even social interactions. Ngage provides everything you need: equipment, race marshals, field workers, materials, and full project management — designing, coordinating, and running all activities from start to finish. So you can sit back, watch the magic unfold, and enjoy the day alongside your team.</p>
                        </div>
                        {data.map((e, i) => (
                            <div className='launch_pad' style={{
                                padding: '20px 20px 40px 20px'
                            }} key={i}>
                                <div>
                                    <h2 style={{
                                        fontWeight: '600',
                                        fontSize: '1.2rem',
                                        marginBottom: '20px',
                                        letterSpacing: '0.1rem'
                                    }}>{e.title}</h2>
                                    <ul>

                                        {e.list.map((ele,) => (
                                            <>
                                                <li><img src={listimg} />{ele}</li>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        <div className='corporate_btn_wrapper' style={{
                            gridColumn: '1/-1',
                            marginTop: '20px'
                        }}>
                            <button onClick={() => {
                                navigate({
                                    pathname: '/engage/experience',
                                    search: `?category=NGAGE Playday&price=${4999}&filter=${'Corporate Fun Day / Sports Day'}&totalprice=${4999}`
                                })
                            }} className='base_btn_design'>Request a Quote<img src={button} /></button>
                            <button className='base_btn_design'>Talk to an Expert<img src={buttonIcon2} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Corporatefunday
