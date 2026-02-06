import './Problemstatement.css'
import afterImg from '../../../assets/image.png'
import beforeImg from '../../../assets/After.png'
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import ReactCompareImage from "react-compare-image";
import buttonImg from '../../../assets/Button.svg'
const Problemstatement = () => {
  

    const FIRST_IMAGE = {
        imageUrl: beforeImg
    };
    const SECOND_IMAGE = {
        imageUrl: afterImg
    };
    const customHandleStyle = {
        width: "30px",
        height: "30px",
        backgroundImage: `url(${buttonImg})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        cursor: "grab",
        zIndex: 99,
        border: "none", // removes default border
    };
    return (
        <>
            <div className='problem_statement_wrapper'>
                <div className='container problem_statement_content_wrapper'>
                    <div className='after_img_div'>
                        {/* <ReactCompareImage
                            leftImage={beforeImg}
                            rightImage={afterImg}
                            handle={
                                <img src={buttonImg} style={{
                                    width: '70px',
                                    height: '70px'
                                }} />
                            }
                            
                            // controlled position
                            sliderPositionPercentage={position / 100}

                            // intercept slider position
                            onSliderPositionChange={handlePositionChange}
                            sliderLineWidth={6}
                        /> */}

                        <ReactBeforeSliderComponent
                            firstImage={FIRST_IMAGE}
                            secondImage={SECOND_IMAGE}
                            delimiterIconStyles={customHandleStyle}
                        />
                    </div>
                    <div className='statement_problem_div'>
                        <h1>Engagement, simplified</h1>
                        <h3>No more expensive staff activities with low participation</h3>
                        <p>With tight budgets and year-round expectations, keeping people engaged shouldn’t feel this hard.<pre />
                            Most HR teams experience:
                        </p>
                        <ul>
                            <li>Stress to execute engaging staff experiences </li>
                            <li>Difficulty finding fresh engagement ideas all year long
                            </li>
                            <li>No clear way to track engagement success
                            </li>
                            <li>HR carrying the load to keep people motivated</li>

                            <p style={{
                                marginTop: '40px'
                            }}>Too often, engagement depends on one-off activities that take time to plan, cost more than expected, and reach only a fraction of the team. When participation drops, HR is left questioning whether the effort was worth it — and how to do better next time.
                                What’s missing isn’t effort or intent. It’s a simpler way to run engagement consistently, without starting from scratch every time or carrying the burden alone.
                            </p>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Problemstatement
