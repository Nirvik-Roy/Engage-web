import React, { useEffect, useRef, useState } from 'react'
import './Checkout.css'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import icon from '../../assets/svg159 (3).svg'
import icon2 from '../../assets/svg159 (4).svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import countryData from '../../../countries.json'
import Slider from "react-slick";
import axios from 'axios'
import { Navigate, useLocation, useSearchParams } from 'react-router-dom'
import arrowRight from '../../assets/oui_arrow-up.svg'
import arrowLeft from '../../assets/oui_arrow-up (1).svg'
import toast from 'react-hot-toast';
import { experienceData } from '../Engageexperience/ExpereienceData'
import { PostContact } from '../utils/contact'
import { EngageRythmCardData } from '../Engageexperience/EngageRythmCardData'

const Checkout = () => {
    const [src, setSrc] = useState('');
    const [dropdown, setdropdown] = useState(false);
    const [selectedExperience, setselectedExperience] = useState([])
    const [priceOfAddons, setPriceOfAddons] = useState(0)
    const [currentData, setCurrentData] = useState({});
    const [experienceDropdown, setexperienceDropdown] = useState(true);
    const [addonDropdown, setaddonDropdown] = useState(true);
    const [accountDetailsDropdown, setaccountDetailsDropdown] = useState(true);
    const sliderRef = useRef()
    const [searchParams, setSearchParams] = useSearchParams();
    const [addOnsFeatures, setaddOnfeatures] = useState([])
    const category = searchParams.get('category');
    const subcategory = searchParams.get('subcategory').trim();
    const price = searchParams.get('price');
    const experience = searchParams.get('experience');
    const totalprice = searchParams.get('totalprice')
    // var settings = {
    //     dots: false,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 1000,
    //     centerPadding: "30px",
    //     responsive: [
    //         {
    //             breakpoint: 1199,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 850,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 1,
    //                 centerPadding: "20px",
    //             }
    //         },
    //     ]
    // };

    const addOnData = [
        {
            title: 'NGAGE Rhythm',
            addOns: [
                {
                    title: 'Grand Prizes',
                    list: [
                        {
                            title: 'Top 10',
                            price: '299',
                            onlyPrice: 299
                        },
                        {
                            title: 'Prize pack: top 3 pro',
                            price: '399',
                            onlyPrice: 399
                        },
                        {
                            title: 'Pack: top 3 deluxe',
                            price: '699',
                            onlyPrice: 699

                        }
                    ]
                },
                {
                    title: 'Prize pack',
                    list: [
                        {
                            title: 'Prize pack: 25 digital prize',
                            price: '499',
                            onlyPrice: 499

                        },
                        {
                            title: 'Prize pack: 50 digital prize',
                            price: '999',
                            onlyPrice: 999

                        },
                        {
                            title: 'Prize pack: 100 digital prize',
                            price: '1599',
                            onlyPrice: 1599

                        }
                    ]
                },
                {
                    title: 'Other',
                    list: [
                        {
                            title: 'Extra players',
                            price: ' 2.50 each',
                            onlyPrice: 2.50
                        }

                    ]
                }
            ],
        },

        {
            title: 'NGAGE Launchpad',
            addOns: [
                {
                    title: 'Grand Prizes',
                    list: [
                        {
                            title: 'Prizes 50',
                            price: '',
                            onlyPrice: 999
                        },
                        {
                            title: 'Prize 100',
                            price: '',
                            onlyPrice: 1599
                        },
                        {
                            title: 'AI characters',
                            price: '',
                            onlyPrice: 199
                        }
                    ]
                },
                {
                    title: 'Prize pack',
                    list: [
                        {
                            title: 'Video modules',
                            price: '',
                            onlyPrice: 99
                        },
                        {
                            title: 'Extra level',
                            price: '',
                            onlyPrice: 99
                        }
                    ]
                },
            ],
        },
        {
            title: 'NGAGE Playday',
            addOns: [
                {
                    title: 'Grand Prizes',
                    list: [
                        {
                            title: '50 trophies A',
                            price: '',
                            onlyPrice: 799
                        },
                        {
                            title: '100 trophies B',
                            price: '',
                            onlyPrice: 1499
                        },
                        {
                            title: 'AI characters',
                            price: '',
                            onlyPrice: 199
                        }
                    ]
                },
                {
                    title: 'Prize pack',
                    list: [
                        {
                            title: '50 treasure hunt prizes',
                            price: '',
                            onlyPrice: 799
                        },
                        {
                            title: 'Additional facilitators',
                            price: '',
                            onlyPrice: 99
                        }
                    ]
                },
            ],
        },
    ]
    console.log(selectedExperience)

    useEffect(() => {
        setCurrentData(...addOnData.filter((e) => e.title == category))
    }, [])

    useEffect(() => {
        if (category == 'NGAGE Rhythm') {
            setselectedExperience(EngageRythmCardData.filter((e) => e.subTitle == experience))

        } else {

            setselectedExperience(experienceData.filter((e) => e.title == experience))
        }
    }, [])


    const [loaders, setLoaders] = useState(false);
    const [index, setIndex] = useState(null)
    // const jamaicaCurrencyValue = 120
    const result = (Number(totalprice.trim()) * 161) + 0;
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
            forminputData.addressLine1 !== '' &&
            forminputData.addressLine2 !== '' &&
            forminputData.city !== '' &&
            forminputData.state !== '' &&
            forminputData.zipCode !== ''
        ) {
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
        } else {
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

    const [forminputData, setformInputdata] = useState({
        name: '',
        lastName: '',
        email: '',
        phonenumber: '',
        companyName: '',
        country: '',
        companySize: '',
        mode: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        zipCode: ''
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setformInputdata({
            ...forminputData,
            [name]: value
        })
    }

    const deleteFunc = (id) => {
        console.log(id);
        const dummydata = [...addOnsFeatures];
        const filterData = dummydata.filter((e) => e.id != id)
        console.log(filterData)
        setaddOnfeatures(filterData)
    }

    const totalCalculatedPriceofAddOns = () => {
        return addOnsFeatures.reduce((total, cur) => total + cur.price, 0);
    };

    useEffect(() => {
        setPriceOfAddons(Number(Math.floor(totalCalculatedPriceofAddOns())))
    }, [addOnsFeatures])

    console.log(selectedExperience)
    const subMitEnqury = async () => {
        setLoaders(true)
        if (
            forminputData.name !== '' &&
            forminputData.lastName !== '' &&
            forminputData.email !== '' &&
            forminputData.phone !== '' &&
            forminputData.companyName !== '' &&
            forminputData.country !== '' &&
            forminputData.companySize !== '' &&          
            forminputData.addressLine1 !== '' &&
            forminputData.addressLine2 !== '' &&
            forminputData.city !== '' &&
            forminputData.state !== '' &&
            forminputData.zipCode !== ''
        ) {
            try {
                const res = await PostContact({
                    name: forminputData.name,
                    email: forminputData.email,
                    phonenumber: forminputData.phonenumber,
                    message: `Select Solution:${category}, Sub- category:${subcategory}, Select Experience:${experience} , Select Addons: ${addOnsFeatures.map((e) => e.title)}, Starting Price (with addons): ${Number(Math.floor(totalCalculatedPriceofAddOns())) + Number(totalprice)}`
                })
                console.log(res)
            } catch (err) {
                console.log(err)
            } finally {
                setLoaders(false)
            }
        } else {
            toast.error('Plz enter all fields');
            setLoaders(false)
        }
    }
    return (
        <>
            <BannerLayout title={'Checkout'} />
            <div className='checkout_wrapper container'>
                <div className='checkout_content_wrapper'>
                    <div className='select_experience_wrapper'>
                        <div className='select_experience_head'>
                            <h1>Selected Experience</h1>
                            <div className='arrow_circle' onClick={(() => setexperienceDropdown(!experienceDropdown))}>
                                {experienceDropdown ? <i class="fa-solid fa-angle-down"></i> : <i class="fa-solid fa-angle-up"></i>}
                            </div>
                        </div>
                        {experienceDropdown && <div className=' select_experience_card_wrapper' style={{
                            position: 'relative'
                        }}>
                            <img onClick={(() => {
                                sliderRef.current.slickNext();
                            })} src={arrowLeft} style={{
                                position: 'absolute',
                                zIndex: 9,
                                top: '100px',
                                left: '-20px',
                                width: '60px',
                                cursor: 'pointer',
                                display: 'none'
                            }} />
                            <img onClick={(() => {
                                sliderRef.current.slickPrev();
                            })} src={arrowRight} style={{
                                position: 'absolute',
                                zIndex: 9,
                                top: '100px',
                                right: '-20px',
                                width: '60px',
                                cursor: 'pointer',
                                display: 'none'
                            }} />

                            {selectedExperience.map((e, i) => (
                                <div onClick={(() => indexFunc(i))} className={'select_experience_card_selected select_experience_full_width'}>
                                    <div className='select_experience_new_layout'>
                                        <div className='select_experience_img'>
                                            <img src={e.img} />
                                        </div>
                                        <div className='selected_head'>
                                            {<div className='select_content_head' style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}>
                                                <h4>{category == 'NGAGE Rythm' ? e.subTitle : e.title}</h4>

                                                <span style={{
                                                    fontSize: '0.9rem',
                                                    fontWeight: '700',
                                                    color: 'rgba(31, 144, 31, 1)',
                                                }}>Selected</span>
                                            </div>
                                            }
                                            <p>  {e?.description?.length > 150
                                                ? e.description.slice(0, 150) + '...'
                                                : e.description}</p>


                                            <p>  {e?.experience?.length > 150
                                                ? e.experience.slice(0, 150) + '...'
                                                : e.experience}</p>
                                        </div>

                                    </div>


                                </div>
                            ))}
                        </div>}

                        {subcategory == 'Sustain Rhythm' && <small style={{
                            color: '#000379',
                            fontWeight: '600',
                            fontSize: '1rem'
                        }}>Note - You can have unlimited experiences with this package</small>}
                        {subcategory == 'Boost Rhythm'  && <small style={{
                            color: '#000379',
                            fontWeight: '600',
                            fontSize: '1rem'
                        }}>Note - 3 more experiences will be part of this package</small>}

                        {subcategory == 'Build Rhythm' && <small style={{
                            color: '#000379',
                            fontWeight: '600',
                            fontSize: '1rem'
                        }}>Note - 11 more experiences will be part of this package</small>}
                    </div>

                    <div className='select_add_on_wrapper'>
                        <div className='select_experience_head'>
                            <h1>Select Add-on</h1>
                            <div className='arrow_circle' onClick={(() => setaddonDropdown(!addonDropdown))}>
                                {addonDropdown ? <i class="fa-solid fa-angle-down"></i> : <i class="fa-solid fa-angle-up"></i>}
                            </div>
                        </div>

                        {addonDropdown && <div className='select_add_on_content_wrapper'>
                            {currentData?.addOns?.map((element) => (
                                <div className='add_ons_wrapper' >
                                    <h3>{element.title}</h3>
                                    <ul>
                                        {element?.list?.map((e) => (
                                            <li><input onChange={(() => {
                                                setaddOnfeatures([...addOnsFeatures, {
                                                    id: Date.now(),
                                                    title: e.title,
                                                    price: e.onlyPrice
                                                }])
                                            })} type='radio' checked={addOnsFeatures.some(item => item.title === e.title)} />{e.title} {e?.price && `-$ ${e.price}`}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}

                        </div>}
                    </div>
                    {category != 'NGAGE Rythm' && <div className='account_input_form'>
                        <label>Special Message</label>
                        <textarea name='specialMessage' placeholder='Enter message' ></textarea>
                    </div>}
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
                                <input name='name' value={forminputData.name} onChange={onChange} placeholder='Enter your first name' />
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
                                        name='phonenumber'
                                        value={forminputData.phonenumber}
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
                                <input onChange={onChange} name='country' value={forminputData.country} placeholder='Enter country' />
                            </div>

                            <div className='account_input_form'>
                                <label>Company size <span>*</span></label>
                                <select name='companySize' onChange={onChange} value={forminputData.companySize} className='select_input_form'>
                                    <option>--select-company-size--</option>
                                    <option>1-50</option>
                                    <option>51-200</option>
                                    <option>201-500</option>
                                    <option>500+</option>
                                    <option>1000+</option>
                                    <option>2000+</option>
                                </select>
                            </div>

                            <h3 style={{
                                gridColumn: '1/-1'
                            }}>Address</h3>

                            {/* <div className='account_input_form'>
                                <label>Mode <span>*</span></label>
                                <select name='mode' onChange={onChange} value={forminputData.mode} className='select_input_form'>
                                    <option>--select-mode--</option>
                                    <option>Virtual</option>
                                    <option>In-person</option>
                                    <option>Hybrid</option>
                                </select>
                            </div> */}

                            <div className='account_input_form'>
                                <label>Event start date <span>*</span></label>
                                <input onChange={onChange} value={forminputData.date}
                                    name='date' type='date' />
                            </div>

                            <div className='account_input_form'>
                                <label>Address Line 1</label>
                                <input onChange={onChange} name='addressLine1' value={forminputData.addressLine1} type='text' placeholder='Enter addresss line 1...' />
                            </div>

                            <div className='account_input_form'>
                                <label>Address Line 2 </label>
                                <input name='addressLine2' onChange={onChange} value={forminputData.addressLine2} type='text' placeholder='Enter addresss line 2...' />
                            </div>

                            <div className='account_input_form'>
                                <label>Landmark</label>
                                <input name='landmark' onChange={onChange} type='text' placeholder='Enter landmark' />
                            </div>

                            <div className='account_gird_wrapper'>
                                <div className='account_input_form'>
                                    <label>City</label>
                                    {/* <select className='select_input_form'>
                                        <option>--select-city--</option>
                                        <option>Kolkata</option>
                                    </select> */}
                                    <input onChange={onChange} value={forminputData.city}
                                        name='city' placeholder='Enter city' />

                                </div>

                                <div className='account_input_form'>
                                    <label>State</label>
                                    {/* <select className='select_input_form'>
                                        <option>--select-state--</option>
                                        <option>West Bengal</option>
                                    </select> */}
                                    <input onChange={onChange} name='state' value={forminputData.state} placeholder='Enter state' />
                                </div>

                                <div className='account_input_form'>
                                    <label>Zip code</label>
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
                                <h5>{subcategory && subcategory} </h5>
                                <h6>{category && category}</h6>
                            </div>
                            <div className='order_head_left' style={{
                                rowGap: '0'
                            }}>
                                {category != 'NGAGE Rhythm' && <p>Starting from</p>}
                                <h3>${price && price}.00</h3>
                            </div>
                        </div>

                        {/* {coupon && <div className='order_coupon_wrapper'>
                            <div className='order_coupon_head'>
                                <h5>Coupon</h5>
                                <p>Add Coupon</p>
                            </div>

                            <div className='coupon_input_wrapper'>
                                <input placeholder='Add coupon code' />
                                <p>Apply <img src={icon} /></p>
                            </div>
                            <h3>NGAGE 90 <span>Applied</span></h3>
                        </div>} */}

                        {category === 'NGAGE Launchpad' && <small style={{
                            marginLeft: '5px'
                        }}><span style={{
                            fontWeight: '700',

                        }}>Note:</span> Final pricing is customized based on your requirements. You’ll receive a detailed quote after discussion.</small>}


                        {category == 'NGAGE Playday' && <div className='payment_summary_wrapper' style={{
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
                                {subcategory.startsWith('Half') ? <p>Half Day</p> : subcategory.startsWith('90') ? <p>90 Min</p> : <p>Full-day</p>}

                            </div>

                        </div>}

                        {(category != 'NGAGE Rhythm' && addOnsFeatures?.length > 0) && <div className='payment_summary_wrapper' style={{
                            border: 'none',
                            marginTop: '-50px'
                        }}>
                            <h3 style={{
                                marginTop: '15px',
                                paddingBottom: '5px',
                                marginBottom: '10px'
                            }}>Add-ons</h3>

                            {addOnsFeatures?.map((e) => (
                                <p style={{
                                    marginBottom: '10px'
                                }}>{e?.title}<span>${e?.price} <small onClick={(() => deleteFunc(e.id))}>Remove</small></span></p>
                            ))}
                        </div>}
                        {category == 'NGAGE Rhythm' && <div className='payment_summary_wrapper'>
                            <h3>Payment Summary</h3>
                            <p style={{
                                marginBottom: '10px'
                            }}>Plan Price <span>${price && price}.00 {subcategory == 'Boost Rhythm' ?  '*4' : subcategory == 'Build Rhythm' ?
                                    '*12' : subcategory == 'Sustain Rhythm' ? '*12' : ""}</span></p>
                            {/* <p>Discount <span>-$0.00</span></p> */}

                            {addOnsFeatures?.length > 0 && <>
                                <h3 style={{
                                    marginTop: '15px'
                                }}>Add-ons</h3>
                                {addOnsFeatures?.map((e) => (
                                    <p style={{
                                        marginBottom: '10px'
                                    }}>{e?.title}<span>${e?.price} <small onClick={(() => deleteFunc(e.id))}>Remove</small></span></p>
                                ))}
                            </>}
                        </div>}

                        {category == 'NGAGE Rhythm' && <h1 className='total_number'>Total <span>${totalprice && Number(totalprice) + priceOfAddons}.00</span></h1>}
                    </div>

                    {category == 'NGAGE Rhythm' && <button disabled={loaders} onClick={(() => paymentRequest())} className='proceed_btn'>{loaders ? 'Proceeding....' : 'Proceed to pay'}<img src={icon2} /></button>}

                    {category != 'NGAGE Rhythm' && <button onClick={(() => subMitEnqury())} className='proceed_btn'>

                        {loaders ? "Submitting.." : 'Submit Enquiry'} <img src={icon2} /></button>}
                </div>
            </div>
        </>
    )
}

export default Checkout
