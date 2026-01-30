import React from 'react'
import './Buildengagement.css'
import bgImg from '../../../assets/Rectangle 6690.png'
import buttonIcon from '../../../assets/svg159.svg'
import buttonIcon2 from '../../../assets/svg159 (1).svg'
import { useNavigate } from 'react-router-dom'
const Buildengagement = ({ title, description, demobtn, explorebtn, para, list = [],para2,expertBtn }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className='build_engagement_wrapper' style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover'
            }}>

                <div className='container build_engagement_content_wrapper'>
                    <div className='build_engagement_content'>
                        <h1>{title}</h1>
                        <h3>{description}</h3>
                        <p>{para}</p>
                        <ul>
                            {list.map((e, i) => (
                                <li key={i}>{e}</li>
                            ))}
                        </ul>
                        <p>{para2}</p>

                        <div className='build_engagement_btn_wrapper'>
                            {expertBtn && <button className='base_btn_design white_btn'>Talk to an Expert <img src={buttonIcon} /></button>}
                            {demobtn && <button onClick={(() => window.open('https://calendly.com/ngageworld-sales/30min', '_blank'))} className='base_btn_design white_btn'>Get a Demo <img src={buttonIcon} /></button>}
                            {explorebtn && <button onClick={(()=>{
                                navigate('/solutions/engagement')
                            })} className='base_btn_design transparent_btn'>Explore Ngage World <img src={buttonIcon2} /></button>}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Buildengagement
