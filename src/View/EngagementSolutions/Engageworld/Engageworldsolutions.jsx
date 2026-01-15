import React from 'react'
import img from '../../../assets/Rectangle 6679.png'
import listimg from '../../../assets/Vector (8).svg'
import buttonIcon from '../../../assets/svg159.svg'
const Engageworldsolutions = () => {
    const data = [
        {
            id: 1,
            title: 'Ngage Launchpad',
            title2: 'Gamified onboarding experiences',
            list: [
                {
                    title: 'Launchpad helps new hires:',
                    point1: 'Learn how things work in your company',
                    point2: 'Meet people across the organization',
                    point3: 'Feel part of the culture from day one'
                },
                {
                    title: 'Best for:',
                    point1: 'New employee onboarding',
                    point2: 'Intern programs',
                    point3: 'Early culture building moments'
                },
            ],
            buttonTitle: 'Explore Launchpad'
        },
        {
            id: 2,
            title: 'Ngage Rhythm',
            title2: 'Ongoing engagement challenges',
            list: [
                {
                    title: 'Rhythm keeps engagement going beyond events by:',
                    point1: 'Encouraging consistent participation',
                    point2: 'Working across remote, hybrid, and in-office teams',
                    point3: 'Making engagement easy to run and easy to join'
                },
                {
                    title: 'Best for:',
                    point1: 'Sustained engagement',
                    point2: 'Participation-driven culture',
                    point3: 'Year-round engagement plans'
                },
            ],
            buttonTitle: 'Explore Rhythm'
        },
          {
            id: 3,
            title: 'Ngage Play Day',
            title2: 'Live, facilitated corporate fun experiences',
            list: [
                {
                    title: 'Play Day turns staff fun days into:',
                    point1: 'Inclusive, high-participation experiences',
                    point2: 'Activities everyone can join',
                    point3: 'Memorable culture moments'
                },
                {
                    title: 'Best for:',
                    point1: 'Company fun days',
                    point2: 'Team celebrations',
                    point3: 'All-staff engagement moments'
                },
            ],
            buttonTitle: 'Explore Play Day'
        },
    ]
    return (
        <>
            <div className='container world_solutions_wrapper'>
                <div className='solutions_engage_world'>
                    <img src={img} />
                    <h1>The solutions inside Ngage World</h1>
                </div>
                <div className='soultions_launch_pad_wrapper'>
                    {data.map((e, i) => (
                        <div className='launch_pad' key={i}>
                            <div>
                                <h2>{e.title}</h2>
                                <h3>{e.title2}</h3>
                                {e.list.map((ele, i) => (
                                    <>
                                        <h5 key={i}>{ele.title}</h5>

                                        <ul>
                                            <li><img src={listimg} />{ele.point1}</li>
                                            <li><img src={listimg} />{ele.point2}</li>
                                            <li><img src={listimg} />{ele.point3}</li>
                                        </ul>
                                    </>


                                ))}
                            </div>

                            <button className='base_btn_design'>{e.buttonTitle} <img src={buttonIcon} /></button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Engageworldsolutions
