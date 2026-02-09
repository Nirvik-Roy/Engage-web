import React from 'react'
import './Rythmpackage.css'
import img from '../../../assets/Rectangle 6679 (3).png'
import listimg from '../../../assets/Vector (8).svg'
import Rythmpackageprices from './Rythmpackageprices'
import buttonIconNew from '../../../assets/svg159.svg'
import { useNavigate } from 'react-router-dom'
const Rythmpackage = () => {
    const navigate = useNavigate()
    const data = [
        {
            id: 1,
            title: 'Rhythm Spark ',
            price: '699',
            onlyPrice: 699,
            totalPrice: 699,
            list: [
                {
                    title: 'Best for a quick energy boost or light team activation',
                    point1: '1-Day Ready-to-run Spark experience',
                    point2: 'Up to 75 users included, $2.50 /additional user',
                    point3: '1 Engagement report (NES)',
                },

            ],
        },
        {
            id: 2,
            title: 'Rhythm Pulse ',
            price: '1,499',
            onlyPrice: 1499,
            totalPrice: 1499,
            list: [
                {
                    title: 'Perfect for testing Rhythm or a one-off activity',
                    point1: '3-Day Ready-to-run Pulse experience',
                    point2: 'Up to 150 users included, $2.25 /additional user',
                    point3: '1 Engagement report (NES)'
                },

            ],

        },
    ]
    return (
        <>
            <div className='rythm_package_wrapper'>
                <h1 className='heading' style={{
                    textAlign: 'center',
                }}>
                    Buy a Rhythm Package Today
                </h1>
                <div style={{
                    padding: '40px 0'
                }} className='container world_solutions_wrapper'>
                    <div className='solutions_engage_world'>
                        <img src={img} />
                        <h1>One-time Experiences</h1>
                        
                    </div>
                    <div className='rythm_spark_wrapper'>
                        <h1 style={{
                            fontSize: '1rem',
                            lineHeight: '1.2rem',
                            gridColumn:'1/-1'
                        }}>Buy once, boost engagement now. No facilitation required. Runs alongside work with minimal disruption. Remote support included.</h1>
                        {data.map((e, i) => (
                            <div className='launch_pad' key={i}>
                                <div>
                                    <h2>{e.title}</h2>
                                    <h3 style={{
                                        fontWeight: '700',
                                        fontSize: '20px'
                                    }}>US${e.price}</h3>
                                    {e.list.map((ele) => (
                                        <>
                                            <h5 style={{
                                                fontWeight: '700'
                                            }} key={ele.point1}>{ele.title}</h5>
                                            <ul>
                                                <li><img src={listimg} />{ele.point1}</li>
                                                <li><img src={listimg} />{ele.point2}</li>
                                                <li><img src={listimg} />{ele.point3}</li>
                                            </ul>
                                            <button className='base_btn_design' onClick={() => {
                                                navigate({
                                                    pathname: '/engage/experience',
                                                    search: `?category=NGAGE Rythm&price=${e.onlyPrice}&filter=${e.title}&totalprice=${e.totalPrice}`
                                                })
                                            }} >Buy Now <img src={buttonIconNew} /></button>
                                        </>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <Rythmpackageprices />
            </div>
        </>
    )
}

export default Rythmpackage
