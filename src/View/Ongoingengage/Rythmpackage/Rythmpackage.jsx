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
            price: '1,499',
            onlyPrice: 1499,
            totalPrice: 1499,
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
                    textAlign: 'center',
                }}>
                    Buy a Rhythm Package Today
                </h1>
                <div style={{
                    padding: '40px 0'
                }} className='container world_solutions_wrapper'>
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
