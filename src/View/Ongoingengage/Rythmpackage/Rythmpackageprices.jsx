import React from 'react'
import img from '../../../assets/Rectangle 6679 (4).png'
import listimg from '../../../assets/Vector (8).svg'
import buttonIconNew from '../../../assets/svg159.svg'
import { useNavigate } from 'react-router-dom'

const Rythmpackageprices = () => {
    const navigate = useNavigate()
    const data = [
        {
            id: 1,
            title: 'Boost Rhythm  ',
            title2: 'US $1,249 / quarter',
            title3: 'Billed Annually',
            onlyPrice: 1249,
            totalPrice: 4996,
            list: [
                {
                    title: 'Quarterly engagement pulse',
                    point1: '4 Ready-to-Run experiences (1 per quarter)',
                    point2: '150 users included ($1.75 /extra user)',
                    point3: 'Quarterly Engagement Report (NES)',
                    point4: 'Top 3 Featured Prizes (quarterly)',
                    point5: 'Ngage Experience Support',
                },

            ],
        },
        {
            id: 2,
            title: 'Build Rhythm',
            mostPopular: true,
            title2: 'US $999 / month',
            title3: 'Billed Annually',
            onlyPrice: 999,
            totalPrice: 11988,
            list: [
                {
                    title: 'Monthly culture-building rhythm',
                    point1: '12 Ready-to-Run experiences (1 per month)',
                    point2: '300 users included ($1.25 /extra user)',
                    point3: 'Monthly Engagement Reports (NES)',
                    point4: 'Top 3 Featured Prizes (monthly)',
                    point5: 'Ngage Experience Support'
                },

            ],

        },
        {
            id: 3,
            title: 'Sustain Rhythm ',
            title2: 'US $1,999 / month',
            title3: 'Billed Annually',
            onlyPrice: 1999,
            totalPrice: 23988,
            list: [
                {
                    title: 'Full-scale engagement system',
                    point1: 'Unlimited Ready-to-Run experiences',
                    point2: '500 users included ($1.25 /extra user)',
                    point3: 'Executive Engagement Reports (NES)',
                    point4: 'Top 3 Premium + 25 Marketplace Prizes (monthly)',
                    point5: 'Ngage Priority Support'
                },

            ],

        },
    ]
    return (
        <>
            <div className='container rythm_package_prices_wrapper'>
                <div className='solutions_engage_world'>
                    <img src={img} />
                    <h1 style={{
                        textAlign: 'right',
                        fontSize: '2.7rem',
                        lineHeight: '3.1rem'
                    }}>Subscription Plans</h1>

                </div>
                <div className='rythm_prices_wrapper'>
                    <h1 style={{
                        fontSize: '1rem',
                        lineHeight: '1.2rem',
                        textAlign: 'left',
                        gridColumn: '1/-1'
                    }}>Choose your rhythm once, keep engagement moving all year. No facilitator required. Runs alongside work with minimal disruption.</h1>
                    {data.map((e, i) => (
                        <div className='launch_pad' style={{
                            padding: '20px 20px 40px 20px'
                        }} key={i}>
                            <div>
                                {e?.mostPopular && <span style={{
                                    color: '#010085',
                                    fontSize: '0.9rem',
                                    fontWeight: '800'
                                }}>“Most Popular”</span>}
                                <h2>{e.title}</h2>
                                <h2 style={{
                                    fontWeight: '800',
                                    fontSize: '20px',
                                    margin: '12px 0',
                                    letterSpacing: '0.0rem'
                                }}>{e.title2}</h2>
                                <h3 style={{
                                    letterSpacing: '0.3rem',
                                    fontSize: '1rem',
                                    fontWeight: '400'
                                }}>{e.title3}</h3>

                                {e.list.map((ele,) => (
                                    <>
                                        <h5 style={{
                                            fontWeight: '700',
                                            marginBottom: '20px'
                                        }} key={ele.point1}>{ele.title}</h5>
                                        <ul>
                                            <li><img src={listimg} />{ele.point1}</li>
                                            <li><img src={listimg} />{ele.point2}</li>
                                            <li><img src={listimg} />{ele.point3}</li>
                                            {ele?.point4 && <li><img src={listimg} />{ele.point4}</li>}
                                            {ele?.point5 && <li><img src={listimg} />{ele.point5}</li>}
                                            
                                        </ul>

                                    </>
                                ))}
                            </div>

                            <button className='base_btn_design' onClick={() => {
                                navigate({
                                    pathname: '/engage/experience',
                                    search: `?category=NGAGE Rythm&price=${e.onlyPrice}&filter=${e.title}&totalprice=${e.totalPrice}`
                                })
                            }}>Buy Now <img src={buttonIconNew} /></button>
                        </div>
                    ))}

                    {/* <p className='additional_players_para' style={{
                        gridColumn: '1/-1',
                        color: 'rgba(55, 54, 54, 1)',
                        fontWeight: '600',
                        fontSize: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '40px',
                        marginLeft: 'auto',
                        marginTop: '20px'
                    }}>First 50 players included<span>|</span>Additional players: $2.50 per person
                    </p> */}
                </div>
            </div>
        </>
    )
}

export default Rythmpackageprices
