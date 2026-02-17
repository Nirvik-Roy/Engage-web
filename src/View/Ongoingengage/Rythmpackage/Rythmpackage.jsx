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
                    point1: '1-Day Ready-to-Run experience',
                    point2: '75 users included ($2.50 /extra user)',
                    point3: '1 Engagement Report (NES)',
                    point4: 'Ngage Experience Support'
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
                    point1: '3-Day Ready-to-Run experience',
                    point2: '150 users included ($2.25 /extra user)',
                    point3: '1 Engagement Report (NES)',
                    point4: 'Top 3 Featured Prizes included',
                    point5: 'Ngage Experience Support'
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


                <Rythmpackageprices />

                <div style={{
                    padding: '40px 0'
                }} className='container world_solutions_wrapper'>
                    <div className='solutions_engage_world'>
                        <img src={img} />
                        <h1>One-time Experiences</h1>

                    </div>
                    <div className='rythm_spark_wrapper'>

                        <h1 className='heading' style={{
                            fontSize:'3rem'
                        }}>
                            Activate Rhythm
                        </h1>
                        <h1 style={{
                            fontSize: '1rem',
                            lineHeight: '1.4rem',
                            gridColumn: '1/-1',
                            fontWeight:'500',
                            marginTop:'-20px'
                        }}>Run Rhytm once. Boost engagement now. No facilitation required. Runs alongside work with minimal disruption. </h1>
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
                                                {ele?.point4 && <li><img src={listimg} />{ele.point4}</li>}
                                                {ele?.point5 && <li><img src={listimg} />{ele.point5}</li>}
                                            </ul>
                                            <button className='base_btn_design' onClick={() => {
                                                navigate({
                                                    pathname: '/engage/experience',
                                                    search: `?category=NGAGE Rhythm&price=${e.onlyPrice}&filter=${e.title}&totalprice=${e.totalPrice}`
                                                })
                                            }} >Buy Now <img src={buttonIconNew} /></button>
                                        </>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Rythmpackage
