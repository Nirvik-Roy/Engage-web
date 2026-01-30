import React from 'react'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import '../RefundPolicy/RefundPolicy.css'
const PrivacyPolicy = () => {
    return (
        <>
            <BannerLayout title={'Privacy Policy'} />
            <div className='policy_wrapper'>
                <div className='container policy_content_Wrapper'>
                    <h3 style={{
                        marginBottom: '10px'
                    }}>Last Updated: July 15, 2025
                    </h3>
                    <p>Welcome to The Ngage Event Gamification Platform! At Ngage, we are committed to ensuring
                        the privacy and security of your personal information. This Privacy Notice outlines our
                        practices regarding the collection, use, and disclosure of your information when you use our
                        gamification platform. By accessing and using Ngage, you agree to the terms outlined in this
                        Privacy Notice.</p>
                    <h3 style={{
                        marginTop: '10px'
                    }}>1 Information We Collect:</h3>
                    <h4 style={{
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}>1.1 Personal Information:</h4>
                    <p>When you register on Ngage, we may collect information required for our patrons to fully
                        enjoy their experience. The type of information collected may vary depending on the specific
                        event and at the request of our customer (event organizers). The information collected during
                        registration is as follows:
                        <br />
                        i. Name
                        <br />
                        ii. Email
                        <br />
                        iii. Telephone
                        <br />
                        iv. Company
                        <br />
                        v. Department
                        <br />
                        vi. Division
                        <br />
                        vii. School
                        <br />
                        viii. Gender
                        <br />
                        ix. Age
                    </p>

                    <p><strong>Note:</strong> We do not collect or process sensitive personal data such as ethnicity, political
                        associations, religion, or sexual orientation.</p>

                    <h4 style={{
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}>1.2 Usage Information:
                    </h4>
                    <p>We collect information about your interactions with the platform, including the games you
                        play, achievements unlocked, and other engagement metrics that are either derived or
                        explicitly as an input from the user.</p>

                    <h4 style={{
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}>1.3 Device Information:
                    </h4>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
