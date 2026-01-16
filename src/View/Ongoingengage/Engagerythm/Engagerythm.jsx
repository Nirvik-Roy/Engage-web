import React from 'react'
import './Engagerythm.css'
import cardImg from '../../../assets/c916209092a6d3fef78320b3722db5f4b286cbe1.jpg'
import cardImg2 from '../../../assets/76eb601ae8cbdb510a11f197e2af52a513a36fc9.jpg'
import cardImg3 from '../../../assets/b191c8ca226e6d6e84daec673db7abc4b9a3a71b.jpg'
const Engagerythm = () => {
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
   
                <div className='container engage_rythm_content_wrapper'>
                    <h1 className='heading'>Set your engagement rhythm</h1>
                    <h3>Simply choose from 30+ ready-made engagement experiences </h3>
                    <p>Each experience is designed to spark interaction, collaboration, and light competition.
                        Experiences are ready to run, require no facilitation, and can be launched with a few clicks — making it easy to maintain a consistent engagement cadence throughout the year.</p>


                 
                </div>

                   <div className='engage_rythm_cards_wrapper'>
                    {cardData.map((e,i)=>(
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
     
        </>
    )
}

export default Engagerythm
