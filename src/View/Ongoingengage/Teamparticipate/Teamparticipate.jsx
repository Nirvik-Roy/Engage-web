import React from 'react'
import './Teamparticipate.css'
import img from '../../../assets/Rectangle 6674 (7).png'
const Teamparticipate = () => {
    return (
        <>
            <div className='team_participate_Wrappper'>
                <div className='container team_participate_content_Wrapper'>
                    <div className='team_participate_img'>
                        <img src={img} />
                    </div>
                    <div className='team_participate_content'>
                        <h1 className='heading'>Teams participate and earn rewards</h1>
                        <p>Employees join using a simple link or QR code, complete challenges at their own pace, and earn points for participating.
                            <br />
                            <br />
                            Points can be redeemed in the Ngage Marketplace for tangible rewards — keeping engagement light, motivating, and voluntary.
                            <br />
                            <br />
                            No app downloads. No scheduling headaches. Just easy participation.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teamparticipate
