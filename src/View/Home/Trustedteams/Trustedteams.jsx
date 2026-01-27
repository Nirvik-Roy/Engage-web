import React from 'react'
import './Trustedteams.css'
import logo from '../../../assets/BOJ Logo.png'
import logo2 from '../../../assets/CB Group Logo - transparent.png'
import logo3 from '../../../assets/fhc-credit-union-logo.png'
import logo4 from '../../../assets/JIFS Logo (transparent).png'
import logo5 from '../../../assets/JPS 100 logo fin c Vertical.jpg'
import logo6 from '../../../assets/JWray 200 Logo Cropped Main.png'
import logo7 from '../../../assets/PEP_Logo_Globe_FullColor_RGB.png'
import logo8 from '../../../assets/RA-Williams-Logo-01-1-min-300x300.png'
import logo9 from '../../../assets/Red Stripe corporate logo (002).png'
import logo10 from '../../../assets/sagicor-logo-stacked.png'
import logo11 from '../../../assets/supreme_ventures_ltd_logo.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const Trustedteams = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    const data = [
        {
            id: 1,
            logo: logo
        },
        {
            id: 2,
            logo: logo2
        },
        {
            id: 3,
            logo: logo3
        },
        {
            id: 4,
            logo: logo4
        },
        {
            id: 5,
            logo: logo5
        },
        {
            id: 6,
            logo: logo6
        },
        {
            id: 7,
            logo: logo7
        },
        {
            id: 8,
            logo: logo8
        },
        {
            id: 9,
            logo: logo9
        },
        {
            id: 10,
            logo: logo10
        },
        {
            id: 11,
            logo: logo11
        },
    ]
    return (
        <>
            <div className='trusted_teams_wrapper'>
                <div className='container trusted_teams_content_wrapper'>
                    <h1 className='heading'>Trusted by teams across Industries</h1>
                    <div className='trusted_teams_slider_wrapper'>
                        <Slider {...settings}>
                            {data.map((e, i) => {
                                return (
                                    <>
                                        <img src={e.logo} key={i} alt='company_logos' />
                                    </>
                                )
                            })}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trustedteams
