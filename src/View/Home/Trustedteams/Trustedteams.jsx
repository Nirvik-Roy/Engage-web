import React from 'react'
import './Trustedteams.css'
import logo from '../../../assets/logoipsum-242.svg'
import logo2 from '../../../assets/Logo box.svg'
import logo3 from '../../../assets/Logo box (1).svg'
import logo4 from '../../../assets/Logo box (2).svg'
import logo5 from '../../../assets/Logo box (3).svg'
const Trustedteams = () => {
    const data = [
        {
            id: 1,
            logo: logo
        },
        {
            id: 2,
            logo: logo2
        },
        {
            id: 3,
            logo: logo3
        },
        {
            id: 4,
            logo: logo4
        },
        {
            id: 5,
            logo: logo5
        },
    ]
    return (
        <>
            <div className='trusted_teams_wrapper'>
                <div className='container trusted_teams_content_wrapper'>
                    <h1 className='heading'>Trusted by teams across Industries</h1>
                    <div className='trusted_teams_slider_wrapper'>
                        {data.map((e,i)=>{
                            return(
                                <>
                                    <img src={e.logo} key={i} alt='company_logos'/>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trustedteams
