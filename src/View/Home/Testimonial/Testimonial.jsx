import React from 'react'
import './Testimonial.css'
import ellipse from '../../../assets/Testimonial - Shannon Jones.png'
import ellipse2 from '../../../assets/Testimonial - Yanique Dixon.png'
import gina from '../../../assets/Testimonial - Gina Tomlinson-Williams.jpeg'
import kadia from '../../../assets/Testimonial - Kadia Burrell (name changed from Kadia Adlam).jpeg'
import dellen from '../../../assets/Testimonial - Deleen Powell.jpeg'
import star from '../../../assets/stars.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const Testimonial = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 699,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]

    };
    const data = [
        {
            id: 1,
            img: ellipse2,
            review: 'Our company fun Day was a hit!. The games and overall experience provided to our team was excellent! We are looking forward to future engagements. Thanks team Ngage ',
            name: 'Yanique Dixon',
            designation: 'J. Wray & Nephew'
        },
        {
            id: 2,
            img: ellipse,
            review: 'We held a Girls in ICT Day event for over 200 young ladies. Ngage created an immersive and cohesive experience to educate our girls on ICT. Participants were able to meet each other, complete challenges and earn points. Ngage was an amazing partner for us. It was a solid 10/10.  ',
            name: 'Shannon Jones',
            designation: 'Flow Jamaica'
        },


        {
            id: 3,
            img: gina,
            review: 'Ngage helped us raise the energy of our team; who had been under a lot of stress with restoration activities after Hurricane Beryl. Team members across the company were able to connect with each other through the fun challenges. The staff loved it and Ngage even provided prizes. ',
            name: 'Gina Tomlinson',
            designation: 'JPSco'
        }, {
            id: 4,
            img: kadia,
            review: 'The post-lunch slump vanished — the room was buzzing again within minutes',
            name: 'Conference Producer',
            designation: 'Regional Business Summit'
        },
        {
            id: 5,
            img: dellen,
            review: 'Our booth stayed packed all day — Ngage made it fun for guests to engage and easy for us to collect leads.',
            name: 'Marketing Manager,',
            designation: 'Auto Show Exhibitor'
        },

    ]
    return (
        <>
            <div className='testimonial_wrapper'>
                <div className='container testimonial_content_wrapper'>
                    <h1 className='heading'>Testimonial</h1>
                    <div className='testimonial_cards_wrapper'>
                        <Slider {...settings}>
                            {data.map((e, i) => (
                                <div className='testimonial_card' key={i}>
                                    <div>
                                        <img className='client_logo' src={e.img} />
                                        <img className='star_img' src={star} alt='rating_img' />
                                        <p>“{e.review}”</p>
                                    </div>

                                    <div>
                                        <h6>{e.name}</h6>
                                        <small>{e.designation}</small>
                                    </div>

                                </div>

                            ))}
                        </Slider>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Testimonial
