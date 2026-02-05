import React, { useState, useEffect } from 'react'
import './Engagerythm.css'
import cardImg from '../../../assets/1186bb239a9a7ebde4b8be26b693ed2be4644dac.png'
import cardImg2 from '../../../assets/fdc7054fb41837eb59941bb403dd20a0c66b0678.png'
import cardImg3 from '../../../assets/411ff4766e8e675b11f4af6ae34083103a95ec00.png'
import cardImg4 from '../../../assets/4fdfaf3f45ca3e76ea24a44e27f7804aabf34a12.png';
import cardImg5 from '../../../assets/d38733bc95c7b74fae14454b186dd4cb422272e6.png';
import cardImg6 from '../../../assets/23aba9e2998a06376d9ecbc21fc6e302b30ca1c6(1).png';
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
            title: 'Rep Your Alma Mater ',
            para: 'A team experience where employees represent their schools through trivia and creative challenges that spark conversation and friendly rivalry.'
        },
        {
            id: 2,
            img: cardImg2,
            title: 'Wellness Recharge ',
            para: 'A week-long wellness experience built around small daily actions that encourage balance, consistency, and positive habits across teams.'
        },
        {
            id: 3,
            img: cardImg3,
            title: 'Team Trivia League ',
            para: 'A fast-paced trivia competition designed to energize teams through friendly rivalry, quick participation, and cumulative team scoring.'
        },
        {
            id: 4,
            img: cardImg4,
            title: 'Easter Scavenger Hunt ',
            para: 'A seasonal digital hunt where participants solve clues and discover hidden Easter eggs through playful challenges and bonus tasks.'
        },
        {
            id: 5,
            img: cardImg5,
            title: 'World Cup Challenge ',
            para: ' A football-themed team experience combining match predictions, trivia, and fan challenges to drive excitement and natural participation.'
        },
        {
            id: 6,
            img: cardImg6,
            title: 'Office Olympics (Virtual Edition) ',
            para: '  A playful virtual competition featuring multiple mini-challenges where teams earn cumulative points to build shared momentum.'
        },
        {
            id: 7,
            img: cardImg7,
            title: 'Culture Quest ',
            para: ' An interactive values experience using workplace scenarios, puzzles, and trivia to turn abstract culture principles into recognizable everyday behaviours.'
        },
        {
            id: 8,
            img: cardImg8,
            title: ' Data Privacy Challenge ',
            para: 'An interactive experience that builds data privacy awareness through short challenges focused on everyday scenarios and practical decision-making.'
        },
        {
            id: 9,
            img: cardImg9,
            title: 'AML Awareness Sprint ',
            para: 'A focused compliance experience delivering key AML concepts through quick challenges that maintain attention while reinforcing regulatory awareness.'
        },
        {
            id: 10,
            img: cardImg10,
            title: 'Year-End Wrap-Up ',
            para: ' A reflective end-of-year experience highlighting wins, milestones, and memories while creating shared closure through interactive challenges.'
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
