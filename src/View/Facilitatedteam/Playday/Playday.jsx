import React from 'react'
import img from '../../../assets/Group 1597882971 (3).png'
import '../../Ongoingengage/Teamparticipate/Teamparticipate.css'
const Playday = () => {
    return (
        <>
            <div className='team_participate_Wrappper'>
                <div className='container team_participate_content_Wrapper'>
                    <div className='team_participate_img'>
                        <img src={img} />
                    </div>
                    <div className='team_participate_content'>
                        <h1 className='heading'>Why Ngage Play Day works</h1>
                        <ul>
                            <li style={{
                                listStyle: 'none'
                            }}><strong>Team building is structured, not improvised</strong>
                                <br />
                                Every Play Day follows a clear plan — from team formation and activity flow to scoring and wrap-up — so engagement isn’t left to chance or personality.
                            </li>
                            <li style={{
                                listStyle: 'none'
                            }}><strong>Activities are inclusive by design
                                    <br />

                                </strong>
                                Ngage experiences are intentionally built so everyone can participate, whether they prefer physical challenges, problem-solving, or lighter social interaction.
                            </li>
                            <li style={{
                                listStyle: 'none'
                            }}><strong>Facilitation removes pressure from HR</strong>
                                Our team manages the experience end-to-end, so HR and leaders can participate alongside their teams instead of coordinating logistics.
                            </li>
                            <li style={{
                                listStyle: 'none'
                            }}><strong>Live scoring creates shared momentum</strong>
                                Points, leaderboards, and real-time updates keep teams invested and give the day a sense of progression and excitement.
                            </li>
                            <li style={{
                                listStyle: 'none'
                            }}><strong>Participation stays high across the entire group</strong>
                                With multiple ways to earn points, employees can contribute at their own pace — keeping energy high from start to finish.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Playday
