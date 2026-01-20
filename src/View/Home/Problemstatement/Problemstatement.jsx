import React from 'react'
import './Problemstatement.css'
import afterImg from '../../../assets/after (2).png'
import beforeImg from '../../../assets/before.png'
import ReactCompareImage from "react-compare-image";
import buttonImg from '../../../assets/Button.svg'
const Problemstatement = () => {
    return (
        <>
            <div className='problem_statement_wrapper'>
                <div className='container problem_statement_content_wrapper'>
                    <div className='after_img_div'>
                        <ReactCompareImage
                            leftImage={beforeImg}
                            rightImage={afterImg}
                            handle={
                                <img src={buttonImg} style={{
                                    width: '70px',
                                    height: '70px'
                                }} />
                            }
                            sliderLineWidth={6}
                        />
                    </div>
                    <div className='statement_problem_div'>
                        <h1>Problem Statement</h1>
                        <h3>No more expensive staff activities with low participation</h3>
                        <p>Most engagement efforts look good on paper — yet most HR teams experience:</p>
                        <ul>
                            <li>	High spend, low participation at staff activities </li>
                            <li>The same people participating every time</li>
                            <li>Pressure to keep coming up with new engagement ideas </li>
                            <li>No clear way to track what’s actually working</li>

                            <p style={{
                                marginTop: '40px'
                            }}>With tight budgets and year-round expectations, keeping people engaged can feel tiring.</p>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Problemstatement
