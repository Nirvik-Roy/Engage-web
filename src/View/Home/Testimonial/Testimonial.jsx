import React from 'react'
import './Testimonial.css'
import ellipse from '../../../assets/Ellipse 1.png'
import ellipse2 from '../../../assets/Ellipse 2.png'
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
            review: '“Ngage helped us get more people involved — not just the usual participants.”',
            name: 'Sophia Anderson',
            designation: 'HR Manager'
        },
        {
            id: 2,
            img: ellipse,
            review: '“It made engagement easier to manage and easier for staff to enjoy.”',
            name: 'Sophia Anderson',
            designation: 'People & Culture Lead'
        },


        {
            id: 3,
            img: ellipse,
            review: '“It made engagement easier to manage and easier for staff to enjoy.”',
            name: 'Sophia Anderson',
            designation: 'People & Culture Lead'
        },
        {
            id: 1,
            img: ellipse2,
            review: '“Ngage helped us get more people involved — not just the usual participants.”',
            name: 'Sophia Anderson',
            designation: 'HR Manager'
        },
        {
            id: 2,
            img: ellipse,
            review: '“It made engagement easier to manage and easier for staff to enjoy.”',
            name: 'Sophia Anderson',
            designation: 'People & Culture Lead'
        },


        {
            id: 3,
            img: ellipse,
            review: '“It made engagement easier to manage and easier for staff to enjoy.”',
            name: 'Sophia Anderson',
            designation: 'People & Culture Lead'
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
                                    <img className='client_logo' src={e.img} />
                                    <img className='star_img' src={star} alt='rating_img' />

                                    <p>“{e.review}”</p>

                                    <h6>{e.name}</h6>
                                    <small>{e.designation}</small>
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
