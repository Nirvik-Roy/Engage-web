import React from 'react'
import Gamesfilter from '../Gamesfilter/Gamesfilter'
import { Outlet, useLocation } from 'react-router-dom'
import './Gameslayout.css'
import BannerLayout from '../../Layout/BannerLayout/BannerLayout'
const Gameslayout = () => {
    const location = useLocation()
    return (
        <>
            <BannerLayout title={location.pathname === '/games/library' ? 'Ngage Game Library' : 'Ngage Game Experience'} />
            <div className='games_layout_wrapper'>
                <div className='container games_layout_content_wrapper'>
                {location.pathname != '/games/library' &&    <Gamesfilter />}
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Gameslayout
