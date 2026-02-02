import React from 'react'
import './Ngagepricing.css'
import img from '../../../assets/Group 1597882962 (1).png'
import listimg from '../../../assets/Vector (8).svg'
import icon from '../../../assets/svg159.svg'
import { useNavigate } from 'react-router-dom'
const Ngagepricing = () => {
    const navigate = useNavigate()
    const data = [
        {
            id: 1,
            title: 'Starter ',
            subhHeading: '',
            title2: 'Starting from ',
            price: 'US$4,499',
            listHead: 'Includes:',
            list: [
                'Up to 3 onboarding modules',
                'Guided onboarding journey',
                'Leaderboard & progress dashboard',
                '1-year access • unlimited employees',
            ],



        },
        {
            id: 2,
            title: 'Pro (AI)  ',
            subhHeading: '',
            title2: 'Starting from ',
            price: 'US$6,999',
            listHead: 'Includes everything in Starter, plus:',
            list: [
                'Up to 4 onboarding modules',
                'AI characters guiding selected modules',
                'Gamified compliance experiences',
                'Custom branding & reporting dashboard',
                '1-year access • unlimited employees',
            ],


        },
        {
            id: 3,
            title: 'Ultimate',
            subhHeading: '(Video + Quests)',
            title2: 'Starting from ',
            price: 'US$6,999',
            listHead: 'Includes everything in Starter, plus:',
            list: [
                'All onboarding modules included',
                'Pre-recorded manager videos',
                'Facility exploration quests',
                '10 game levels + NES onboarding summary',
                '1-year access • unlimited employees',
            ],

        },
    ]
    return (
        <>
            <div className='ngage_pricing_wrapper'>
                <h1 className='heading'>Pricing</h1>
                <div className='container world_solutions_wrapper' style={{
                    paddingTop: '50px'
                }}>
                    <div className='solutions_engage_world'>
                        <img src={img} />
                        {/* <h1 style={{
                            textAlign: 'right',
                            fontSize: '3rem',
                            lineHeight: '3.5rem'
                        }}>Annual Engagement Plans</h1> */}
                    </div>
                    <div className='soultions_launch_pad_wrapper'>
                        {data.map((e, i) => (
                            <div className='launch_pad' key={i}>
                                <div>
                                    <h2>{e.title}</h2>
                                    <h3>{e.title2} <span style={{

                                        fontWeight: '700'
                                    }}>{e.price}</span></h3>
                                    <h5 >{e.listHead}</h5>
                                    <ul>
                                        {e.list.map((ele) => (
                                            <>
                                                <li><img src={listimg} />{ele}</li>

                                            </>
                                        ))}
                                    </ul>
                                </div>

                                <button onClick={() => {
                                    const routes = [
                                        "/checkout/5",
                                        "/checkout/6",
                                        "/checkout/7",
                                    ];
                                    navigate(routes[i] ?? "/");
                                }} className='base_btn_design'>Request a Quote <img src={icon} /></button>
                                {/* <p style={{
                                fontWeight:'700',
                                fontSize:'1rem',
                                margin:'20px 0 0 0'
                              }}>{e.access}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ngagepricing
