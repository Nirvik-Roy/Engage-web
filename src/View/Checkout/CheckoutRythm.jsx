import React, { useEffect, useRef, useState } from 'react'
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
import axios from 'axios'
import { useParams } from 'react-router-dom'
import arrowRight from '../../assets/oui_arrow-up.svg'
import arrowLeft from '../../assets/oui_arrow-up (1).svg'
import toast from 'react-hot-toast'
const CheckoutRythm = () => {
    const [src, setSrc] = useState('');
    const [dropdown, setdropdown] = useState(false);
    const [currentData, setCurrentData] = useState({});
    const [experienceDropdown, setexperienceDropdown] = useState(true);
    const [addonDropdown, setaddonDropdown] = useState(true);
    const [accountDetailsDropdown, setaccountDetailsDropdown] = useState(true);
    const sliderRef = useRef()
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
            total: 2997
        },
        {
            id: 2,
            title: 'Rhythm Pulse ',
            price: '$1,499',
            total: 3797
        },
        {
            id: 3,
            title: 'Boost Rhythm ',
            price: ' $1,249 / quarter',
            total: 7294
        },
        {
            id: 4,
            title: 'Build Rhythm ',
            price: ' $999 / month',
            total: 3297
        },
        {
            id: 5,
            title: 'Sustain Rhythm ',
            price: '$1,999 / month',
            total: 4297
        },
    ]

    useEffect(() => {
        if (id) {
            setCurrentData(data[id])
        }
    }, [id])
    const [loaders, setLoaders] = useState(false);
    const [index, setIndex] = useState(null)
    // const jamaicaCurrencyValue = 120
    const result = (1797 * 161) + 0;
    const totalWithDecimals = result.toFixed(2);
    const uniqueOrderId = `oid_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const paymentRequest = async () => {
        if (
            forminputData.firstName !== '' &&
            forminputData.lastName !== '' &&
            forminputData.email !== '' &&
            forminputData.phone !== '' &&
            forminputData.companyName !== '' &&
            forminputData.country !== '' &&
            forminputData.companySize !== '' &&
            forminputData.mode !== '' &&
            forminputData.date !== '' &&
            forminputData.addressLine1 !== '' &&
            forminputData.addressLine2 !== '' &&
            forminputData.city !== '' &&
            forminputData.state !== '' &&
            forminputData.zipCode !== ''
        ){
            try {
                // Create FormData instead of URLSearchParams
                const formData = new FormData();
                setLoaders(true)
                // Append all parameters to FormData
                formData.append('account_number', '1234567890');
                formData.append('avs', '0');
                formData.append('country_code', 'JM');
                formData.append('currency', 'JMD');
                formData.append('data', '{"a":"b"}');
                formData.append('environment', 'sandbox');
                formData.append('fee_structure', 'customer_pay');
                formData.append('method', 'credit_card');
                formData.append('order_id', uniqueOrderId);
                formData.append('origin', 'WiPay-example_app');
                formData.append('response_url', 'https://tt.wipayfinancial.com/response/');
                formData.append('total', totalWithDecimals);

                // Configure headers
                const headers = {
                    'Accept': 'application/json',
                    // Axios will automatically set Content-Type for FormData
                };

                // Make the POST request using axios
                const response = await axios.post(
                    'https://tt.wipayfinancial.com/plugins/payments/request',
                    formData,
                    {
                        headers: headers,
                    }
                );

                // Axios automatically parses JSON responses when Accept header includes application/json
                // Perform redirect
                if (response.data && response.data.url) {
                    window.location.href = response.data.url;
                }

            } catch (error) {
                console.log('error', error);

                // You can also access error response details if available
                if (error.response) {
                    console.error('Response error:', error.response.status, error.response.data);
                } else if (error.request) {
                    console.error('No response received:', error.request);
                } else {
                    console.error('Request setup error:', error.message);
                }
            } finally {
                setLoaders(false)
            }
        }else{
            toast.error('Plz enter all the fields..')
        }
       
    }
    const indexFunc = (i) => {
        if (index == i) {
            setIndex(null)
        } else {
            setIndex(i)
        }
    }

    const [forminputData,setformInputdata] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        companyName:'',
        country:'',
        companySize:'',
        mode:'',
        date:'',
        addressLine1:'',
        addressLine2:'',
        city:'',
        state:'',
        zipCode:''
    })
    const onChange = (e) =>{
        const {name,value} = e.target;
        setformInputdata({
            ...forminputData,
            [name]:value
        })
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
                                {experienceDropdown ? <i class="fa-solid fa-angle-down"></i> : <i class="fa-solid fa-angle-up"></i>}
                            </div>
                        </div>
                        {experienceDropdown && <div className='select_experience_card_wrapper' style={{
                            position:'relative'
                        }}>
                            <img onClick={(() => {
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
                                position: 'absolute',
                                zIndex: 9,
                                top: '100px',
                                right: '-20px',
                                width: '60px',
                                cursor: 'pointer'
                            }} />
                            <Slider ref={sliderRef} {...settings}>
                                {[img, img1, img, img1, img].map((e, i) => (
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
                                <input name='firstName' value={forminputData.firstName} onChange={onChange} placeholder='Enter your first name' />
                            </div>

                            <div className='account_input_form'>
                                <label>Last Name <span>*</span></label>
                                <input name='lastName' value={forminputData.lastName} onChange={onChange} placeholder='Enter your last name' />
                            </div>

                            <div className='account_input_form'>
                                <label>Email <span>*</span></label>
                                <input onChange={onChange} name='email' value={forminputData.email} placeholder='Enter your email' />
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
                                    onChange={onChange}
                                    name='phone'
                                    value={forminputData.phone}
                                        type="tel"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                            </div>

                            <div className='account_input_form' style={{
                                gridColumn: '1/-1'
                            }}>
                                <label>Company Name <span>*</span></label>
                                <input name='companyName' value={forminputData.companyName} 
                                onChange={onChange}
                                 placeholder='Enter your first name' />
                            </div>

                            <div className='account_input_form'>
                                <label>Country <span>*</span></label>
                                {/* <select className='select_input_form'>
                                    <option>--select-country--</option>
                                    <option>India</option>
                                </select> */}
                                <input onChange={onChange} name='country' value={forminputData.country} placeholder='Enter country'/>
                            </div>

                            <div className='account_input_form'>
                                <label>Company size <span>*</span></label>
                                <select name='companySize' onChange={onChange} value={forminputData.companySize} className='select_input_form'>
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
                                <select name='mode' onChange={onChange} value={forminputData.mode} className='select_input_form'>
                                    <option>--select-mode--</option>
                                    <option>Virtual</option>
                                    <option>In-person</option>
                                    <option>Hybrid</option>
                                </select>
                            </div>

                            <div className='account_input_form'>
                                <label>Preferred date <span>*</span></label>
                                <input onChange={onChange} value={forminputData.date}
                                name='date' type='date' />
                            </div>

                            <div className='account_input_form'>
                                <label>Address Line 1 <span>*</span></label>
                                <input onChange={onChange} name='addressLine1' value={forminputData.addressLine1} type='text' placeholder='Enter addresss line 1...' />
                            </div>

                            <div className='account_input_form'>
                                <label>Address Line 2 <span>*</span></label>
                                <input name='addressLine2' onChange={onChange} value={forminputData.addressLine2} type='text' placeholder='Enter addresss line 2...' />
                            </div>

                            <div className='account_gird_wrapper'>
                                <div className='account_input_form'>
                                    <label>City <span>*</span></label>
                                    {/* <select className='select_input_form'>
                                        <option>--select-city--</option>
                                        <option>Kolkata</option>
                                    </select> */}
                                    <input onChange={onChange} value={forminputData.city} 
                                        name='city' placeholder='Enter city' />

                                </div>

                                <div className='account_input_form'>
                                    <label>State <span>*</span></label>
                                    {/* <select className='select_input_form'>
                                        <option>--select-state--</option>
                                        <option>West Bengal</option>
                                    </select> */}
                                    <input onChange={onChange} name='state' value={forminputData.state} placeholder='Enter state' />
                                </div>

                                <div className='account_input_form'>
                                    <label>Zip code <span>*</span></label>
                                    <input onChange={onChange} 
                                        value={forminputData.zipCode} name='zipCode' type='text' placeholder='Enter zip code' />
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
                            }}>Plan Price <span>{currentData?.price}</span></p>
                            <p>Discount <span>-$0.00</span></p>

                            <h3 style={{
                                marginTop: '15px'
                            }}>Add-ons</h3>

                            <p style={{
                                marginBottom: '10px'
                            }}>Pack: top 3 deluxe<span>$699 <small>Remove</small></span></p>
                            <p>Prize pack: 100 digital prize <span>$1,599 <small>Remove</small></span></p>
                        </div>

                        <h1 className='total_number'>Total <span>${currentData?.total}.00</span></h1>
                    </div>

                    <button disabled={loaders} onClick={(() => paymentRequest())} className='proceed_btn'>{loaders ? 'Proceeding....' : 'Proceed to pay'}<img src={icon2} /></button>
                </div>
            </div>
        </>
    )
}

export default CheckoutRythm
