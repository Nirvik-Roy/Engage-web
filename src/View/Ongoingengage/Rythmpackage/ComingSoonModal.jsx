import React, { useState } from 'react'
import icon from '../../../assets/svg159.svg'
import toast from 'react-hot-toast'
const ComingSoonModal = ({ setcomingSoonModal }) => {
    const [loading, setloading] = useState(false)
    const [formData, setformData] = useState({
        email: '',
        first_name: "",
        last_name: "",
        phone: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        })
    }
    const handleSubmit = async () => {
        if (formData?.email != "" && formData?.first_name != "" && formData?.last_name != "" && formData?.address != "") {

            setloading(true);
            const res = await fetch('https://joz8jiulr0.execute-api.ap-south-1.amazonaws.com/dev/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData?.email,
                    mode: 'details',
                    first_name: formData?.first_name,
                    last_name: formData?.last_name,
                    address: 'dummy address',
                    phone: formData?.phone || ""
                })
            });
            const data = await res.json();
            if (res?.status == 201) {
                setcomingSoonModal(false)
                setloading(false)
                toast.success(data?.message && data?.message)
            }
            if (res?.status == 409) {
                setloading(false)
                toast.error(data?.error && data?.error)
            }
            console.log(res)

        } else {
            toast.error('Plz enter the fileds...')
        }

    }
    return (
        <>
            <div className='coming_soon_modal_wrapper' onClick={(() => setcomingSoonModal(false))}></div>
            <div className='coming_soon_modal_div'>
                <h2>Join the waitlist</h2>
                <form className='join_waitList_form_wrapper'>
                    <div className='input_div'>
                        <label>First Name <span>*</span></label>
                        <input name='first_name' value={setformData.first_name} onChange={handleChange} placeholder='Enter first name' />
                    </div>
                    <div className='input_div'>
                        <label>Last Name <span>*</span></label>
                        <input name='last_name' value={setformData.last_name} onChange={handleChange} placeholder='Enter last name' />
                    </div>
                    <div className='input_div'>
                        <label>Email <span>*</span></label>
                        <input name='email' value={setformData.email} onChange={handleChange} placeholder='Enter email' />
                    </div>

                    <div className='input_div'>
                        <label>Phone</label>
                        <input name='phone' value={setformData.phone} onChange={handleChange} placeholder='Enter phone number' />
                    </div>
                    

                    <button disabled={loading} onClick={((e) => {
                        e.preventDefault();
                        handleSubmit()
                    })} className='base_btn_design' style={{
                        border: '1px solid ',
                        padding: '8px 10px',
                        background: 'transparent',
                        width: '130px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginLeft: 'auto',
                    }}>{loading ? 'Submiting...' : 'Submit'} <img src={icon} /></button>
                </form>
                <button onClick={(() => setcomingSoonModal(false))} type="button" class="modal-close" >×</button>
            </div>
        </>
    )
}

export default ComingSoonModal
