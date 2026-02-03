import React, { useState } from 'react'
import './Contact.css'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import buttonIcon from '../../assets/svg159.svg'
import img from '../../assets/b7fc6a43317d91ab7ecca081234f00dec40cc88f.jpg'
import phone from '../../assets/Layer_1 (9).svg'
import email from '../../assets/Capa_1 (4).svg'
import location from '../../assets/Frame (1).svg'
import { PostContact } from '../utils/contact'
import toast from 'react-hot-toast'
const Contact = () => {
    const [formdata,setformData] = useState({
        name:'',
        email:'',
        phonenumber:'',
        message:''
    });
    const [loading,setisLoading] = useState(false)

    const handleChange = (e) =>{
        const {name,value} = e.target;
        setformData({
            ...formdata,
            [name]:value
        })
    }
    const handleSubmit = async () =>{
        const {name,email,phonenumber,message} = formdata;
        if(name == ''){
            toast.error('Name is required')
        }else if(email==''){
            toast.error('Email is requried')
        }else if(phonenumber== ''){
            toast.error('Phone number is required')
        }else if(message== ''){
            toast.error('Message is required')
        }else{
            try {
                setisLoading(true)
                const res = await PostContact(formdata);
                console.log(res)
            } catch (err) {
               console.log(err)
            }finally{
                setisLoading(false)
            }
        }
       
    }
    return (
        <>
            <BannerLayout title={'Contact Us'} />
            <div className='contact_wrapper'>
                <div className='container contact_content_wrapper'>
                    <div className='contact_form_left'>
                        <h1 className='heading'>Connect with us</h1>
                       
                        <form className='contact_form'>
                            <div className='input_div'>
                                <label>Name <span>*</span></label>
                                <input onChange={handleChange} name='name' value={formdata.name} placeholder='Enter your name' type='text' />
                            </div>

                            <div className='input_div_grid_wrapper'>
                                <div className='input_div'>
                                    <label>Email <span>*</span></label>
                                    <input onChange={handleChange} name='email'
                                    value={formdata.email} placeholder='Enter your email' type='text' />
                                </div>
                                <div className='input_div'>
                                    <label>Phone Number <span>*</span></label>
                                    <input onChange={handleChange} name='phonenumber'
                                    value={formdata.phonenumber} placeholder='Enter your phone number' type='text' />
                                </div>
                            </div>

                            <div className='input_div'>
                                <label>Message <span>*</span></label>
                                <textarea onChange={handleChange} name='message' 
                                value={formdata.message} placeholder='Type your message' type='text' />
                            </div>
                            <button onClick={((e)=>{
                                handleSubmit();
                                e.preventDefault()
                            })} className='base_btn_design' disabled={loading}> {loading ? 'Submiting' :'Send'} <img src={buttonIcon} /></button>
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
                                <p>sales@ngageworld.com</p>
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
