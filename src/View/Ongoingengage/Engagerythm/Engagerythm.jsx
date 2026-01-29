import React, { useState, useEffect } from 'react'
import './Engagerythm.css'
import cardImg from '../../../assets/1186bb239a9a7ebde4b8be26b693ed2be4644dac.png'
import cardImg2 from '../../../assets/fdc7054fb41837eb59941bb403dd20a0c66b0678.png'
import cardImg3 from '../../../assets/411ff4766e8e675b11f4af6ae34083103a95ec00.png'
import cardImg4 from '../../../assets/4fdfaf3f45ca3e76ea24a44e27f7804aabf34a12.png';
import cardImg5 from '../../../assets/d38733bc95c7b74fae14454b186dd4cb422272e6.png';
import cardImg6 from '../../../assets/d60774e520db301441bf9c47a8b03447473d83d2.png';
import cardImg7 from '../../../assets/5373bdb8bf46a949e263c32e5f4154880fb081da.png';
import cardImg8 from '../../../assets/d7b43ef75f494d3f2a7700377a82f16037ece4a2.png';
import cardImg9 from '../../../assets/be8e7845ad736f6d29490a1f02e4cad52b90d8b4.png';
import cardImg10 from '../../../assets/d29844c21cf8e4e13a79268f724706ddb5f883cf.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const Engagerythm = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    const cardData = [
        {
            id: 1,
            img: cardImg,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            img: cardImg2,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 3,
            img: cardImg3,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 4,
            img: cardImg4,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 5,
            img: cardImg5,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 6,
            img: cardImg6,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 7,
            img: cardImg7,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 8,
            img: cardImg8,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 9,
            img: cardImg9,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 10,
            img: cardImg10,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
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
    return (
        <>

            <div className='container engage_rythm_content_wrapper'>
                <h1 className='heading'>Set your engagement rhythm</h1>
                <h3>Simply choose from 30+ ready-made engagement experiences </h3>
                <p>Each experience is designed to spark interaction, collaboration, and light competition.
                    Experiences are ready to run, require no facilitation, and can be launched with a few clicks — making it easy to maintain a consistent engagement cadence throughout the year.</p>



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

        </>
    )
}

export default Engagerythm
