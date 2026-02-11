
import '../Games/Gamesexperience/Gamesexperience.css'
import img from '../../assets/df6013b58f9ded6dccb7decb8b982a7fe844a2fe.png'
import img1 from '../../assets/71797a607c6f7a762dea1a84569e07d0a0b130b4(1).png'
import img2 from '../../assets/612a7dea21b534a14577dc9810f1802d44410b3f(1).png'
import img3 from '../../assets/23aba9e2998a06376d9ecbc21fc6e302b30ca1c6(1).png'
import star from '../../assets/Frame 1984078949 (1).svg'
import icon from '../../assets/svg159 (3).svg'
import clock from '../../assets/_x33_4_x2C__watch_x2C__Alarm_x2C__clock_x2C__reminder_x2C__time.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Pagination from '../../Components/Pagination/Pagination';
import { useEffect, useState } from 'react'
import search from '../../assets/Search (1).svg'
import filterImg from '../../assets/filter_list.svg'
import cashImg from '../../assets/Frame (2).svg'
import EngageFilterSidebar from './EngageFilterSidebar.jsx'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { experienceData } from './ExpereienceData.js'
import { EngageRythmCardData } from './EngageRythmCardData.js'
const Engageexperience = () => {
    const [showFilter, setshowFilter] = useState(false);
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams();
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const category = searchParams.get('category');
    const filter = searchParams.get('filter');
    const price = searchParams.get('price');
    const totalprice = searchParams.get('totalprice')
    const [index, setIndex] = useState();
    const [finalExperienceData,setfinalExperienceData] = useState()
    const indexFunction = (i) => {
        if (index === i) {
            setIndex(null)
        } else {
            setIndex(i)
        }
    }

    useEffect(()=>{
      setfinalExperienceData(experienceData.filter((e)=>e.subCategory== filter.trim()))
    },[filter])
    return (
        <>

            {showFilter && <EngageFilterSidebar setshowFilter={setshowFilter} />}
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
                    {category != 'NGAGE Rythm' && finalExperienceData?.map((element, i) => (
                        <div onClick={(() => indexFunction(i))} style={index === i ? {
                            border: '1px solid #040480'
                        } : {}} key={element} className='game_experience_box'>
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
                                 { element.reviews &&  <div className='clock_wrapper'>
                                        <img className='star_img56' src={star} />
                                        <h6>{element.reviews}</h6>
                                    </div>}

                                    {/* <div className='clock_wrapper'>
                                        <img className='star_img56' src={cashImg} />
                                        <h6>{element.price} </h6>
                                    </div> */}
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
                                {/* <div>
                                    <strong>What’s included</strong>
                                    <ul style={{
                                        marginLeft: '20px'
                                    }}>
                                        {element.whatsIncludedList.map((e,) => (
                                            <>
                                                <li>{e}</li>

                                            </>
                                        ))}

                                    </ul>
                                </div> */}
                            { element.Outcomes &&    <div>
                                    <strong>
                                        Outcomes
                                    </strong>
                                    <p>{element.Outcomes}</p>
                                </div>}

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
                                {index === i ? <p style={{
                                    fontWeight: '600',
                                    marginLeft: 'auto',
                                    fontSize: '1rem',
                                    marginTop: '10px',
                                    color: 'rgba(31, 144, 31, 1)',
                                    cursor:'pointer'
                                }} onClick={(() => {
                                    navigate(`/checkout?category=${category}&subcategory=${filter}&price=${price}&totalprice=${totalprice}&experience=${element.title}`)
                                })}>Procced</p> : <p style={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                    color: '#040480',
                                    fontWeight: '600',
                                    gap: '5px',
                                    fontSize: '1rem',
                                    marginTop: '10px',
                                    cursor:'pointer'
                                }}>Select your first experience <img src={icon} /></p>}
                            </div>

                        </div>

                    ))}

                    {
                        category.trim() == 'NGAGE Rythm' && EngageRythmCardData?.map((element,i)=>(
                            <div onClick={(() => indexFunction(i))} style={index === i ? {
                                border: '1px solid #040480'
                            } : {}} key={element} className='game_experience_box'>
                                <div className='game_experience_img'>
                                    <Slider {...settings}>
                                        {[1, 2, 3].map((e) => (
                                            <img key={e} src={element.img} />
                                        ))}
                                    </Slider>
                                </div>
                                <div className='game_experience_details'>
                                    <h5>{element.name}</h5>
                                    <h1>{element.subTitle}</h1>
                                    <div className='clock_star_wrapper'>
                                        <div className='clock_wrapper'>
                                            <img src={clock} />
                                            <h6>{element.duration}</h6>
                                        </div>
                                        {/* {element.reviews && <div className='clock_wrapper'>
                                            <img className='star_img56' src={star} />
                                            <h6>{element.reviews}</h6>
                                        </div>} */}

                                        {/* <div className='clock_wrapper'>
                                            <img className='star_img56' src={cashImg} />
                                            <h6>{element.price} </h6>
                                        </div> */}
                                    </div>
                                    <p><strong>Best for:</strong> {element.theme}</p>

                                    <p><strong>Season:</strong> {element.season}</p>

                                    <p><strong>Outcome:</strong> {element.outcome}</p>

                                    <div>
                                        <strong>What it’s about</strong>
                                        <p> {element.description}</p>
                                    </div>

                                    <div>
                                        <strong>How you win</strong>
                                        <p> {element.howToWin}</p>
                                    </div>
                                   
                                  
                                    <p><strong>Activities Used:</strong> {element.activities.length}</p>

                                    <p><strong>Prizes:</strong> {element.prizes}</p>
                                    
                                <div className='btn_wrapper_game_experience' style={{
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: '10px',
                                    flexWrap:'wrap'
                                }}>
                                       {element.activities.map((e)=>(
                                        <button >{e}</button>
                                       ))}
                                </div> 
                                    {index === i ? <p style={{
                                        fontWeight: '600',
                                        marginLeft: 'auto',
                                        fontSize: '1rem',
                                        marginTop: '10px',
                                        color: 'rgba(31, 144, 31, 1)',
                                        cursor: 'pointer'
                                    }} onClick={(()=>{
                                        navigate(`/checkout?category=${category}&subcategory=${filter}&price=${price}&totalprice=${totalprice}&experience=${element.subTitle}`)
                                    })}>Procced</p> : <p style={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                        color: '#040480',
                                        fontWeight: '600',
                                        gap: '5px',
                                        fontSize: '1rem',
                                        marginTop: '10px',
                                        cursor: 'pointer'
                                    }}>Select your first experience <img src={icon} /></p>}
                                </div>

                            </div>
                        ))
                    }

                </div>
                {/* <Pagination /> */}
            </div>
        </>
    )
}

export default Engageexperience
