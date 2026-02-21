import React from 'react'
import './RefundPolicy.css'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'

const RefundPolicy = () => {
    return (
        <>
            <BannerLayout title={'Refund Policy'} />
            <div className='policy_wrapper'>
                <div className='container policy_content_Wrapper'>
                    <article className="refund-policy">
                        {/* Header */}
                        <h1>Refund & Cancellation Policy</h1>
                        <p>
                            <strong>Last Updated: 20th February 2026</strong>
                        </p>
                        <p>
                            This Refund & Cancellation Policy governs all payments made for
                            memberships, events, programs, and services offered through NGAGEWORLD.
                            By purchasing any paid service, you agree to the terms outlined below.
                        </p>

                        {/* 1. Membership Subscriptions */}
                        <h2>1. Membership Subscriptions</h2>
                        <p>
                            NGAGEWORLD offers various membership tiers that provide access to
                            networking opportunities, business promotion tools, events, and digital
                            resources.
                        </p>

                        <h3>1.1 Cooling-Off Period</h3>
                        <p>
                            Members may request a full refund within <strong>48 hours of initial purchase</strong>,
                            provided:
                        </p>
                        <ul>
                            <li>No networking events have been attended</li>
                            <li>No paid features have been significantly used</li>
                            <li>No business listings or promotional benefits have been activated</li>
                        </ul>

                        <h3>1.2 Monthly &amp; Annual Plans</h3>
                        <ul>
                            <li>
                                Monthly memberships are <strong>non-refundable after 48 hours</strong> from purchase.
                            </li>
                            <li>
                                Annual memberships may be refunded within <strong>7 days of purchase</strong>, less any
                                administrative or processing fees, provided benefits have not been substantially used.
                            </li>
                        </ul>

                        <h3>1.3 Auto-Renewals</h3>
                        <p>
                            All memberships may renew automatically (if applicable).
                        </p>
                        <ul>
                            <li>
                                Cancellation must be completed <strong>at least 48 hours before the renewal date</strong>.
                            </li>
                            <li>
                                Renewed memberships are non-refundable once processed.
                            </li>
                        </ul>
                        <p>Members may cancel anytime to prevent future billing.</p>

                        {/* 2. Networking Events */}
                        <h2>2. Networking Events (Online &amp; In-Person)</h2>
                        <p>
                            NGAGEWORLD hosts business networking events, summits, workshops, and meetups.
                        </p>

                        <h3>2.1 Standard Event Cancellation Policy</h3>
                        <ul>
                            <li>
                                <strong>7+ days before event</strong>: 100% refund
                            </li>
                            <li>
                                <strong>3–6 days before event</strong>: 50% refund
                            </li>
                            <li>
                                <strong>Less than 72 hours before event</strong>: No refund
                            </li>
                        </ul>

                        <h3>2.2 Ticket Transfers</h3>
                        <p>If you cannot attend, you may:</p>
                        <ul>
                            <li>Transfer your ticket to another person</li>
                            <li>Request credit toward a future event (valid for 90 days)</li>
                        </ul>

                        <h3>2.3 Event Cancellation by NGAGEWORLD</h3>
                        <p>If an event is cancelled or rescheduled by us:</p>
                        <ul>
                            <li>You may choose a full refund, or</li>
                            <li>Transfer to the rescheduled date/event</li>
                        </ul>
                        <p>
                            NGAGEWORLD is not responsible for travel, accommodation, or external costs incurred.
                        </p>

                        {/* 3. Training Programs, Courses & Masterclasses */}
                        <h2>3. Training Programs, Courses &amp; Masterclasses</h2>
                        <p>For paid courses, masterclasses, and structured training programs:</p>
                        <ul>
                            <li>Refund requests must be made within <strong>5 days of purchase</strong></li>
                            <li>Refunds are not available if:
                                <ul>
                                    <li>More than 20% of the course content has been accessed</li>
                                    <li>Downloadable resources have been accessed</li>
                                    <li>Live sessions have been attended</li>
                                </ul>
                            </li>
                        </ul>
                        <p>
                            If technical issues prevent access, we will prioritize resolving access before issuing refunds.
                        </p>

                        {/* 4. Marketplace Listings & Promotional Services */}
                        <h2>4. Marketplace Listings &amp; Promotional Services</h2>
                        <p>NGAGEWORLD may provide:</p>
                        <ul>
                            <li>Business listings</li>
                            <li>Featured promotions</li>
                            <li>Advertising placements</li>
                            <li>Sponsored opportunities</li>
                        </ul>
                        <p>
                            These services are generally <strong>non-refundable once activated</strong>, as placement and
                            visibility are delivered immediately.
                        </p>
                        <p>Exceptions may apply in cases of:</p>
                        <ul>
                            <li>Duplicate payment</li>
                            <li>Billing errors</li>
                            <li>Technical failures caused by our system</li>
                        </ul>

                        {/* 5. Digital Products & Downloads */}
                        <h2>5. Digital Products &amp; Downloads</h2>
                        <p>
                            All digital products, templates, downloadable materials, or exclusive content purchases are{" "}
                            <strong>non-refundable once downloaded or accessed</strong>, unless:
                        </p>
                        <ul>
                            <li>The file is defective</li>
                            <li>The content delivered differs materially from what was advertised</li>
                        </ul>
                        <p>
                            Issues must be reported within <strong>7 days of purchase</strong>.
                        </p>

                        {/* 6. Exceptional Circumstances */}
                        <h2>6. Exceptional Circumstances</h2>
                        <p>
                            Refunds outside standard terms may be considered in cases such as:
                        </p>
                        <ul>
                            <li>Medical emergencies</li>
                            <li>Documented technical failure</li>
                            <li>Duplicate billing</li>
                        </ul>
                        <p>
                            All such decisions are made at the sole discretion of NGAGEWORLD management.
                        </p>

                        {/* 7. How to Request a Refund */}
                        <h2>7. How to Request a Refund</h2>
                        <p>To request a refund, please email:</p>
                        <p>
                            <strong>📧 <a href="mailto:support@ngageworld.com">support@ngageworld.com</a></strong>
                        </p>
                        <p>Include:</p>
                        <ul>
                            <li>Full name</li>
                            <li>Email used for purchase</li>
                            <li>Order/Invoice number</li>
                            <li>Service purchased</li>
                            <li>Reason for request</li>
                            <li>Supporting documentation (if applicable)</li>
                        </ul>
                        <p>
                            Refunds, if approved, will be processed within <strong>7–14 business days</strong> to the original
                            payment method.
                        </p>

                        {/* 8. Chargebacks & Payment Disputes */}
                        <h2>8. Chargebacks &amp; Payment Disputes</h2>
                        <p>
                            Before initiating a chargeback with your bank or payment provider, please contact us directly.
                            Filing a fraudulent or unjustified chargeback may result in:
                        </p>
                        <ul>
                            <li>Immediate account suspension</li>
                            <li>Permanent removal from the platform</li>
                            <li>Recovery of associated processing fees</li>
                        </ul>

                        {/* 9. Policy Updates */}
                        <h2>9. Policy Updates</h2>
                        <p>
                            NGAGEWORLD reserves the right to modify this Refund &amp; Cancellation Policy at any time.
                            Updates will be posted on this page with a revised “Last Updated” date.
                        </p>
                    </article>
                </div>
            </div>
        </>
    )
}

export default RefundPolicy
