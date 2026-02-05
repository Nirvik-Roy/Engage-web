import './Gamesexperience.css'
import img from '../../../assets/df6013b58f9ded6dccb7decb8b982a7fe844a2fe(1).png'
import img1 from '../../../assets/71797a607c6f7a762dea1a84569e07d0a0b130b4(1).png'
import img2 from '../../../assets/612a7dea21b534a14577dc9810f1802d44410b3f(1).png'
import img3 from '../../../assets/23aba9e2998a06376d9ecbc21fc6e302b30ca1c6(1).png'
import star from '../../../assets/Frame 1984078949 (1).svg'
import icon from '../../../assets/svg159 (3).svg'
import clock from '../../../assets/_x33_4_x2C__watch_x2C__Alarm_x2C__clock_x2C__reminder_x2C__time.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Pagination from '../../../Components/Pagination/Pagination';
import { useState } from 'react'
import search from '../../../assets/Search (1).svg'
import filterImg from '../../../assets/filter_list.svg'
import cashImg from '../../../assets/Frame (2).svg'
import GamesFilterSidebar from '../Gamesfilter/GamesFilterSidebar.jsx'
const Gamesexperience = () => {
    const [showFilter, setshowFilter] = useState(false);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [index,setIndex] = useState()

    const data = [
        {
            subTitle: 'NGAGE PLAY DAY: 90-MINUTE EXPERIENCES',
            title: 'Team Ignite',
            time: '90 Minutes',
            reviews: '(4.k reviews)',
            price: 'Starting at:US$1,999 ',
            bestFor: 'Quick team reset, department sessions, icebreakers',
            scope: 'Team Building',
            experience: 'Team Ignite is a fast, high-energy team-building session designed to get everyone involved quickly. It focuses on communication, collaboration, and light competition without requiring athletic ability.',
            howItWorks: 'Participants are grouped into small teams and rotate through short, facilitator-led challenges. Each activity earns points that feed into a live Ngage leaderboard, keeping momentum high throughout the session.',
            Outcomes: 'Quick energy boost, improved interaction, shared momentum.',
            img: img
        },
        {
            subTitle: 'NGAGE PLAY DAY: 90-MINUTE EXPERIENCES',
            title: 'Puzzle Breakout',
            time: '90 Minutes',
            reviews: '(4.k reviews)',
            price: 'Starting at:US$1,999 ',
            bestFor: 'Analytical teams, problem solvers, strategy sessions',
            scope: 'Problem Solving',
            experience: 'Puzzle Breakout is a mentally engaging team-building experience centered on riddles, logic puzzles, and clue-based challenges. It rewards communication, critical thinking, and teamwork rather than speed or physical ability.',
            howItWorks: 'Teams race against the clock to unlock puzzles and progress through levels. Points are awarded for accuracy, speed, and completing bonus challenges.',
            Outcomes: 'Stronger problem-solving, better communication, focused collaboration.',
            img: img1
        },
        {
            subTitle: 'NGAGE PLAY DAY: 90-MINUTE EXPERIENCES',
            title: 'Amazing Race: Team Edition',
            time: 'Half Day',
            reviews: '(4.k reviews)',
            price: 'Starting at:US$1,999 ',
            bestFor: 'Off-sites, retreats, cross-department bonding',
            scope: 'Collaboration',
            experience: 'Amazing Race: Team Edition is a location-based team-building experience where teams follow clues, complete tasks, and unlock checkpoints. It blends movement, creativity, and strategy in a way that keeps participation high.',
            howItWorks: 'Teams receive digital clues through Ngage and move through a series of checkpoints. Each completed task unlocks the next challenge and adds points to the leaderboard.',

            Outcomes: 'Cross-team connection, collaboration under pressure, memorable shared moments.',
            img: img2
        },
        {
            subTitle: 'NGAGE PLAY DAY: 90-MINUTE EXPERIENCES',
            title: 'Office Olympics',
            time: 'Half Day',
            reviews: '(4.k reviews)',
            price: 'Starting at:US$1,999 ',
            bestFor: 'Wellness days, morale boosts, department competitions',
            scope: 'Energy & Morale',
            experience: 'Office Olympics is an inclusive, playful competition inspired by Olympic-style events. Activities are designed so everyone can participate, regardless of fitness level.',
            howItWorks: 'Teams compete across a series of short events — mental, social, and light physical challenges. Points accumulate across events to crown an overall champion.',

            Outcomes: 'Cross-team connection, collaboration under pressure, memorable shared moments.',
            img: img3
        },
    ]

    const indexFunction = (i) =>{
        if(index === i){
            setIndex(null)
        }else{
            setIndex(i)
        }
    }
    return (
        <>
            {showFilter && <GamesFilterSidebar setshowFilter={setshowFilter} />}
            <div className='big_search_input'>
                <input placeholder='Search..' />
                <img src={search} />
            </div>
            <div className='filter_head_wrapper'>
                <span onClick={(() => setshowFilter(!showFilter))}>Filter <img src={filterImg} /></span>
                <p>Sort 1 out of 4 <i class="fa-solid fa-angle-down"></i></p>
            </div>
            <div className="games_library_wrapper">
                <div className="games_experience_box_wrapper">
                    {data.map((element) => (
                        <div 
                        // onClick={(() => indexFunction(i))} style={index === i ?{
                        //     border:'1px solid #040480'
                        // }:{}} 
                        
                        key={element} className='game_experience_box'>
                            <div className='game_experience_img'>
                                <Slider {...settings}>
                                    {[1, 2, 3].map((e) => (
                                        <img key={e} src={element.img} />
                                    ))}
                                </Slider>
                            </div>
                            <div className='game_experience_details'>
                                <h5>{element.subTitle}</h5>
                                <h1>{element.title}</h1>
                                <div className='clock_star_wrapper'>
                                    <div className='clock_wrapper'>
                                        <img src={clock} />
                                        <h6>{element.time}</h6>
                                    </div>
                                    <div className='clock_wrapper'>
                                        <img className='star_img56' src={star} />
                                        <h6>{element.reviews}</h6>
                                    </div>

                                    <div className='clock_wrapper'>
                                        <img className='star_img56' src={cashImg} />
                                        <h6>:{element.price} </h6>
                                    </div>
                                </div>
                                <p><strong>Best for:</strong> {element.bestFor}</p>

                                <p><strong>Scope Tag:</strong> {element.scope}</p>
                                <div>
                                    <strong>What this experience is</strong>
                                    <p> {element.experience}</p>
                                </div>

                                <div>
                                    <strong>How it works</strong>
                                    <p> {element.howItWorks}</p>
                                </div>
                               
                                <div>
                                    <strong>
                                        Outcomes
                                    </strong>
                                    <p>{element.Outcomes}</p>
                                </div>
                               
                                {/* 
                                <div className='btn_wrapper_game_experience' style={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    {e > 2 && <button style={{
                                        background: 'rgba(190, 83, 173, 1)'
                                    }}>Picture Puzzle</button>}
                                    <button>Treasure Hunt</button>
                                    {e > 2 && <button style={{
                                        background: 'rgba(254, 153, 0, 1)'
                                    }}>Scavenger Hunt</button>}

                                </div> */}
                            {/* { index === i ? <p style={{
                                fontWeight:'600',
                                marginLeft:'auto',
                                fontSize:'1rem',
                                marginTop:'10px',
                                    color:'rgba(31, 144, 31, 1)'
                            }}>Selected</p> :    <p style={{
                                    display:'flex',
                                    justifyContent:'flex-end',
                                    alignItems:'center',
                                    color:'#040480',
                                    fontWeight:'600',
                                    gap:'5px',
                                    fontSize:'1rem',
                                    marginTop:'10px'
                                }}>Select <img src={icon} /></p>} */}
                            </div>
                            
                        </div>
                        
                    ))}
              
                </div>
                {/* <Pagination /> */}
            </div>
        </>
    )
}

export default Gamesexperience
