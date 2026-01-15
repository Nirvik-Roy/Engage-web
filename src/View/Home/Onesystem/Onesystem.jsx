import React from 'react'
import './Onesystem.css'
import img from '../../../assets/Layer_1 (7).svg'
import img2 from '../../../assets/Group (3).svg'
import img3 from '../../../assets/Layer_1 (8).svg'
import bgImg from '../../../assets/Rectangle 6691 (1).png'
const Onesystem = () => {
    const data = [
        {
            id: 1,
            img: img,
            title: 'Ngage Launchpad',
            title2: 'Gamified onboarding experiences',
            para: 'Help new hires learn, connect, and feel part of the team from day one.'
        },
        {
            id: 2,
            img: img2,
            title: 'Ngage Rhythm',
            title2: 'Ongoing engagement challenges',
            para: 'Keep teams involved week after week — remote, hybrid, or in-office.'
        },
        {
            id: 3,
            img: img3,
            title: 'Ngage PlayDay',
            title2: 'Live, facilitated corporate fun experiences',
            para: 'Turn staff fun days into high-participation, shared experiences.'
        },
    ]
    return (
        <>
            <div className='one_system_wrapper'>
            <img src={bgImg} style={{
                width:'50%',
                position:'absolute',
                top:'0',
                right:'0',
                height:'70vh',
                zIndex:'999'
            }}/>
                <div className='one_system_content_wrapper container'>
                    <h1 className='heading'>One system. Endless ways to engage. </h1>
                    <div className='one_system_grid_wrapper'>
                        {data.map((e) => (
                            <div key={e.id} className='one_system'>
                                <img src={e.img} />
                                <h3>{e.title}</h3>
                                <h5>{e.title2}</h5>
                                <p>{e.para}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Onesystem
