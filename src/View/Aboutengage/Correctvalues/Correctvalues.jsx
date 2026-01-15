import React from 'react'
import './Correctvalues.css'
import img from '../../../assets/Rectangle 6674.png'
import bgImg from '../../../assets/Rectangle 6682.png'
const Correctvalues = () => {
    const data = [
        {
            title: 'C — Connection First',
            para: 'We design experiences that bring people together meaningfully. Strong culture starts with real connection.'
        },
        {
            title: 'O — On Purpose',
            para: 'Play is our method, but every experience is intentional.'
        },
        {
            title: 'N — Never Complicated',
            para: 'Engagement should feel simple, natural, and easy to run.'
        },
        {
            title: 'N — Nurture Curiosity',
            para: 'We encourage discovery — of people, ideas, and new ways of working together.'
        },
        {
            title: 'E — Effort Recognized',
            para: "Participation, progress and rewards matter at every step."
        },
        {
            title: 'C — Continuous Growth',
            para: 'We evolve constantly and help customers evolve too, by learning from every experience.'
        },
        {
            title: 'T — Technology with Humanity',
            para: 'Technology should enhance human connection, not replace it.'
        }
    ]
    return (
        <>
            <div className='correct_values_wrapper'>
            <img src={bgImg} style={{
                position:'absolute',
                top:'-30%',
                left:'0'
            }}/>
                <div className='container correct_values_content_wrapper'>
                    <div className='correct_values_left'>
                        <h1 className='heading'>
                            Our Core Values: <br />CONNECT
                        </h1>
                        {data.map((e) => (
                            <>
                                <h2>{e.title}</h2>
                                <p>{e.para}</p>
                            </>
                        ))}

                    </div>
                    <div className='correct_values_right'>
                        <img src={img} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Correctvalues
