import './Gameslibrary.css'
import img from '../../../assets/treasure hunt.svg'
import img2 from '../../../assets/Trivia- colour fill.svg'
import img3 from '../../../assets/Network Bingo.svg'
import img4 from '../../../assets/Match 3.svg'
import img5 from '../../../assets/Mini Quest (color fill) 1.svg'
import img6 from '../../../assets/Follow us.svg'
import img7 from '../../../assets/Wordify.svg'
import img8 from '../../../assets/Scavenger Hunt.svg'
import img9 from '../../../assets/Picture Puzzle.svg'
import img10 from '../../../assets/small talk 1 (1).svg'
import img11 from '../../../assets/Social Quest (color fill) 1.svg'
import img12 from '../../../assets/Layer 2.svg'
import img13 from '../../../assets/Multi Quest (color fill) 1.svg'
import img14 from '../../../assets/Survey Game  1.svg'
import Pagination from '../../../Components/Pagination/Pagination.jsx'
import search from '../../../assets/Search (1).svg'
import filterImg from '../../../assets/filter_list.svg'
import GamesFilterSidebar from '../Gamesfilter/GamesFilterSidebar.jsx'
import { useState } from 'react'
const Gameslibrary = () => {
    const [showFilter, setshowFilter] = useState(false)
    const gamesData = [
        {
            title: 'Treasure Hunt',
            para: 'Solve riddles and find sequential QR codes to unlock prizes.',
            img: img
        },
        {
            title: 'Trivia',
            para: 'Answer multiple-choice questions for points.',
            img: img2
        },
        {
            title: 'Network Bingo',
            para: 'Scan peers’ QR codes to make matches and encourage networking.',
            img: img3
        },
        {
            title: 'Match 3',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img4
        },
        {
            title: 'Mini Quest',
            para: "Complete non-sequential quick tasks by scanning specific QR codes.",
            img: img5
        },
        {
            title: 'Follow us',
            para: 'Tap on the “Follow Us” button to visit customer social media page.',
            img: img6
        },
        {
            title: 'Wordify',
            para: 'Guess the hidden word or phrase based on a clue.',
            img: img7
        },
        {
            title: 'Scavenger Hunt',
            para: 'Search freely for QR codes around a venue. Encourages exploration.',
            img: img8
        },
        {
            title: 'Picture Puzzle',
            para: 'Answer riddles based on visual clues or images.',
            img: img9
        },
        {
            title: 'Small Talk',
            para: 'Guess each other’s profile answers for connection and fun.',
            img: img10
        },
        {
            title: 'Social Quest',
            para: 'Complete creative tasks and upload photo or video proof to the feed.',
            img: img11
        },
        {
            title: 'Card Collector',
            para: 'Find and scan other players’ character codes to complete a set.',
            img: img12
        },
        {
            title: 'Video Trivia',
            para: 'Watch a clip and answer related questions for engagement and learning.',
            img: img2
        },
        {
            title: 'Multi Quest',
            para: 'Hybrid of quests and trivia—scan and answer questions.',
            img: img13
        },
        {
            title: 'Timed-Trivia',
            para: 'Answer multiple-choice questions for points, before the timer runs out.',
            img: img2
        },
        {
            title: 'Survey Game ',
            para: 'Answer survey questions to earn points and share insights.',
            img: img14
        },
    ]
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
            <div className='games_library_wrapper'>
                <div className='games_grid_wrapper'>
                    {
                        gamesData.map((e, i) => (
                            <div className='games_div' key={i}>
                                <img src={e.img} />
                                <h5>{e.title}</h5>
                                <p>{e.para}</p>
                            </div>
                        ))
                    }
                </div>
                <Pagination />
            </div>
        </>
    )
}

export default Gameslibrary
