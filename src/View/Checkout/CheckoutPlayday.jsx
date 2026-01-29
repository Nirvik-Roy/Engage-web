import React, { useEffect, useState } from 'react'
import './Checkout.css'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import img from '../../assets/Rectangle 6692.png'
import img1 from '../../assets/Rectangle 6693.png'
import icon from '../../assets/svg159 (3).svg'
import icon2 from '../../assets/svg159 (4).svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import countryData from '../../../countries.json'
import Slider from "react-slick";
import { useParams } from 'react-router-dom'
const CheckoutPlayday = () => {
    const [src, setSrc] = useState('');
    const [dropdown, setdropdown] = useState(false);
    const { id } = useParams();
    const [experienceDropdown, setexperienceDropdown] = useState(true);
    const [addonDropdown, setaddonDropdown] = useState(true);
    const [accountDetailsDropdown, setaccountDetailsDropdown] = useState(true)
    const [currentData, setCurrentData] = useState({})
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
                        {experienceDropdown && <div className='select_experience_card_wrapper'>
                            <Slider {...settings}>
                                {[img, img1, img, img1, img].map(() => (
                                    <div className='select_experience_card'>
                                        <div className='select_experience_img'>
                                            <img src={img} />
                                        </div>
                                        <h4>Christmas  Challenge</h4>
                                        <p>Select <img src={icon} /></p>
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

                        <small><span style={{
                            fontWeight: '700'
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
                                borderBottom: '1px solid rgba(231, 233, 235, 1)'
                            }}>
                                <h3 style={{
                                    marginTop: '15px',
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
                            }}>Prizes 50 <span>$999.00 <small>Remove</small></span></p>
                            <p>Video
                                modules <span>$99.00<small>Remove</small></span></p>
                        </div>

                    </div>

                    <button className='proceed_btn'>Proceed to pay <img src={icon2} /></button>
                </div>
            </div>
        </>
    )
}

export default CheckoutPlayday
