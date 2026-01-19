import React from 'react'
import './MeetEngage.css'
import img from '../../../assets/3864bda0c85d9309028b4066ef6a22484fd9dfc8.jpg'
import buttoIcon from '../../../assets/svg159.svg'
import buttoIcon2 from '../../../assets/svg159 (2).svg'
import engageImg from '../../../assets/Rectangle 6672.png'
import engageImg2 from '../../../assets/Rectangle 6673.png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const MeetEngage = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,

    };
    return (
        <>
            <div className='meet_engage_wrapper'>
                <div className='container meet_engage_content_wrapper'>
                    <div className='left_engage_content'>
                        <h1 style={{ marginBottom: '20px' }}>Meet NGAGE:</h1>
                        <p style={{ marginBottom: '20px' }}>Ngage is an employee engagement system that gives HR teams a simple, structured way to engage employees — without starting from scratch each time or carrying the full load alone.
                            It replaces scattered activities with a simple, repeatable approach to engagement.
                        </p>
                        <p>Engagement becomes:
                        </p>
                        <ul>
                            <li>Easier to run</li>
                            <li>Easier for employees to join</li>
                            <li>Easier to track and report</li>
                        </ul>
                        <p>All through one platform designed to support engagement across onboarding, everyday work, and company-wide moments.
                        </p>

                        <div className='engage_btn_wrapper'>
                            <button className='base_btn_design'>Explore Ngage World <img src={buttoIcon} /></button>
                            <button className='base_btn_design'>Get a demo <img src={buttoIcon2} /></button>
                        </div>

                        <div className='enage_img_grid_wrapper'>
                            <img src={engageImg} />
                            <img src={engageImg2} />
                        </div>
                    </div>
                    <div className='right_engage_img'>
                        <Slider {...settings}>
                            {[1, 2, 3, 4, 5].map((e) => (
                                <div>
                                <img key={e} src={img} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MeetEngage
