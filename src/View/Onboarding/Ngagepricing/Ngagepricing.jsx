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
            title: 'FOUNDATION',
            subhHeading: '',
            title2: 'Starting from ',
            price: 'US$2,999',
            onlyPrice: 2999,
            totalPrice: 2999,
            listHead: 'Best for structured onboarding launch',
            list: [
                'Up to 3 modules',
                'Guided onboarding journey',
                ' Leaderboard & dashboard',
                '1-year access',
                "Unlimited employees"
            ],



        },
        {
            id: 2,
            title: 'GROWTH ',
            subhHeading: '',
            title2: 'Starting from ',
            price: 'US$3,999',
            onlyPrice: 3999,
            totalPrice: 3999,
            mostPopular: true,
            listHead: 'Best for multi-department onboarding',
            list: [
                'Up to 5 modules',
                'Custom branding',
                ' NES semi-annual review',
                ' Progression levels',
                '1-year access',
                "Unlimited employees"
            ],


        },
        {
            id: 3,
            title: 'ENTERPRISE',
            subhHeading: '',
            title2: 'Starting from ',
            price: 'US$7,999',
            onlyPrice: 7999,
            totalPrice: 7999,
            listHead: 'Full onboarding system',
            enterPrise:true,
            list: [
                'All modules',
                'Executive video integration',
                'Custom progression levels',
                'Advanced analytics + retention insights',
                'Quarterly onboarding strategy review',
                ' 1-year access',
                'Unlimited employees'
            ],

        },
    ]
    return (
        <>
            <div className='ngage_pricing_wrapper'>
                <h1 className='heading'>Buy Launchpad Today</h1>
                <h3 className='sub_heading' style={{
                    width: '1000px',
                    marginInline: 'auto',
                    textAlign: 'center',
                    fontWeight:'500'
                }}> Launchpad is built once and reused for every new hire. Pricing reflects initial design and 12 months of access. All plans include: Unlimited employees, 1-year access, NES reporting.</h3>
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
                                    <div style={{
                                        height: '120px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'end',
                                    }}>
                                        {e?.mostPopular && <small style={{
                                            display: 'block',
                                            color: '#2e2aee',
                                            fontWeight: '700',
                                            margin: '5px 0'
                                        }}>Most Popular</small>}

                                        {e?.enterPrise && <small style={{
                                            display: 'block',
                                            color: '#00007f',
                                            fontWeight: '700',
                                            margin: '5px 0'
                                        }}>Enterprise Solution</small>}
                                        <h2>{e.title}</h2>
                                        <h3>{e.title2} <span style={{
                                            fontWeight: '700'
                                        }}>{e.price}</span></h3>
                                       
                                </div>
                                    <h5>{e.listHead}</h5>
                                    <ul>
                                        {e.list.map((ele) => (
                                            <>
                                                <li><img src={listimg} />{ele}</li>

                                            </>
                                        ))}
                                    </ul>
                                </div>

                                <button onClick={() => {
                                    navigate({
                                        pathname: '/engage/experience',
                                        search: `?category=NGAGE Launchpad&price=${e.onlyPrice}&filter=${e.title}&totalprice=${e.totalPrice}`
                                    })
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
