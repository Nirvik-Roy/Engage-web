import React from 'react'
import Gamesfilter from '../Gamesfilter/Gamesfilter'
import { Outlet } from 'react-router-dom'
import './Gameslayout.css'
import BannerLayout from '../../Layout/BannerLayout/BannerLayout'
const Gameslayout = () => {
    return (
        <>
                <BannerLayout title={'Ngage Game Library'} />
            <div className='games_layout_wrapper'>
                <div className='container games_layout_content_wrapper'>
                    <Gamesfilter />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Gameslayout
