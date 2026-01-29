import React,{useState,useEffect} from 'react'
import cardImg from '../../../assets/c916209092a6d3fef78320b3722db5f4b286cbe1.jpg'
import cardImg2 from '../../../assets/76eb601ae8cbdb510a11f197e2af52a513a36fc9.jpg'
import cardImg3 from '../../../assets/b191c8ca226e6d6e84daec673db7abc4b9a3a71b.jpg'
import cardImg4 from '../../../assets/f1aaa1a90a5023be4ecca72b9a91f46d4508a73f.png'
import cardImg5 from '../../../assets/71797a607c6f7a762dea1a84569e07d0a0b130b4.png'
import cardImg6 from '../../../assets/612a7dea21b534a14577dc9810f1802d44410b3f.png'
import cardImg7 from '../../../assets/23aba9e2998a06376d9ecbc21fc6e302b30ca1c6.png'
import cardImg8 from '../../../assets/1dd31dac9e356c1160e31c950b7780716e6e7d5d.png'
import cardImg9 from '../../../assets/091ca18ad4cae01028d1012bab19f788c9c0a3ad.png'
import cardImg10 from '../../../assets/df6013b58f9ded6dccb7decb8b982a7fe844a2fe.png'
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
            img: cardImg4,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            img: cardImg5,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 3,
            img: cardImg6,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 4,
            img: cardImg7,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 5,
            img: cardImg8,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 6,
            img: cardImg9,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 7,
            img: cardImg10,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 8,
            img: cardImg3,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 9,
            img: cardImg,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 10,
            img: cardImg,
            title: 'Christmas ',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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
                marginTop: '20px'
            }}>Pricing varies by experience and format. Select an experience to receive a tailored quote.</span>




        </>
    )
}

export default Chooseyourteam
