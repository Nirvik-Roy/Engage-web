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
                            <li>Team building is structured, not improvised</li>
                            <li>Activities are inclusive by design
                            </li>
                            <li>Facilitation removes pressure from HR
                            </li>
                            <li>Live scoring creates shared momentum</li>
                            <li>Participation stays high across the entire group</li>
                        </ul>
                    </div>
                </div>
            </div>
      
    </>
  )
}

export default Playday
