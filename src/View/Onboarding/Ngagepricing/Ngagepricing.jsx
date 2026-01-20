import React from 'react'
import './Ngagepricing.css'
import img from '../../../assets/Rectangle 6679.png'
import listimg from '../../../assets/Vector (8).svg'
const Ngagepricing = () => {
    const data = [
        {
            id: 1,
            title: 'Starter ',
            subhHeading: '',
            title2: 'Starting from ',
            price: 'US$4,499',
            listHead: 'Includes:',
            list: [
                'Guided onboarding journey',
                'Interactive HR policy walkthrough',
                'Department introduction challenges',
                'Leaderboard & progress dashboard',
                '5 custom game levels',
                'Tech support & software updates'
            ],

         

        },
        {
            id: 2,
            title: 'Pro (AI)  ',
            subhHeading: '',
            title2: 'Starting from ',
            price: 'US$6,999',
            listHead: 'Includes everything in Starter, plus::',
            list: [
                'AI characters guiding policies & procedures',
                'Gamified compliance modules',
                'Custom branding & reporting dashboard',
                '5 themed game levels',
                'Tech support & software updates',
                '5 custom game levels',
                'Tech support & software updates'
            ],


        },
        {
            id: 3,
            title: 'Ultimate',
            subhHeading: '(Video + Quests)',
            title2: 'Starting from ',
            price: 'US$6,999',
            listHead: 'Includes everything in Starter, plus::',
            list: [
                'AI characters guiding policies & procedures',
                'Gamified compliance modules',
                'Custom branding & reporting dashboard',
                '5 themed game levels',
                'Tech support & software updates',
                '5 custom game levels',
                'Tech support & software updates'
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
                              <p style={{
                                fontWeight:'700',
                                fontSize:'1rem',
                                margin:'20px 0 0 0'
                              }}>{e.access}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ngagepricing
