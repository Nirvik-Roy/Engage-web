import React from 'react'
import img from '../../../assets/Rectangle 6667 (5).png'
const Buildonce = () => {
    return (
        <>
            <div className='help_new_hires_wrapper' style={{
                padding:'30px 0'
            }}>
                <div className='container  help_new_hires_content_wrapper' >
                    <div className='help_new_hires_content'>
                        <h1 className='heading' style={{
                            lineHeight:'3.5rem'
                        }}> Build it once. Use it every time.</h1>
                        <p style={{
                            marginTop:'5px'
                        }}>Once Launchpad is built, it becomes your standard onboarding experience — ready for every new hire, intern, or graduate programme.
                            <pre />
                            No repeated sessions. No inconsistent messaging.
                        </p>

                    </div>
                    <div className='help_new_hires_img build_it_once_img'>
                        <img src={img} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Buildonce
