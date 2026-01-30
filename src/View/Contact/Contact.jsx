import React from 'react'
import './Contact.css'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import buttonIcon from '../../assets/svg159.svg'
import img from '../../assets/b7fc6a43317d91ab7ecca081234f00dec40cc88f.jpg'
import phone from '../../assets/Layer_1 (9).svg'
import email from '../../assets/Capa_1 (4).svg'
import location from '../../assets/Frame (1).svg'
const Contact = () => {
    return (
        <>
            <BannerLayout title={'Contact Us'} />
            <div className='contact_wrapper'>
                <div className='container contact_content_wrapper'>
                    <div className='contact_form_left'>
                        <h1 className='heading'>Connect with Us</h1>
                        <p>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
                        <form className='contact_form'>
                            <div className='input_div'>
                                <label>Name <span>*</span></label>
                                <input placeholder='Enter your name' type='text' />
                            </div>

                            <div className='input_div_grid_wrapper'>
                                <div className='input_div'>
                                    <label>Email <span>*</span></label>
                                    <input placeholder='Enter your email' type='text' />
                                </div>
                                <div className='input_div'>
                                    <label>Phone Number <span>*</span></label>
                                    <input placeholder='Enter your phone number' type='text' />
                                </div>
                            </div>

                            <div className='input_div'>
                                <label>Message <span>*</span></label>
                                <textarea placeholder='Type your message' type='text' />
                            </div>
                            <button className='base_btn_design'>Send <img src={buttonIcon} /></button>
                        </form>
                    </div>

                    <div className='contact_right'>
                        <img className='contact_img' src={img} />
                        <div className='contact_right_grid'>
                            <div className='contact__box'>
                                <img src={phone} />
                                <h4>Phone</h4>
                                <p>8762767188</p>
                            </div>

                            <div className='contact__box'>
                                <img src={email} />
                                <h4>Email</h4>
                                <p>admin@timcorporation.net</p>
                            </div>

                            <div className='contact__box'>
                                <img src={location} />
                                <h4>Address</h4>
                                <p>5 Old Church Rd. Kingston 8, Kingston Jamaica</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
