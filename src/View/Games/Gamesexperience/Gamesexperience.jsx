import './Gamesexperience.css'
import img from '../../../assets/Rectangle 6674 (3).png'
import star from '../../../assets/Frame 1984078949.svg'
import clock from '../../../assets/_x33_4_x2C__watch_x2C__Alarm_x2C__clock_x2C__reminder_x2C__time.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Pagination from '../../../Components/Pagination/Pagination';
import { useState } from 'react'
import search from '../../../assets/Search (1).svg'
import filterImg from '../../../assets/filter_list.svg'
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
                    {[1, 2, 3, 4].map((e) => (
                        <div key={e} className='game_experience_box'>
                            <div className='game_experience_img'>
                                <Slider {...settings}>
                                    {[1, 2, 3].map((e) => (
                                        <img key={e} src={img} />
                                    ))}
                                </Slider>
                            </div>
                            <div className='game_experience_details'>
                                <h5>NGAGE Rhythm</h5>
                                <h1>Christmas Challenge</h1>
                                <div className='clock_star_wrapper'>
                                    <div className='clock_wrapper'>
                                        <img src={clock} />
                                        <h6>30mins</h6>
                                    </div>
                                    <div className='clock_wrapper'>
                                        <img className='star_img56' src={star} />
                                        <h6>(4.k reviews)</h6>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse </p>
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

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <Pagination />
            </div>
        </>
    )
}

export default Gamesexperience
