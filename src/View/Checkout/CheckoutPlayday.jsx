import React, { useEffect, useRef, useState } from 'react'
import './Checkout.css'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import img from '../../assets/fdc7054fb41837eb59941bb403dd20a0c66b0678.png'
import img1 from '../../assets/411ff4766e8e675b11f4af6ae34083103a95ec00.png'
import cardImg4 from '../../assets/4fdfaf3f45ca3e76ea24a44e27f7804aabf34a12.png';
import cardImg5 from '../../assets/d38733bc95c7b74fae14454b186dd4cb422272e6.png';
import cardImg6 from '../../assets/d60774e520db301441bf9c47a8b03447473d83d2.png';
import cardImg7 from '../../assets/5373bdb8bf46a949e263c32e5f4154880fb081da.png';
import cardImg8 from '../../assets/d7b43ef75f494d3f2a7700377a82f16037ece4a2.png';
import cardImg9 from '../../assets/be8e7845ad736f6d29490a1f02e4cad52b90d8b4.png';
import cardImg10 from '../../assets/d29844c21cf8e4e13a79268f724706ddb5f883cf.png';
import icon from '../../assets/svg159 (3).svg'
import icon2 from '../../assets/svg159 (4).svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import countryData from '../../../countries.json'
import Slider from "react-slick";
import { useParams } from 'react-router-dom'
import arrowRight from '../../assets/oui_arrow-up.svg'
import arrowLeft from '../../assets/oui_arrow-up (1).svg'
const CheckoutPlayday = () => {
    const [src, setSrc] = useState('');
    const [index, setIndex] = useState(null)

    const [dropdown, setdropdown] = useState(false);
    const { id } = useParams();
    const [experienceDropdown, setexperienceDropdown] = useState(true);
    const [addonDropdown, setaddonDropdown] = useState(true);
    const [accountDetailsDropdown, setaccountDetailsDropdown] = useState(true)
    const [currentData, setCurrentData] = useState({});
    const sliderRef = useRef()
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1000,
        centerMode: true,
        centerPadding: "30px",
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
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
    const data = [
        {
            id: 1,
            title: '90-Minute Team Building',
            price: '$999'
        },
        {
            id: 2,
            title: 'Half-Day Team Building',
            price: '$2,999'
        },
        {
            id: 3,
            title: 'Corporate Fun Day / Sports Day',
            price: '$4,999'
        },
    ]

    useEffect(() => {
        if (id) {
            setCurrentData(data[id])
        }
    }, [id])

    const indexFunc = (i) => {
        if (index == i) {
            setIndex(null)
        } else {
            setIndex(i)
        }
    }


    return (
        <>
            <BannerLayout title={'Checkout'} />
            <div className='checkout_wrapper container'>
                <div className='checkout_content_wrapper'>
                    <div className='select_experience_wrapper'>
                        <div className='select_experience_head'>
                            <h1>Select Experience</h1>
                            <div className='arrow_circle' onClick={(() => setexperienceDropdown(!experienceDropdown))}>
                                {experienceDropdown ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                            </div>
                        </div>
                        {experienceDropdown && <div className='select_experience_card_wrapper' style={{
                            position:'relative'
                        }}>
                            <img onClick={(()=>{
                                sliderRef.current.slickNext();
                            })} src={arrowLeft} style={{
                                position: 'absolute',
                                zIndex: 9,
                                top: '100px',
                                left: '-20px',
                                width: '60px',
                                cursor: 'pointer'
                            }} />
                            <img onClick={(() => {
                                sliderRef.current.slickPrev();
                            })} src={arrowRight} style={{
                            position:'absolute',
                            zIndex:9,
                            top:'100px',
                            right:'-20px',
                            width:'60px',
                            cursor:'pointer'
                        }}/>
                            <Slider ref={sliderRef} {...settings}>
                                {[img, img1, cardImg4, cardImg5, cardImg6,cardImg7,cardImg8,cardImg9].map((e, i) => (
                                    <div onClick={(() => indexFunc(i))} className={index == i ? 'select_experience_card_selected' : 'select_experience_card'}>
                                        <div className='select_experience_img'>
                                            <img src={e} />
                                        </div>
                                        <h4>Christmas  Challenge</h4>
                                        {index == i ? <div style={{
                                            display: 'flex',
                                            justifyContent: 'end'
                                        }}>
                                            <span style={{
                                                fontSize: '0.9rem',
                                                fontWeight: '700',
                                                color: 'rgba(31, 144, 31, 1)',
                                            }}>Selected</span>
                                        </div>
                                            : <p>Select <img src={icon} /></p>}
                                    </div>
                                ))}
                            </Slider>
                        </div>}
                    </div>

                    <div className='select_add_on_wrapper'>
                        <div className='select_experience_head'>
                            <h1>Select Add-on</h1>
                            <div className='arrow_circle' onClick={(() => setaddonDropdown(!addonDropdown))}>
                                {addonDropdown ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                            </div>
                        </div>

                        {addonDropdown && <div className='select_add_on_content_wrapper'>
                            <div className='add_ons_wrapper'>
                                <h3>Grand Prizes</h3>
                                <ul>
                                    <li><input type='radio' />50 trophies A - $799</li>
                                    <li><input type='radio' />100
                                        trophies B - $1499</li>
                                    <li><input type='radio' />AI characters - $199</li>
                                </ul>
                            </div>

                            <div className='add_ons_wrapper'>
                                <h3>Prize pack</h3>
                                <ul>
                                    <li><input type='radio' />50 treasure hunt prizes - $799 </li>
                                    <li><input type='radio' />Additional facilitators - $99/each</li>

                                </ul>
                            </div>


                        </div>}
                    </div>

                    <div className='ngage_account_details_wrapper'>
                        <div className='select_experience_head'>
                            <h1>NGAGE account details</h1>
                            <div className='arrow_circle' onClick={(() => setaccountDetailsDropdown(!accountDetailsDropdown))}>
                                {accountDetailsDropdown ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
                            </div>
                        </div>

                        {accountDetailsDropdown && <form className='account_form_content_wrapper'>
                            <div className='account_input_form'>
                                <label>First Name <span>*</span></label>
                                <input placeholder='Enter your first name' />
                            </div>

                            <div className='account_input_form'>
                                <label>Last Name <span>*</span></label>
                                <input placeholder='Enter your last name' />
                            </div>

                            <div className='account_input_form'>
                                <label>Email <span>*</span></label>
                                <input placeholder='Enter your email' />
                            </div>

                            <div class="form-group">
                                <label>Phone number <span>*</span></label>

                                <div class="phone-input">
                                    <div class="country-select" onClick={(() => { setdropdown(!dropdown) })}>
                                        <img
                                            src={src != '' ? src : "https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/US.svg"}
                                            alt="US"
                                            class="flag"
                                        />
                                        <i style={{
                                            color: '#6b6b6b'
                                        }} class="fa-solid fa-angle-down"></i>
                                    </div>
                                    {dropdown && <div className='flag_dropdown'>
                                        {countryData?.map((e) => (
                                            <img onClick={(() => {
                                                setSrc(e?.flag_svg)
                                                setdropdown(false)
                                            })} src={e?.flag_svg} />
                                        ))}
                                    </div>}
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>

                            <div className='account_input_form' style={{
                                gridColumn: '1/-1'
                            }}>
                                <label>Company Name <span>*</span></label>
                                <input placeholder='Enter your first name' />
                            </div>

                            <div className='account_input_form'>
                                <label>Country <span>*</span></label>
                                <select className='select_input_form'>
                                    <option>--select-country--</option>
                                    <option>India</option>
                                </select>
                            </div>

                            <div className='account_input_form'>
                                <label>Company size <span>*</span></label>
                                <select className='select_input_form'>
                                    <option>--select-company-size--</option>
                                    <option>1-50</option>
                                    <option>51-200</option>
                                    <option>201-500</option>
                                    <option>500+</option>
                                </select>
                            </div>

                            <h3 style={{
                                gridColumn: '1/-1'
                            }}>Delivery</h3>

                            <div className='account_input_form'>
                                <label>Mode <span>*</span></label>
                                <select className='select_input_form'>
                                    <option>--select-mode--</option>
                                    <option>Virtual</option>
                                    <option>In-person</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>

                            <div className='account_input_form'>
                                <label>Preferred date <span>*</span></label>
                                <input type='date' />
                            </div>

                            <div className='account_input_form'>
                                <label>Address Line 1 <span>*</span></label>
                                <input type='text' placeholder='Enter addresss line 1...' />
                            </div>

                            <div className='account_input_form'>
                                <label>Address Line 2 <span>*</span></label>
                                <input type='text' placeholder='Enter addresss line 2...' />
                            </div>

                            <div className='account_gird_wrapper'>
                                <div className='account_input_form'>
                                    <label>City <span>*</span></label>
                                    <select className='select_input_form'>
                                        <option>--select-city--</option>
                                        <option>Kolkata</option>
                                    </select>
                                </div>

                                <div className='account_input_form'>
                                    <label>State <span>*</span></label>
                                    <select className='select_input_form'>
                                        <option>--select-state--</option>
                                        <option>West Bengal</option>
                                    </select>
                                </div>

                                <div className='account_input_form'>
                                    <label>Zip code <span>*</span></label>
                                    <input type='text' placeholder='Enter zip code' />
                                </div>
                            </div>
                        </form>}
                    </div>
                </div>
                <div className='checout_prices_box'>
                    <h4>Order Summary</h4>
                    <div className='order_content_wrapper'>
                        <div className='order_head_wrapper'>
                            <div className='order_head_left'>
                                <h5>{currentData?.title} </h5>
                                <h6>NGAGE Playday</h6>
                            </div>
                            <div className='order_head_left' style={{
                                rowGap: '0'
                            }}>
                                <p>Starting from</p>
                                <h3>{currentData?.price}.00</h3>
                            </div>
                        </div>

                        <small style={{
                            marginLeft: '5px'
                        }}><span style={{
                            fontWeight: '700',

                        }}>Note:</span> Final pricing is customized based on your requirements. You’ll receive a detailed quote after discussion.</small>

                        <div className='payment_summary_wrapper' style={{
                            border: 'none',
                            marginTop: '-30px',
                            marginBottom: '0'
                        }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '15px',
                                flexWrap: 'wrap',
                                paddingBottom: '10px',
                                marginTop: '20px',
                                borderBottom: '1px solid rgba(231, 233, 235, 1)'
                            }}>
                                <h3 style={{
                                    // marginTop: '15px',
                                    borderBottom: 'none',
                                    marginBottom: '0px',
                                    paddingBottom: '0px'
                                }}>Duration Tier </h3>
                                <p >Full-day</p>

                            </div>

                        </div>

                        <div className='payment_summary_wrapper' style={{
                            border: 'none',
                            marginTop: '-50px'
                        }}>
                            <h3 style={{
                                marginTop: '15px',
                                paddingBottom: '5px',
                                marginBottom: '10px'
                            }}>Add-ons</h3>
                            <p style={{
                                marginBottom: '10px'
                            }}>Prizes 50 <span>{currentData?.price}.00 <small>Remove</small></span></p>
                            <p>Video
                                modules <span>$99.00<small>Remove</small></span></p>
                        </div>

                    </div>

                    <button className='proceed_btn'>Submit Enquiry <img src={icon2} /></button>
                </div>
            </div>
        </>
    )
}

export default CheckoutPlayday
