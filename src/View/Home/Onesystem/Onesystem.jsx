import React from 'react'
import './Onesystem.css'
import img from '../../../assets/Layer_1 (7).svg'
import img2 from '../../../assets/Group (3).svg'
import img3 from '../../../assets/Layer_1 (8).svg'
import bgImg from '../../../assets/Rectangle 6691 (1).png'
import buttonIcon from '../../../assets/svg159.svg'
import { useNavigate } from 'react-router-dom'
const Onesystem = () => {
    const navigate = useNavigate()
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
            para: 'Keep teams involved month after month — remote, hybrid, or in-office.'
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
                    width: '50%',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    height: '70vh',
                    zIndex: '999'
                }} />
                <div className='one_system_content_wrapper container'>
                    <h1 className='heading'>One system. Endless ways to engage. </h1>
                    <div className='one_system_grid_wrapper'>
                        {data.map((e) => (
                            <div key={e.id} className='one_system'>
                                <div>
                                    <img src={e.img} />
                                    <h3>{e.title}</h3>
                                    <h5>{e.title2}</h5>
                                    <p>{e.para}</p>
                                </div>
                                <button onClick={() => {
                                    if (e?.title === 'Ngage Rhythm') {
                                        navigate({
                                            pathname: '/engage/experience',
                                            search: `?category=NGAGE Rythm&price=699&filter=Rhythm Spark&totalprice=699`
                                        })
                                    }

                                    if (e?.title === 'Ngage Launchpad') {

                                        navigate({
                                            pathname: '/engage/experience',
                                            search: `?category=NGAGE Launchpad&price=4499&filter=Starter&totalprice=4499`
                                        })

                                    }

                                    if (e?.title === "Ngage PlayDay"){
                                        navigate({
                                            pathname: '/engage/experience',
                                            search: `?category=NGAGE Playday&price=999&filter=${'90-Minute Team Building'}&totalprice=999`
                                        })
                                    }

                                }} style={{
                                    padding: '8px 15px',
                                    width: 'fit-content',
                                    background: 'transparent',
                                    border: '1px solid #010085',
                                    zIndex: '999'
                                }} className='base_btn_design'>Learn More <img src={buttonIcon} /></button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Onesystem
