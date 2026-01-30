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
                    <p>We may collect information about the device you use to access Ngage, including device type,
                        operating system, and browser details and other technical information.</p>

                    <h4 style={{
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}>1.4 Marketing and Communication Preferences
                    </h4>
                    <p>If you consent, we may collect your preferences regarding receiving marketing materials,
                        promotional invitations, or updates about our platform.</p>

                    <h3 style={{
                        marginTop: '10px'
                    }}>2 How We Use Your Information:</h3>
                    <h4 style={{
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}>2.1 Providing Services:
                    </h4>
                    <p>We use your information collected for the following purposes:
                    </p>
                    <h4 style={{
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}>2.2 Communication:
                    </h4>
                    <p>To contact you during or after the event for purposes such as:<br />
                        • Notifying you of prizes won during gameplay.
                        <br />
                        • Sending invitations to participate in related platforms, services, or events (with your
                        consent).
                    </p>
                    <h4 style={{
                        marginTop: '10px',
                        marginBottom: '10px'
                    }}>2.3 Marketing
                    </h4>
                    <p>With your explicit consent, we may use your information to send promotional materials, event
                        updates, or marketing campaigns related to Ngage and its services. You can opt out at any
                        time (see Section 5.2).</p>

                    <h4>2.4 Analytics:</h4>
                    <p>With your explicit consent, we may use your information to send promotional materials, event
                        updates, or marketing campaigns related to Ngage and its services. You can opt out at any
                        time (see Section 5.2).</p>

                    <h4>2.5 Data Storage and Retention:
                    </h4>
                    <p>We store data on a secured platform for two (2) years post-event to ensure data integrity and
                        availability for analytics, customer request, or service improvement.</p>

                    <h4>2.6 Data Access Requests:
                    </h4>
                    <p>Customers (our clients) can request access to their data at any time within the prescribed
                        retention period.</p>

                    <h4>2.7 Data Deletion:
                    </h4>
                    <p>We delete data once the retention period has been reached. If customers request deletion of
                        their data before the retention period ends, we will comply with the request in accordance
                        with applicable laws and our data retention policies.
                    </p>

                    <h3 style={{
                        marginTop: '10px'
                    }}>3 Information Sharing:
                    </h3>
                    <p>We respect your privacy and ensure transparency about sharing data.
                    </p>

                    <h4>3.1 Third-Party Service Providers:
                    </h4>
                    <p>We may share your information with third-party service providers who assist us in delivering
                        our services, such as hosting, analytics, and customer support.
                    </p>

                    <h4>3.2 Marketing Partners
                    </h4>
                    <p>We do not sell your personal information to third parties. However, we may share
                        aggregated, anonymized data for marketing analysis and strategy development.
                    </p>


                    <h4>3.3 Legal Compliance:
                    </h4>
                    <p>We may disclose your information to comply with legal obligations, enforce our terms of
                        service, or protect the rights, property, and safety of Ngage, its users, or others.
                    </p>

                    
                    <h3 style={{
                        marginTop: '10px'
                    }}>4 Data Security:
                    </h3>
                    <p>We employ industry-standard security measures to safeguard your information from
                        unauthorized access, disclosure, alteration, and destruction. These measures include data
                        encryption, access controls, intrusion prevention, and regular security updates.
                        <br/>
                        <br/>
                        While we strive to protect your information, no system is 100% secure. We encourage users
                        to practice safe account management and report any suspicious activity.
                    </p>

                    <h3 style={{
                        marginTop: '10px'
                    }}>5 Your Rights and Choices:
                    </h3>
                    <h4>5.1 Access, Update, or Delete Your Data
                    </h4>
                    <p>In accordance with the Jamaica Data Protection Act, you have the right to: <br/>
                    </p>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
