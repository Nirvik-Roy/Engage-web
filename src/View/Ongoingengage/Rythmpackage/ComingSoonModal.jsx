import React from 'react'
import icon from '../../../assets/svg159.svg'
const ComingSoonModal = ({ setcomingSoonModal }) => {
    return (
        <>
            <div className='coming_soon_modal_wrapper' onClick={(() => setcomingSoonModal(false))}></div>
            <div className='coming_soon_modal_div'>
                <h2>Join the waitlist</h2>
                <form className='join_waitList_form_wrapper'>
                    <div className='input_div'>
                        <label>First Name <span>*</span></label>
                        <input placeholder='Enter first name' />
                    </div>
                    <div className='input_div'>
                        <label>Last Name <span>*</span></label>
                        <input placeholder='Enter last name' />
                    </div>
                    <div className='input_div'>
                        <label>Email <span>*</span></label>
                        <input placeholder='Enter email' />
                    </div>

                    <div className='input_div'>
                        <label>Phone</label>
                        <input placeholder='Enter phone number' />
                    </div>

                    <button className='base_btn_design' style={{
                        border: '1px solid ',
                        padding: '8px 10px',
                        background: 'transparent',
                        width: '130px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginLeft: 'auto',
                    }}>Submit <img src={icon} /></button>
                </form>
                <button onClick={(() => setcomingSoonModal(false))} type="button" class="modal-close" >×</button>
            </div>
        </>
    )
}

export default ComingSoonModal
