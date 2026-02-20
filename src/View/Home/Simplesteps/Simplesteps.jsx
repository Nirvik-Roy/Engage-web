import React,{useState,useEffect} from 'react'
import './Simplesteps.css'
import buttonIcon from '../../../assets/svg159.svg'
import buttonIcon2 from '../../../assets/svg159 (2).svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
import { useNavigate } from 'react-router-dom';
const Simplesteps = () => {
    const navigate = useNavigate()
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        centerPadding: "40px",
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    const data = [
        {
            id: 1,
            step: '1',
            title: 'Select your solution',
            para: 'Launchpad, Rhythm, or Play Day'
        },
        {
            id: 2,
            step: '2',
            title: 'Choose an experience',
            para: 'Choose a ready-to-run experience.'
        },
        {
            id: 3,
            step: '3',
            title: 'Launch and engage',
            para: 'Teams play and earn rewards.'
        },
        {
            id: 4,
            step: '4',
            title: 'Track and Improve',
            para: 'Track engagement. Improve outcomes.'
        },

    ]
    return (
        <>
            <div className='simple_steps_wrapper'>
                <div className='container simple_steps_content_Wrapper'>
                    <h1 className='heading'>Your experience in 4 simple steps</h1>
                    <div className='steps_wrapper'>
                        {data.map((e, i) => (
                            <div key={i} className='step'>
                                <h2>Step {e.step}</h2>
                                <h4>{e.title}</h4>
                                <p>{e.para}</p>
                            </div>
                        ))}
                    </div>
                    {/* Responsive design */}
                    <div className='steps_wrapper responsive_steps_wrapper'>
                        {mounted && <Slider {...settings}>

                            {data.map((e, i) => (
                                <>

                                    <div key={i} className='step'>
                                        <h2>Step {e.step}</h2>
                                        <h4>{e.title}</h4>
                                        <p>{e.para}</p>
                                    </div>
                                </>
                            ))}
                        </Slider>}
                    </div>

                    <div className='steps_btn_wrapper'>
                        <button onClick={(() => navigate('/solutions/engagement'))} className='base_btn_design'>Explore Ngage World <img src={buttonIcon} /></button>
                        <button className='base_btn_design' onClick={(() => window.open('https://calendly.com/ngageworld-sales/30min', '_blank'))}>Get a demo <img src={buttonIcon2} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Simplesteps
