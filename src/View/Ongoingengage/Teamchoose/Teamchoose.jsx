import React from 'react'
import img from '../../../assets/Rectangle 6674 (2).png'
import '../Teamparticipate/Teamparticipate.css'
const Teamchoose = () => {
    return (
        <>
            <div className='team_participate_Wrappper'>
                <div className='container team_participate_content_Wrapper'>
                    <div className='team_participate_img'>
                        <img src={img} />
                    </div>
                    <div className='team_participate_content'>
                        <h1 className='heading'>Why teams choose Ngage Rhythm</h1>
                        <ul>
                            <li>	Easy for HR to run</li>
                            <li>	Easy for employees to join
                            </li>
                            <li>	Designed for participation, not pressure
                            </li>
                            <li>Works alongside everyday work</li>
                            <li>Engagement results you can actually report</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Teamchoose
