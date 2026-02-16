import React, { useState, useEffect } from 'react'
import './Launchpadworks.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const Launchpadworks = () => {
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
        autoplay: false,
        autoplaySpeed: 1000,
        // centerMode: true,
        // centerPadding: "10px",
        draggable: false,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                    autoplay: true,
                    centerMode: true,
                    centerPadding: "10px",
                    draggable: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "10px",
                    autoplay: true,
                    draggable: true,
                    centerMode: true,
                }
            },
            {
                breakpoint: 486,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "70px",
                    autoplay: true,
                    draggable: true,
                    centerMode: true,
                }
            },
        ]
    };
    const data = [
        {
            title: 'Design your journey',
            para: 'We help you convert your onboarding content into interactive modules and structured levels.'
        },
        {
            title: 'New hires complete the experience',
            para: 'Employees progress through onboarding challenges, watch short videos, answer quizzes, and explore your organization — all from their phone.'
        },
        {
            title: 'Track onboarding impact',
            para: 'HR sees completion rates, participation levels, and engagement insights through the NES report.'
        }
    ]
    return (
        <>
            <div className='build_once_wrapper'>
                <h1 className='heading'>How Launchpad works</h1>
                <div className='container build_once_content_wrapper'>
                    {mounted && <Slider {...settings}>
                        {data.map((e, i) => (
                            <>
                                <div className='build_step'>
                                    <h2>Step {i + 1}</h2>
                                    <h4>{e.title}</h4>
                                    <p>{e.para}</p>
                                </div>
                            </>
                        ))}
                    </Slider>}
                </div>
            </div>
        </>
    )
}

export default Launchpadworks
