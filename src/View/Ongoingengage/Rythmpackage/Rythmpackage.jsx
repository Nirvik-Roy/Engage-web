import React from 'react'
import './Rythmpackage.css'
import img from '../../../assets/Rectangle 6679.png'
import listimg from '../../../assets/Vector (8).svg'
import buttonIcon from '../../../assets/Frame 1984078911.svg'
import icon2 from '../../../assets/Frame 1984078808.svg'
import Rythmpackageprices from './Rythmpackageprices'
const Rythmpackage = () => {
    const data = [
        {
            id: 1,
            title: 'Rhythm Spark ',
            title2: 'US$699',
            list: [
                {
                    title: '1-Day Experience',
                    point1: 'Single, ready-made engagement experience',
                    point2: 'Up to 50 participants included',
                    point3: 'Perfect for testing Rhythm or running a one-off activity',
                    
                },

            ],
        },
        {
            id: 2,
            title: 'Rhythm Pulse ',
            title2: 'US$1,499',
            list: [
                {
                    title: '3-Day Experience',
                    point1: 'Extended engagement window',
                    point2: 'Multiple challenges over 3 days',
                    point3: 'Up to 50 participants included'
                },

            ],

        },
    ]
    return (
        <>
            <div className='rythm_package_wrapper'>
                <h1 className='heading' style={{
                    textAlign: 'center'
                }}>
                    Buy a Rhythm Package Today
                </h1>
                <div className='container world_solutions_wrapper'>
                    <div className='solutions_engage_world'>
                        <img src={img} />
                        <h1>One-Off Experiences</h1>
                    </div>
                    <div className='rythm_spark_wrapper'>
                        {data.map((e, i) => (
                            <div className='launch_pad' key={i}>
                                <div>
                                    <h2>{e.title}</h2>
                                    <h3 style={{
                                        fontWeight: '700',
                                        fontSize: '20px'
                                    }}>{e.title2}</h3>
                                    {e.list.map((ele, ) => (
                                        <>
                                            <h5 style={{
                                                fontWeight: '700'
                                            }} key={ele.point1}>{ele.title}</h5>
                                            <ul>
                                                <li><img src={listimg} />{ele.point1}</li>
                                                <li><img src={listimg} />{ele.point2}</li>
                                                <li><img src={listimg} />{ele.point3}</li>
                                            </ul>
                                            {i == 0 && <button style={{
                                                color: 'rgba(1, 130, 252, 1)',
                                                fontWeight: '700',
                                                marginTop: '30px',
                                                border: 'none',
                                                background: 'transparent',
                                                fontSize: '1.1rem',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                gap: '10px',
                                                marginBottom: '40px'
                                            }}>Buy Now <img src={buttonIcon} /></button>}
                                                     {i == 1 && <button style={{
                                                color: 'rgba(1, 130, 252, 1)',
                                                fontWeight: '700',
                                                marginTop: '30px',
                                                border: 'none',
                                                background: 'transparent',
                                                fontSize: '1.1rem',
                                                display: 'flex',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                                gap: '10px',
                                                marginBottom: '0px'
                                            }}> <img src={icon2} /></button>}
                                        </>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Rythmpackageprices/>
            </div>
        </>
    )
}

export default Rythmpackage
