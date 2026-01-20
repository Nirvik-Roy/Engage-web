import './Ourteam.css'
import img from '../../../assets/Rectangle 18.png'
import img2 from '../../../assets/Rectangle 18 (1).png'
import img3 from '../../../assets/Rectangle 18 (2).png'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'
const Ourteam = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
    };
    const slideData = [
        {
            title: 'Archie Connelly',
            designation: 'Founder & CEO',
            img: img
        },
        {
            title: 'Kevin Ullrich',
            designation: 'Founder & CTO',
            img: img2
        },
        {
            title: 'Yvonne Mayer',
            designation: 'Chief of staff',
            img: img3
        },
        {
            title: 'String value',
            designation: 'Designer',
            img: ''
        },
          {
            title: 'Archie Connelly',
            designation: 'Founder & CEO',
            img: img
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
                                    <div className='overlay_green' style={e.img == "" ? {
                                        background: '#f0f4ff',
                                        opacity: 1
                                    } : {}}>
                                        <div className='social_mediaLinks_wrapper'>
                                            <i class="fa-brands fa-facebook-f"></i>
                                            <i class="fa-brands fa-instagram"></i>
                                            <i class="fa-brands fa-linkedin-in"></i>
                                            <i class="fa-brands fa-x-twitter"></i>
                                        </div>

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
