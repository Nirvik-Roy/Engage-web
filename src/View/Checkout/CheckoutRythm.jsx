import React, { useEffect, useState } from 'react'
import './Checkout.css'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import img from '../../assets/fdc7054fb41837eb59941bb403dd20a0c66b0678.png'
import img1 from '../../assets/411ff4766e8e675b11f4af6ae34083103a95ec00.png'
import icon from '../../assets/svg159 (3).svg'
import icon2 from '../../assets/svg159 (4).svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import countryData from '../../../countries.json'
import Slider from "react-slick";
import { useParams } from 'react-router-dom'
const CheckoutRythm = () => {
    const [src, setSrc] = useState('');
    const [dropdown, setdropdown] = useState(false);
    const [currentData, setCurrentData] = useState({});
    const [experienceDropdown, setexperienceDropdown] = useState(true);
    const [addonDropdown, setaddonDropdown] = useState(true);
    const [accountDetailsDropdown, setaccountDetailsDropdown] = useState(true)
    const { id } = useParams()
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
            title: 'Rhythm Spark',
            price: '$699',
        },
        {
            id: 2,
            title: 'Rhythm Pulse ',
            price: '$1,499',
        },
        {
            id: 3,
            title: 'Boost Rhythm ',
            price: ' $1,249 / quarter'
        },
        {
            id: 4,
            title: 'Build Rhythm ',
            price: '  $999 / month'
        },
        {
            id: 5,
            title: 'Sustain Rhythm ',
            price: '$1,999 / month'
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
                                {experienceDropdown ? <i class="fa-solid fa-angle-down"></i> : <i class="fa-solid fa-angle-up"></i>}
                            </div>
                        </div>
                        {experienceDropdown && <div className='select_experience_card_wrapper'>
                            <Slider {...settings}>
                                {[img, img1, img, img1, img].map((e) => (
                                    <div className='select_experience_card'>
                                        <div className='select_experience_img'>
                                            <img src={e} />
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
                                {addonDropdown ? <i class="fa-solid fa-angle-down"></i> : <i class="fa-solid fa-angle-up"></i>}
                            </div>
                        </div>

                        {addonDropdown && <div className='select_add_on_content_wrapper'>
                            <div className='add_ons_wrapper'>
                                <h3>Grand Prizes</h3>
                                <ul>
                                    <li><input type='radio' />Top 10 - $299</li>
                                    <li><input type='radio' />Prize pack: top 3 pro - $399</li>
                                    <li><input type='radio' />Pack: top 3 deluxe - $699</li>
                                </ul>
                            </div>

                            <div className='add_ons_wrapper'>
                                <h3>Prize pack</h3>
                                <ul>
                                    <li><input type='radio' />Prize pack: 25 digital prize - $499</li>
                                    <li><input type='radio' />Prize pack: 50 digital prize - $999</li>
                                    <li><input type='radio' />Prize pack: 100 digital prize - $1599</li>
                                </ul>
                            </div>

                            <div className='add_ons_wrapper'>
                                <h3>Other</h3>
                                <ul>
                                    <li><input type='radio' />Extra players $2.50 each</li>
                                </ul>
                            </div>
                        </div>}
                    </div>

                    <div className='ngage_account_details_wrapper'>
                        <div className='select_experience_head'>
                            <h1>NGAGE account details</h1>
                            <div className='arrow_circle' onClick={(() => setaccountDetailsDropdown(!accountDetailsDropdown))}>
                                {accountDetailsDropdown ? <i class="fa-solid fa-angle-down"></i> : <i class="fa-solid fa-angle-up"></i>}
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
                                <h6>NGAGE Rhythm</h6>
                            </div>
                            <div className='order_head_right'>
                                <h3>{currentData?.price}</h3>
                            </div>
                        </div>

                        <div className='order_coupon_wrapper'>
                            <div className='order_coupon_head'>
                                <h5>Coupon</h5>
                                <p>Add Coupon</p>
                            </div>

                            <div className='coupon_input_wrapper'>
                                <input placeholder='Add coupon code' />
                                <p>Apply <img src={icon} /></p>

                            </div>
                            <h3>NGAGE 90 <span>Applied</span></h3>
                        </div>

                        <div className='payment_summary_wrapper'>
                            <h3>Payment Summary</h3>
                            <p style={{
                                marginBottom: '10px'
                            }}>Plan Price <span>$699.00</span></p>
                            <p>Discount <span>-$0.00</span></p>

                            <h3 style={{
                                marginTop: '15px'
                            }}>Add-ons</h3>

                            <p style={{
                                marginBottom: '10px'
                            }}>Pack: top 3 deluxe<span>$699 <small>Remove</small></span></p>
                            <p>Prize pack: 100 digital prize <span>$1,599 <small>Remove</small></span></p>
                        </div>

                        <h1 className='total_number'>Total <span>$1,797.00</span></h1>
                    </div>

                    <button className='proceed_btn'>Proceed to pay <img src={icon2} /></button>
                </div>
            </div>
        </>
    )
}

export default CheckoutRythm
