import React, { useState, useEffect } from 'react'
import cardImg from '../../../assets/71797a607c6f7a762dea1a84569e07d0a0b130b4(1).png'
import cardImg2 from '../../../assets/d7b43ef75f494d3f2a7700377a82f16037ece4a2.png'
import cardImg3 from '../../../assets/b7fc6a43317d91ab7ecca081234f00dec40cc88f.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const Onboardingmoudles = () => {
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
        centerPadding: "10px",
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                }
            },
        ]
    };
    const cardData = [
        {
            id: 1,
            img: cardImg,
            title: 'Launchpad Starter — Foundations Journey',
            para: ' A structured onboarding journey that introduces culture, values, policies, and people through interactive challenges completed during new hires’ first week.'
        },
        {
            id: 2,
            img: cardImg2,
            title: 'Launchpad Pro (AI) — Guided Culture Journey',
            para: ' An AI-guided onboarding experience that delivers culture and compliance content through conversational scenarios and interactive challenges.'
        },
        {
            id: 3,
            img: cardImg3,
            title: 'Launchpad Ultimate — Immersive Onboarding Quest',
            para: ' A fully branded, story-driven onboarding experience using real people, locations, and quests to accelerate connection and understanding.'
        },
        {
            id: 1,
            img: cardImg,
            title: 'Launchpad Starter — Foundations Journey',
            para: ' A structured onboarding journey that introduces culture, values, policies, and people through interactive challenges completed during new hires’ first week.'
        },
        {
            id: 2,
            img: cardImg2,
            title: 'Launchpad Pro (AI) — Guided Culture Journey',
            para: ' An AI-guided onboarding experience that delivers culture and compliance content through conversational scenarios and interactive challenges.'
        },
        {
            id: 3,
            img: cardImg3,
            title: 'Launchpad Ultimate — Immersive Onboarding Quest',
            para: ' A fully branded, story-driven onboarding experience using real people, locations, and quests to accelerate connection and understanding.'
        },
        {
            id: 1,
            img: cardImg,
            title: 'Launchpad Starter — Foundations Journey',
            para: ' A structured onboarding journey that introduces culture, values, policies, and people through interactive challenges completed during new hires’ first week.'
        },
        {
            id: 2,
            img: cardImg2,
            title: 'Launchpad Pro (AI) — Guided Culture Journey',
            para: ' An AI-guided onboarding experience that delivers culture and compliance content through conversational scenarios and interactive challenges.'
        },
        {
            id: 3,
            img: cardImg3,
            title: 'Launchpad Ultimate — Immersive Onboarding Quest',
            para: ' A fully branded, story-driven onboarding experience using real people, locations, and quests to accelerate connection and understanding.'
        },
        {
            id: 1,
            img: cardImg,
            title: 'Launchpad Starter — Foundations Journey',
            para: ' A structured onboarding journey that introduces culture, values, policies, and people through interactive challenges completed during new hires’ first week.'
        },

    ]
    return (
        <>
            <div style={{
                padding: '70px 0 30px 0'
            }}>

                <div className='container engage_rythm_content_wrapper'>
                    <h1 className='heading'>Choose your onboarding modules</h1>
                    <p>Launchpad onboarding journeys are built using a set of modular experiences.
                        Each organization selects the modules that best reflect its culture and onboarding needs.
                    </p>

                </div>

                <div className='engage_rythm_cards_wrapper'>
                    {cardData.map((e, i) => (
                        <div key={i} className='engage_rythm_card' >
                            <div className='engage_rythm_img'>
                                <img src={e.img} />
                                <div className='number'>{e.id}</div>
                            </div>
                            <h4>{e.title}</h4>
                            <small>{e.para}</small>
                        </div>

                    ))}
                </div>

                <div className='engage_rythm_cards_wrapper responsive_rythm_cards_wrapper'>
                    {mounted && <Slider {...settings}>

                        {cardData.map((e, i) => (
                            <div key={i} className='engage_rythm_card' >
                                <div className='engage_rythm_img'>
                                    <img src={e.img} />
                                    <div className='number'>{e.id}</div>
                                </div>
                                <h4>{e.title}</h4>
                                <small>{e.para}</small>
                            </div>

                        ))}
                    </Slider>}
                </div>

                <h3 className='container' style={{
                    textAlign: 'center'
                }}>Available modules:
                    •	Culture & Values
                    •	Policies & Compliance
                    •	Meet the Team
                    •	Your Workplace
                    •	Role Readiness
                </h3>

                <p className='container' style={{
                    textAlign: 'center'
                }}>Modules are assembled into a multi-level onboarding journey using your existing content.</p>
            </div>
        </>
    )
}

export default Onboardingmoudles
