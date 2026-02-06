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
            totalPrice:4996,
            list: [
                {
                    title: 'Best for maintaining light, ongoing engagement',
                    point1: '4 Ready-to-run experiences (Choose one per quarter)',
                    point2: 'Up to 150 users included, $1.75 /additional user',
                    point3: 'Quarterly engagement report (NES)',

                },

            ],
        },
        {
            id: 2,
            title: 'Build Rhythm ',
            title2: 'US $999 / month',
            title3: 'Billed Annually',
            onlyPrice: 999,
            totalPrice:11988,
            list: [
                {
                    title: 'Best for building culture with a steady rhythm',
                    point1: '12 Ready-to-run experiences (Choose one per month)',
                    point2: 'Up to 300 users included, $1.25 /additional user',
                    point3: 'Monthly engagement reports (NES)'
                },

            ],

        },
        {
            id: 3,
            title: 'Sustain Rhythm ',
            title2: 'US $1,999 / month',
            title3: 'Billed Annually',
            onlyPrice: 1999,
            totalPrice:23988,
            list: [
                {
                    title: 'Best for organizations serious about engagement',
                    point1: 'Unlimited ready-to-run experiences',
                    point2: 'Up to 500 users included, $1.25 /additional user',
                    point3: 'Executive engagement reports (NES)',
                    point4:'Priority support'
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
                    <h1 style={{
                        fontSize: '1rem',
                        lineHeight: '1.2rem',
                        textAlign:'right'
                    }}>Choose your rhythm once, keep engagement moving all year. No facilitator required. Runs alongside work with minimal disruption. Remote support included.</h1>
                </div>
                <div className='rythm_prices_wrapper'>
                    {data.map((e, i) => (
                        <div className='launch_pad' style={{
                            padding: '20px 20px 40px 20px'
                        }} key={i}>
                            <div>
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

                    <p className='additional_players_para' style={{
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
                    </p>
                </div>
            </div>
        </>
    )
}

export default Rythmpackageprices
