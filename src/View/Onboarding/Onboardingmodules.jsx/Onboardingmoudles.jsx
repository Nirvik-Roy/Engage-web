import React from 'react'
import cardImg from '../../../assets/c916209092a6d3fef78320b3722db5f4b286cbe1.jpg'
import cardImg2 from '../../../assets/76eb601ae8cbdb510a11f197e2af52a513a36fc9.jpg'
import cardImg3 from '../../../assets/b191c8ca226e6d6e84daec673db7abc4b9a3a71b.jpg'
const Onboardingmoudles = () => {
    const cardData = [
        {
            id: 1,
            img: cardImg,
            title: 'Christmas  Challenge',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 2,
            img: cardImg,
            title: 'Christmas  Challenge',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 3,
            img: cardImg2,
            title: 'Christmas  Challenge',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 4,
            img: cardImg3,
            title: 'Christmas  Challenge',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 5,
            img: cardImg,
            title: 'Christmas  Challenge',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 6,
            img: cardImg2,
            title: 'Christmas  Challenge',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 7,
            img: cardImg,
            title: 'Christmas  Challenge',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 8,
            img: cardImg3,
            title: 'Christmas  Challenge',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 9,
            img: cardImg,
            title: 'Christmas  Challenge',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            id: 10,
            img: cardImg,
            title: 'Christmas  Challenge',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    ]
    return (
        <>
        <div style={{
            padding:'70px 0 30px 0'
        }}>

            <div className='container engage_rythm_content_wrapper'>
                <h1 className='heading'>Choose your onboarding modules</h1>
                <p>Launchpad onboarding journeys are built using a set of modular experiences.
                    Each organization selects the modules that best reflect its culture and onboarding needs.
                </p>

            </div>

            <div className='engage_rythm_cards_wrapper'>
                {cardData.map((e, i) => (
                    <div key={i} className='engage_rythm_card' >
                        <div className='engage_rythm_img'>
                            <img src={e.img} />
                            <div className='number'>{e.id}</div>
                        </div>
                        <h4>{e.title}</h4>
                        <small>{e.para}</small>
                    </div>

                ))}
            </div>

            <h3 style={{
                textAlign: 'center'
            }}>Available modules:
                •	Culture & Values
                •	Policies & Compliance
                •	Meet the Team
                •	Your Workplace
                •	Role Readiness
            </h3>

            <p style={{
                textAlign: 'center'
            }}>Modules are assembled into a multi-level onboarding journey using your existing content.</p>
        </div>
        </>
    )
}

export default Onboardingmoudles
