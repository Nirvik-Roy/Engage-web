import React from 'react'
import img from '../../../assets/Rectangle 6679.png'
import listimg from '../../../assets/Vector (8).svg'
import buttonIconNew from '../../../assets/g165.svg'

const Rythmpackageprices = () => {
    const data = [
        {
            id: 1,
            title: 'Boost Rhythm  ',
            title2: 'US $1,249 / quarter',
            title3: 'Billed Annually',
            list: [
                {
                    title: '1 experience per quarter',
                    point1: 'Quarterly engagement cadence',
                    point2: 'Choose Spark or Pulse experiences',
                    point3: 'Ideal for light, consistent engagement',

                },

            ],
        },
        {
            id: 2,
            title: 'Build Rhythm ',
            title2: 'US $999 / month',
            title3: 'Billed Annually',

            list: [
                {
                    title: '1 experience per quarter',
                    point1: 'Monthly engagement rhythm',
                    point2: 'Mix of Spark and Pulse experiences',
                    point3: 'Strong culture-building cadence'
                },

            ],

        },
        {
            id: 3,
            title: 'Sustain Rhythm ',
            title2: 'US $1,999 / month',
            title3: 'Billed Annually',

            list: [
                {
                    title: 'Unlimited experiences',
                    point1: 'Full access to Rhythm experiences',
                    point2: 'Includes Spark, Pulse, Flow, and Custom options',
                    point3: 'Includes 100 digital marketplace rewards per year'
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
                    }}>Annual Engagement Plans</h1>
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
                                        </ul>

                                    </>
                                ))}
                            </div>

                            <button style={{
                                fontSize: '1.1rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                background: 'transparent',
                                marginTop: '30px',
                                marginBottom: '10px',
                                paddingBottom: '5px',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                gap: '10px',
                                borderTop: 'none',
                                borderLeft: 'none',
                                borderRight: 'none',
                                borderBottom: '3px solid rgba(1, 130, 252, 1)',
                                color: 'rgba(1, 130, 252, 1)',
                                width: 'fit-content'
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
