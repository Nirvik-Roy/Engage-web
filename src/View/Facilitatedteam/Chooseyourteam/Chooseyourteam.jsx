import React, { useState, useEffect } from 'react'
import cardImg4 from '../../../assets/f1aaa1a90a5023be4ecca72b9a91f46d4508a73f.png'
import cardImg5 from '../../../assets/df6013b58f9ded6dccb7decb8b982a7fe844a2fe(1).png'
import cardImg6 from '../../../assets/612a7dea21b534a14577dc9810f1802d44410b3f.png'
import cardImg7 from '../../../assets/23aba9e2998a06376d9ecbc21fc6e302b30ca1c6.png'
import cardImg8 from '../../../assets/1dd31dac9e356c1160e31c950b7780716e6e7d5d.png'
import kingOfJungle from '../../../assets/Play Day-  King of the Jungle.png'
import search from '../../../assets/Play Day- Search & Rescue Mission.png'
import family from '../../../assets/Playday Family Fun Day.png'
import corporate from '../../../assets/PlayDay- Corporate Sport Day.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const Chooseyourteam = () => {
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
            img: cardImg5,
            title: 'Team Ignite ',
            para: 'A fast-paced team session packed with short, high-energy challenges that spark connection, collaboration, and friendly competition in just 90 minutes.'
        },
        {
            id: 2,
            img: cardImg4,
            title: 'Puzzle Breakout ',
            para: ' A strategy-driven team challenge where riddles, puzzles, and clues unlock points — rewarding communication, logic, and smart teamwork under pressure.'
        },
        {
            id: 3,
            img: kingOfJungle,
            title: ' King of the Jungle ',
            para: ' A social strategy showdown blending collectible challenges, trivia, and team tasks to crown the highest-scoring team on the leaderboard.'
        },
        {
            id: 4,
            img: cardImg6,
            title: ' Amazing Race: Team Edition',
            para: 'A location-based adventure where teams follow digital clues, complete checkpoints, and race to the top through strategy and collaboration.'
        },
        {
            id: 5,
            img: cardImg7,
            title: 'Office Olympics ',
            para: 'An inclusive, Olympic-inspired competition combining light physical, mental, and social challenges to boost morale and crown a team champion.'
        },
        {
            id: 6,
            img: search,
            title: 'Search & Rescue Mission ',
            para: 'An immersive, clue-driven mission where teams solve riddles, unlock challenges, and work together to complete a coordinated rescue adventure.'
        },
        {
            id: 7,
            img: corporate,
            title: 'Corporate Play Day (Signature) ',
            para: 'A full-scale, multi-activity team-building event featuring sports, games, and inclusive challenges designed for mass participation and lasting company pride.'
        },
        {
            id: 8,
            img: family,
            title: 'Family Fun Day ',
            para: ' A company-wide celebration where staff and families earn points across activities, creating shared memories and crowning the ultimate champion family.'
        },
        {
            id: 9,
            img: cardImg5,
            title: 'Team Ignite ',
            para: 'A fast-paced team session packed with short, high-energy challenges that spark connection, collaboration, and friendly competition in just 90 minutes.'
        },
        {
            id: 10,
            img: cardImg4,
            title: 'Puzzle Breakout ',
            para: ' A strategy-driven team challenge where riddles, puzzles, and clues unlock points — rewarding communication, logic, and smart teamwork under pressure.'
        },
      
    ]
    return (
        <>
            <div className='container engage_rythm_content_wrapper'>
                <h1 className='heading'>Choose your team building experience</h1>
                <p>All Ngage Play Day sessions are built around a set of proven team building formats.
                    Teams choose one experience as the foundation, regardless of duration.
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
            <span className='container' style={{
                fontWeight: '700',
                textAlign: 'center',
                display: 'block',
                marginTop: '-20px'
            }}>Pricing varies by experience and format. Select an experience to receive a tailored quote.</span>
        </>
    )
}

export default Chooseyourteam
