import React from 'react'
import img from '../../../assets/Group 1597882962 (2).png'
import listimg from '../../../assets/Vector (8).svg'
import button from '../../../assets/svg159.svg'
import buttonIcon2 from '../../../assets/svg159 (2).svg'
import './Minuteteambuilding.css'
import { useNavigate } from 'react-router-dom'
const Minuteteambuilding = () => {
    const navigate = useNavigate()
    const data = [
        {
            id: 1,
            title: 'How it works',
            list: [
                'Choose one team building experience',
                '	Fast-paced, facilitated session',
                'Live scoring and prizes'
            ],
        },
        {
            id: 2,
            title: 'What’s included',
            list: [
                'Ngage facilitator(s) on-site',
                'One selected team building experience',
                'Ngage-powered leaderboard & scoring',
                'Digital game setup and management',
                'Prize tokens for top teams',
                'Session coordination and flow management'
            ],

        },
        {
            id: 3,
            title: 'Best for',
            list: [
                'Team meetings',
                'Icebreakers',
                'Morale boosts'
            ],

        },
    ]
    return (
        <>
            <div className=' mintue_team_building_wrapper'>
                <div className='container rythm_package_prices_wrapper'>
                    <div className='solutions_engage_world'>
                        <img src={img} />
                        <h1 style={{
                            textAlign: 'right',
                        }}>Play Day – 90-Minute Experience</h1>
                    </div>
                    <div className='rythm_prices_wrapper'>
                        <div className='team_building_head'>
                            <h1 className='heading'>90-Minute Team Building</h1>
                            <h4>Starting at US$999</h4>
                            <p>A focused team building session for teams of 10–50 people.</p>
                        </div>
                        {data.map((e, i) => (
                            <div className='launch_pad' style={{
                                padding: '20px 20px 40px 20px'
                            }} key={i}>
                                <div>
                                    <h2 style={{
                                        fontWeight: '600',
                                        fontSize: '1.2rem',
                                        marginBottom:'20px',
                                        letterSpacing:'0.1rem'
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
                                    search: `?category=NGAGE Playday&price=${999}&filter=${'90-Minute Team Building'}&totalprice=${999}`
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

export default Minuteteambuilding
