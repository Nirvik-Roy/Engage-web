import React, { useState } from 'react'
import BannerLayout from '../Layout/BannerLayout/BannerLayout'
import Buildculture from './Buildculture/Buildculture'
import Engagerythm from './Engagerythm/Engagerythm'
import Teamparticipate from './Teamparticipate/Teamparticipate'
import sample from '../../assets/Ngage NES Report Template V3 Aug 2025 (3).png'
import Rythmsteps from './Rythmsteps/Rythmsteps'
import Rythmpackage from './Rythmpackage/Rythmpackage'
import Teamchoose from './Teamchoose/Teamchoose'
import Buildengagement from '../Home/Buildengagement/Buildengagement'
import img2 from '../../assets/Group 1597882952.svg'
import img3 from '../../assets/Frame 1984078716.png'
import img4 from '../../assets/Frame 1984078720.svg'
import img5 from '../../assets/Frame 1984078717.svg'
import engagementImg from '../../assets/Frame 1984078720 (1).svg'

const Ongoingengage = () => {
    const [responsiveTitle, setresponsiveTitle] = useState(false);

    const onResize = () => {
        const width = window.innerWidth;

        if (width <= 576) {
            setresponsiveTitle(true)
        } else {
            setresponsiveTitle(false)
        }
    };

    window.addEventListener("resize", onResize);

    return (
        <>
            <BannerLayout title={'NGAGE Rhythm'} subTitle={'Ongoing engagement that fits the flow of work'} />
            <Buildculture />
            <Engagerythm />
            <Teamparticipate />
            <div className='measure_engagement_wrapper'>
                <div className='container measure_engagement_content_wrapper engage_measure_rythm_wrapper'>
                    <div className='measure_engagement_content'>
                        <h1 className='heading' style={{
                            marginBottom: '15px',
                            fontSize: '3.8rem',
                            lineHeight: '5rem'
                        }}>Measure engagement with confidence</h1>
                        <p>Ngage tracks participation and engagement trends using the Ngage Engagement Score (NES) — a clear, leadership-ready view of engagement over time.
                        </p>
                        <div className='content_wrapper5656'>
                            <div style={{
                                marginBottom: '15px'
                            }} className='measure_box_div_wrapper'>


                                <div className='measure_box_div'>
                                    <img src={engagementImg} />
                                </div>

                                <div className='measure_box_div'>
                                    <img src={img2} />
                                </div>

                                <div className='measure_box_div'>
                                    <img src={img3} />
                                </div>

                                <div className='measure_box_div'>
                                    <img src={img4} />
                                </div>
                                <div className='measure_box_div'>
                                    <img src={img5} />
                                </div>
                            </div>

                            <p style={{
                                paddingLeft: '0'
                            }}>See how engaged your teams actually are, track progress across initiatives and time, share clear engagement insights with leadership, no complicated dashboards, no survey overload.
                            </p>
                        </div>
                        <p style={{
                            marginTop: '15px'
                        }}>NES helps HR teams:</p>

                        <ul>
                            <li>See who is participating</li>
                            <li>Understand engagement consistency</li>
                            <li>Spot trends early</li>
                            <li>Report engagement clearly to leadership</li>
                        </ul>
                        <p style={{
                            marginTop: '15px'
                        }}>No complex dashboards. Just insight that makes sense.
                        </p>
                    </div>
                    <div className='measure_engagement_img'>
                        <img src={sample} />
                    </div>
                </div>
            </div>
            <Rythmpackage />
            <Rythmsteps />
            <Teamchoose />
            <Buildengagement demobtn={true} explorebtn={true} para={'Ngage Rhythm gives teams a simple way to stay connected — without turning engagement into a project.'} title={'Ready to build your rhythm?'} />
        </>
    )
}

export default Ongoingengage
