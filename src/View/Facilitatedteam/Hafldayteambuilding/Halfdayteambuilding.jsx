import React from 'react'
import img from '../../../assets/Group 1597882962 (3).png'
import listimg from '../../../assets/Vector (8).svg'
import button from '../../../assets/svg159.svg'
import buttonIcon2 from '../../../assets/svg159 (2).svg'
import './Halfdayteambuilding.css'
import { useNavigate } from 'react-router-dom'
const Halfdayteambuilding = () => {
    const navigate = useNavigate()
    const data = [
        {
            id: 1,
            title: 'How it works',
            list: [
                'Choose one team building experience',
                'Extended play with multiple rounds',
                'Facilitated flow throughout'
            ],
        },
        {
            id: 2,
            title: 'What’s included',
            list: [
                'Multiple Ngage facilitators',
                'One selected team building experience (expanded)',
                'Ngage-powered leaderboard & scoring',
                'Digital game setup and management',
                'Prize tokens for top teams',
                'On-site coordination and experience flow'
            ],

        },
        {
            id: 3,
            title: 'Best for',
            list: [
                'Department off-sites',
                'Staff retreats',
                'Team resets'
            ],

        },
    ]
    return (
        <>
            <div className=' half_day_team_wrapper'>
                <div className='container half_day_team_build_Wrapper rythm_package_prices_wrapper'>
                    <div className='solutions_engage_world'>
                        <img src={img} />
                        <h1 style={{
                            textAlign: 'right',
                        }}>Play Day – Half-Day Experience</h1>
                    </div>
                    <div className='rythm_prices_wrapper'>
                        <div className='team_building_head'>
                            <h1 className='heading'>Half-Day Team Building</h1>
                            <h4>Starting at US$2,999</h4>
                            <p>A deeper team building experience for teams or departments — on-site or off-site.</p>
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
                                    search: `?category=NGAGE Playday&price=${2999}&filter=${'Half-Day Team Building'}&totalprice=${2999}`
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

export default Halfdayteambuilding
