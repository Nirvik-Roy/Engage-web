import React,{useState,useEffect} from 'react'
import './Simplesteps.css'
import buttonIcon from '../../../assets/svg159.svg'
import buttonIcon2 from '../../../assets/svg159 (2).svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const Simplesteps = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
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
            title: 'Choose your experience',
            para: 'Launchpad, Rhythm, or Play Day'
        },
        {
            id: 2,
            step: '2',
            title: 'Configure & customize',
            para: 'Branding, rules, content'
        },
        {
            id: 3,
            step: '3',
            title: 'Launch & invite',
            para: 'Share links via email or QR codes'
        },
        {
            id: 4,
            step: '4',
            title: 'Participate & engage',
            para: 'Teams earn points and tangible rewards'
        },

        {
            id: 5,
            step: '5',
            title: 'Track & improve',
            para: 'NES insights and participation trends'
        },
    ]
    return (
        <>
            <div className='simple_steps_wrapper'>
                <div className='container simple_steps_content_Wrapper'>
                    <h1 className='heading'>Your experience in 5 simple steps</h1>
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
                        <button className='base_btn_design'>Explore Ngage World <img src={buttonIcon} /></button>
                        <button className='base_btn_design'>Get a demo <img src={buttonIcon2} /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Simplesteps
