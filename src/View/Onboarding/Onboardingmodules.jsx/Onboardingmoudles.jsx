import React, { useState, useEffect } from 'react'
import img from '../../../assets/Launchpad Culture Values Quest.png'
import img2 from '../../../assets/Launchpad Meet The Teams.png'
import img3 from '../../../assets/Launchpad Policies & Compliance.png'
import img4 from '../../../assets/Launchpad Workplace & Tools Tour.png'
import img5 from '../../../assets/Launchpad  Role Readiness.png'
import img6 from '../../../assets/Launchpad Manager Welcome & Early Success Plan.png'
import img7 from '../../../assets/Launchpad Customer & Brand Experience.png'
import img8 from '../../../assets/Launchpad Technology & System Onboarding.png'
import img9 from '../../../assets/Launchpad  Culture Stories.png'
import img10 from '../../../assets/Launchpad Wellness & Workplace Etiquette.png'
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
            img: img,
            title: 'Culture & Values Quest',
            para: ' Turn company values into practical workplace behaviors through interactive scenarios that make culture clear, relatable, and actionable.'
        },
        {
            id: 2,
            img: img2,
            title: ' Meet the Team',
            para: ' Help new hires quickly learn departments, leaders, and reporting lines through interactive introductions and guided connection challenges.'
        },
        {
            id: 3,
            img: img3,
            title: 'Policies & Compliance (Gamified)',
            para: ' Transform policies into short interactive knowledge checks that improve understanding, retention, and documented completion.'
        },
        {
            id: 4,
            img: img4,
            title: 'Workplace & Tools Tour',
            para: ' Guide new hires through key locations, systems, and resources using interactive discovery challenges.'
        },
        {
            id: 5,
            img: img5,
            title: ' Role Readiness',
            para: ' Clarify role expectations, KPIs, and early priorities so new hires understand what success looks like from the start.'
        },
        {
            id: 6,
            img: img6,
            title: ' Manager Welcome & Early Success Plan',
            para: 'Align managers and new hires around clear expectations, early goals, and structured progress checkpoints.'
        },
        {
            id: 7,
            img: img7,
            title: ' Customer & Brand Experience',
            para: 'Introduce brand standards and customer expectations through practical scenarios tied directly to everyday responsibilities.'
        },
        {
            id: 8,
            img: img8,
            title: 'Technology & Systems Onboarding',
            para: 'Build confidence using core systems and tools through guided tasks and structured digital walkthroughs.'
        },
        {
            id: 9,
            img: img9,
            title: ' Culture Stories',
            para: 'Strengthen emotional connection through leadership stories and reflection prompts that reinforce identity and purpose.'
        },
        {
            id: 10,
            img: img10,
            title: 'Wellness & Workplace Etiquette',
            para: 'Reinforce workplace conduct, inclusion, and communication standards through interactive real-world scenarios.'
        },

    ]
    return (
        <>
            <div style={{
                padding: '70px 0 30px 0'
            }}>

                <div className='container engage_rythm_content_wrapper'>
                    <h1 className='heading'>Choose your onboarding modules</h1>
                    <p>Launchpad onboarding journeys are built using modular experiences.
                        You select the modules that reflect your culture, structure, and compliance needs — and we assemble them into a guided onboarding path.
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
