import './Ourteam.css'
import img from '../../../assets/Rectangle 18 (3).png'
import img2 from '../../../assets/Rectangle 18 (4).png'
import img3 from '../../../assets/Rectangle 18 (5).png'
import img4 from '../../../assets/Rectangle 18 (6).png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const Ourteam = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 799,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    };
    const slideData = [
        {
            title: 'Damani Brown ',
            designation: 'Managing Director',
            img: img
        },
        {
            title: 'Dr. George Scarlett',
            designation: 'Founding Member',
            img: img2
        },
        {
            title: 'Matthew Webster ',
            designation: 'Director of Marketing & Sales',
            img: img3
        },
        {
            title: 'Winston Blackwood',
            designation: 'Director Projects & Data Analytics',
            img: img4
        },
    ]
    return (
        <>
            <div className='our_team_wrapper'>
                <div className='container our_team_content_wrapper'>
                    <h1 className='heading' style={{
                        textAlign: 'center'
                    }}>Our Team</h1>
                    <div className='our_team_slider_Wrapper'>
                        <Slider {...settings}>

                            {slideData.map((e, i) => (
                                <div className='team_div' key={i}>
                                    <div className='team_img_div'>
                                        <div className='overlay_green'>

                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                        </div>
                                        <img alt='team_img' src={e.img} />
                                    </div>
                                    <h4>{e.title}</h4>
                                    <h6>{e.designation}</h6>
                                </div>
                            ))}
                        </Slider>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Ourteam
