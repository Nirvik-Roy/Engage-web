import React from 'react'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import '../RefundPolicy/RefundPolicy.css'
import './TermsConditions.css'
const TermsConditions = () => {
    return (
        <>
            <BannerLayout title={'Terms & Conditions'} />
            <div className='policy_wrapper'>
                <div className='container policy_content_Wrapper'>
                    <div>
                        <div style={{ borderBottom: '2px solid black', paddingBottom: '20px', marginBottom: '30px' }}>
                            <h1 style={{ fontSize: '32px', marginBottom: '10px', fontWeight: 800 }}>NGAGE WORLD</h1>
                            <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '5px' }}>TERMS & CONDITIONS</h2>
                            <p><strong>Effective Date: February 1, 2026</strong></p>
                        </div>

                        <p style={{ marginBottom: '25px' }}><strong>Welcome to Ngage World (“Ngage,” “we,” “us,” or “our”).</strong> These Terms & Conditions govern the purchase and use of all Ngage products and services, including but not limited to:</p>

                        <ul style={{ marginBottom: '25px',
                        display:'flex',
                        flexDirection:'column',
                        marginLeft:'30px' }}>
                            <li>Ngage Rhythm</li>
                            <li>Ngage Launchpad</li>
                            <li>Ngage Play Day</li>
                            <li>Conference Energizer</li>
                            <li>Expo Booth Optimizer</li>
                            <li>Marketing Experiences</li>
                            <li>Corporate Bundles</li>
                            <li>Digital engagement tools and reporting systems</li>
                        </ul>

                        <p style={{ marginBottom: '30px' }}>By purchasing, subscribing to, accessing, or using any Ngage service, you (“Client,” “Customer,” or “User”) agree to be bound by these Terms.</p>

                        <br />

                        {/* SECTION 1 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>1. PAYMENT TERMS</h2>
                        <p><strong>1.1</strong> Subscription services are billed annually unless otherwise agreed in writing.</p>
                        <p><strong>1.2</strong> Any monthly pricing displayed represents annual pricing divided into monthly equivalents for illustration purposes only.</p>
                        <p><strong>1.3</strong> Full payment is required prior to activation unless otherwise specified in a signed agreement.</p>
                        <p><strong>1.4</strong> All invoices are payable in the currency specified and within the time stated on the invoice.</p>
                        <p><strong>1.5</strong> Late payments may result in suspension of services.</p>
                        <p><strong>1.6</strong> All payments are non-refundable except as explicitly stated in these Terms.</p>

                        <br />

                        {/* SECTION 2 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>2. SUBSCRIPTION COMMITMENT (Ngage Rhythm & Annual Services)</h2>
                        <p><strong>2.1</strong> All annual subscriptions constitute a 12-month contractual commitment.</p>
                        <p><strong>2.2</strong> Subscriptions are non-refundable once activated.</p>
                        <p><strong>2.3</strong> Early termination by the Client does not entitle the Client to a refund of unused months.</p>
                        <p><strong>2.4</strong> Subscriptions automatically renew unless cancelled in writing at least 30 days prior to renewal.</p>
                        <p><strong>2.5</strong> Ngage reserves the right to adjust pricing at renewal with prior notice.</p>

                        <br />

                        {/* SECTION 3 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>3. ONE-TIME EXPERIENCES (Spark / Pulse Rhythm / Event-Based Services)</h2>
                        <p><strong>3.1</strong> One-time experiences are non-refundable once launched.</p>
                        <p><strong>3.2</strong> A booking is confirmed only upon receipt of required deposit.</p>
                        <p><strong>3.3</strong> Failure to provide required content or approvals by agreed deadlines does not entitle Client to a refund.</p>

                        <br />

                        {/* SECTION 4 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>4. USER LIMITS & OVERAGE</h2>
                        <p><strong>4.1</strong> Each plan includes a defined number of users.</p>
                        <p><strong>4.2</strong> Additional users are billed at the stated “extra user” rate.</p>
                        <p><strong>4.3</strong> User counts may be measured at activation or during reporting periods.</p>
                        <p><strong>4.4</strong> Ngage reserves the right to invoice overage charges where applicable.</p>

                        <br />

                        {/* SECTION 5 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>5. LAUNCHPAD (CUSTOM ONBOARDING EXPERIENCES)</h2>
                        <p><strong>5.1</strong> Launchpad projects require:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>50% deposit prior to development</li>
                            <li>50% balance prior to launch</li>
                        </ul>
                        <p><strong>5.2</strong> Deposits are non-refundable once development has commenced.</p>
                        <p><strong>5.3</strong> Launchpad experiences are licensed for one (1) year unless otherwise specified.</p>
                        <p><strong>5.4</strong> Renewal fees apply after the initial license term.</p>
                        <p><strong>5.5</strong> Custom creative assets produced by Ngage remain subject to intellectual property protections outlined below.</p>

                        <br />

                        {/* SECTION 6 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>6. PLAY DAY & IN-PERSON EVENTS</h2>
                        <p><strong>6.1</strong> To secure an event date:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>50% deposit required at booking</li>
                            <li>Remaining balance due 14 days prior to event</li>
                        </ul>
                        <p><strong>6.2</strong> Cancellation Policy:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>More than 30 days before event: 75% refund of deposit</li>
                            <li>14–30 days before event: 50% refund of deposit</li>
                            <li>Less than 14 days before event: deposit non-refundable</li>
                        </ul>
                        <p><strong>6.3</strong> Rescheduling is subject to availability.</p>
                        <p><strong>6.4</strong> Client is responsible for venue safety, participant conduct, and required permits.</p>

                        <br />

                        {/* SECTION 7 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>7. CLIENT RESPONSIBILITIES</h2>
                        <p><strong>7.1</strong> Client agrees to:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Provide accurate information</li>
                            <li>Ensure participants comply with workplace policies</li>
                            <li>Maintain appropriate supervision at in-person events</li>
                            <li>Provide safe venues for physical activities</li>
                        </ul>
                        <p><strong>7.2</strong> Ngage is not responsible for participant injuries, misconduct, or non-compliance with local regulations.</p>

                        <br />

                        {/* SECTION 8 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>8. NO GUARANTEE OF RESULTS</h2>
                        <p><strong>8.1</strong> Ngage provides engagement tools and experiences designed to improve participation and connection.</p>
                        <p><strong>8.2</strong> However, Ngage does not guarantee specific outcomes, including but not limited to:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Increased morale</li>
                            <li>Improved retention</li>
                            <li>Measurable revenue increases</li>
                            <li>Specific engagement score thresholds</li>
                            <li>Behavioral change outcomes</li>
                        </ul>
                        <p><strong>8.3</strong> Engagement results depend on numerous external factors including company culture, leadership involvement, communication effectiveness, and participant willingness.</p>

                        <br />

                        {/* SECTION 9 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>9. DATA & REPORTING</h2>
                        <p><strong>9.1</strong> Engagement reports are provided for internal business use only.</p>
                        <p><strong>9.2</strong> Ngage does not sell Client data.</p>
                        <p><strong>9.3</strong> Ngage may use anonymized, aggregated data for benchmarking or marketing purposes.</p>
                        <p><strong>9.4</strong> Clients are responsible for ensuring compliance with applicable data protection laws (including employee consent where required).</p>

                        <br />

                        {/* SECTION 10 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>10. INTELLECTUAL PROPERTY</h2>
                        <p><strong>10.1</strong> All Ngage software, systems, methodologies, designs, challenge formats, branding elements, and reporting frameworks remain the exclusive intellectual property of Ngage.</p>
                        <p><strong>10.2</strong> Clients are granted a limited, non-transferable, non-exclusive license to use the services during the active subscription term.</p>
                        <p><strong>10.3</strong> Clients may not copy, reverse engineer, redistribute, or replicate Ngage systems without written consent.</p>

                        <br />

                        {/* SECTION 11 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>11. TECHNOLOGY DISCLAIMER</h2>
                        <p><strong>11.1</strong> Ngage services rely on internet connectivity and participant device compatibility.</p>
                        <p><strong>11.2</strong> Ngage is not responsible for:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Network outages</li>
                            <li>Device incompatibility</li>
                            <li>Third-party platform failures</li>
                            <li>Temporary service interruptions</li>
                        </ul>
                        <p><strong>11.3</strong> Ngage will use commercially reasonable efforts to maintain service availability.</p>

                        <br />

                        {/* SECTION 12 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>12. LIMITATION OF LIABILITY</h2>
                        <p><strong>12.1</strong> To the maximum extent permitted by law, Ngage shall not be liable for:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Indirect damages</li>
                            <li>Incidental damages</li>
                            <li>Consequential damages</li>
                            <li>Loss of profits</li>
                            <li>Loss of business opportunity</li>
                            <li>Reputational damage</li>
                        </ul>
                        <p><strong>12.2</strong> Total liability shall not exceed the amount paid by the Client for the specific service in dispute.</p>

                        <br />

                        {/* SECTION 13 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>13. INDEMNIFICATION</h2>
                        <p>Client agrees to indemnify and hold harmless Ngage from claims arising from:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Participant conduct</li>
                            <li>Workplace disputes</li>
                            <li>Injury during physical activities</li>
                            <li>Misuse of the platform</li>
                            <li>Breach of these Terms</li>
                        </ul>

                        <br />

                        {/* SECTION 14 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>14. FORCE MAJEURE</h2>
                        <p>Ngage shall not be liable for delays or failure to perform due to events beyond reasonable control, including but not limited to:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Natural disasters</li>
                            <li>Government actions</li>
                            <li>Pandemics</li>
                            <li>Internet infrastructure failures</li>
                            <li>Labor disruptions</li>
                        </ul>

                        <br />

                        {/* SECTION 15 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>15. GOVERNING LAW</h2>
                        <p>These Terms shall be governed by the laws of Jamaica unless otherwise agreed in writing.</p>

                        <br />

                        {/* SECTION 16 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>16. MODIFICATIONS</h2>
                        <p>Ngage reserves the right to update these Terms at any time. Updated Terms become effective upon posting on ngageworld.com.</p>

                        <br />

                        {/* SECTION 17 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>17. ENTIRE AGREEMENT</h2>
                        <p>These Terms constitute the entire agreement between Ngage and the Client unless superseded by a signed written contract.</p>

                        <br />

                        {/* SECTION 18 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>18. INTERNATIONAL CLIENTS & CROSS-BORDER SERVICES</h2>
                        <p><strong>18.1</strong> Ngage services may be accessed internationally. Clients outside Jamaica acknowledge that services are delivered from Jamaica unless otherwise agreed in writing.</p>
                        <p><strong>18.2</strong> Clients are responsible for compliance with all local employment, workplace, and data protection regulations applicable in their jurisdiction.</p>
                        <p><strong>18.3</strong> Nothing in these Terms creates a permanent establishment, agency, partnership, or joint venture relationship between Ngage and the Client in any jurisdiction.</p>

                        <br />

                        {/* SECTION 19 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>19. DATA PROTECTION & PRIVACY (ENTERPRISE-LEVEL)</h2>
                        <p><strong>19.1</strong> Ngage acts as a data processor with respect to employee engagement data collected through the platform.</p>
                        <p><strong>19.2</strong> The Client acts as the data controller and is responsible for:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Obtaining required employee consents</li>
                            <li>Providing privacy notices</li>
                            <li>Ensuring lawful basis for processing</li>
                        </ul>
                        <p><strong>19.3</strong> Ngage will implement reasonable administrative, technical, and organizational safeguards to protect data against unauthorized access, disclosure, or destruction.</p>
                        <p><strong>19.4</strong> For enterprise clients subject to GDPR, UK GDPR, CCPA, or similar regulations:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Ngage agrees to process personal data only on documented instructions of the Client.</li>
                            <li>Ngage will not sell personal data.</li>
                            <li>Ngage will notify the Client of any confirmed data breach without undue delay.</li>
                        </ul>
                        <p><strong>19.5</strong> Data retention periods shall be commercially reasonable and may be defined in enterprise agreements.</p>
                        <p><strong>19.6</strong> Clients requiring a Data Processing Addendum (DPA) may request one in writing.</p>

                        <br />

                        {/* SECTION 20 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>20. CONFIDENTIALITY</h2>
                        <p><strong>20.1</strong> Both parties agree to maintain the confidentiality of proprietary information exchanged during the engagement.</p>
                        <p><strong>20.2</strong> Confidential information includes, but is not limited to:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Business strategies</li>
                            <li>Engagement data</li>
                            <li>Platform methodologies</li>
                            <li>Financial terms</li>
                            <li>Technical architecture</li>
                        </ul>
                        <p><strong>20.3</strong> Confidentiality obligations survive termination of services.</p>

                        <br />

                        {/* SECTION 21 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>21. SERVICE LEVELS & ENTERPRISE SUPPORT</h2>
                        <p><strong>21.1</strong> Unless otherwise specified in a signed enterprise agreement, Ngage does not guarantee uninterrupted or error-free operation of services.</p>
                        <p><strong>21.2</strong> Enterprise clients may negotiate:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Custom service level agreements (SLAs)</li>
                            <li>Response time commitments</li>
                            <li>Dedicated account management</li>
                            <li>Custom reporting structures</li>
                        </ul>
                        <p><strong>21.3</strong> Platform updates and feature changes may occur at Ngage’s discretion.</p>

                        <br />

                        {/* SECTION 22 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>22. INTELLECTUAL PROPERTY — ENTERPRISE CLARIFICATION</h2>
                        <p><strong>22.1</strong> All platform logic, game mechanics, challenge structures, engagement scoring models (including Ngage Engagement Score methodology), and reporting systems remain the exclusive property of Ngage.</p>
                        <p><strong>22.2</strong> Enterprise clients may not:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Reverse engineer the platform</li>
                            <li>Replicate challenge formats for external resale</li>
                            <li>Use Ngage intellectual property beyond the licensed term</li>
                        </ul>
                        <p><strong>22.3</strong> Custom-branded content created specifically for the Client may be licensed for internal use only.</p>

                        <br />

                        {/* SECTION 23 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>23. LIMITATION OF LIABILITY — ENTERPRISE CAP</h2>
                        <p><strong>23.1</strong> To the maximum extent permitted by law, Ngage’s total aggregate liability shall not exceed:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>The total fees paid by the Client during the preceding twelve (12) months; or</li>
                            <li>The specific contract value in dispute, whichever is lower.</li>
                        </ul>
                        <p><strong>23.2</strong> Ngage shall not be liable for:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Loss of revenue</li>
                            <li>Loss of goodwill</li>
                            <li>Workplace disputes arising from engagement content</li>
                            <li>Employee dissatisfaction or performance outcomes</li>
                        </ul>
                        <p><strong>23.3</strong> This limitation applies even if Ngage has been advised of potential damages.</p>

                        <br />

                        {/* SECTION 24 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>24. INDEMNIFICATION (EXPANDED)</h2>
                        <p>Client agrees to indemnify and hold Ngage harmless against claims arising from:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Workplace injuries</li>
                            <li>Internal HR disputes</li>
                            <li>Labor complaints</li>
                            <li>Regulatory non-compliance</li>
                            <li>Improper employee data handling</li>
                            <li>Misuse of platform features</li>
                        </ul>

                        <br />

                        {/* SECTION 25 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>25. COMPLIANCE WITH ANTI-BRIBERY & SANCTIONS LAWS</h2>
                        <p><strong>25.1</strong> Both parties agree to comply with all applicable anti-corruption, anti-bribery, and sanctions regulations, including but not limited to:</p>
                        <ul style={{ marginLeft: '30px' }}>
                            <li>Jamaican anti-corruption laws</li>
                            <li>UK Bribery Act (where applicable)</li>
                            <li>U.S. Foreign Corrupt Practices Act (FCPA) (where applicable)</li>
                        </ul>
                        <p><strong>25.2</strong> Ngage reserves the right to terminate services if Client engages in unlawful conduct.</p>

                        <br />

                        {/* SECTION 26 */}
                        <h2 style={{ fontSize: '22px', fontWeight: 700, marginTop: '30px', marginBottom: '15px', borderBottom: '1px solid #ccc', paddingBottom: '5px' }}>26. DISPUTE RESOLUTION</h2>
                        <p><strong>26.1</strong> Parties agree to attempt good-faith negotiation before initiating legal proceedings.</p>
                        <p><strong>26.2</strong> If unresolved, disputes shall be submitted to binding arbitration in Jamaica unless otherwise agreed in writing.</p>
                        <p><strong>26.3</strong> Governing law remains the laws of Jamaica.</p>

                        <br />
                        <br />

                        <div style={{ borderTop: '2px solid black', paddingTop: '20px', marginTop: '30px', fontStyle: 'italic' }}>
                            <p><strong>END OF TERMS & CONDITIONS</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TermsConditions
