import './Gameslibrary.css'
import img from '../../../assets/treasure hunt.svg'
import img2 from '../../../assets/Trivia- colour fill.svg'
import img3 from '../../../assets/Network Bingo.svg'
import img4 from '../../../assets/Match 3.svg'
import img5 from '../../../assets/small talk 1.svg'
import img6 from '../../../assets/Follow us.svg'
import img7 from '../../../assets/Wordify.svg'
import img8 from '../../../assets/Scavenger Hunt.svg'
import img9 from '../../../assets/Picture Puzzle.svg'
import img10 from '../../../assets/Riddle- colour fill.svg'
import img11 from '../../../assets/Quest 1.svg'
import img12 from '../../../assets/Layer 2.svg'
import Pagination from '../../../Components/Pagination/Pagination.jsx'
const Gameslibrary = () => {
    const gamesData = [
        {
            title: 'Treasure Hunt',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img
        },
        {
            title: 'Trivia',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img2
        },
        {
            title: 'Network Bingo',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img3
        },
        {
            title: 'Match 3',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img4
        },
        {
            title: 'Network Bingo',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img5
        },
        {
            title: 'Follow us',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img6
        },
        {
            title: 'Wordify',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img7
        },
        {
            title: 'Scavenger Hunt',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img8
        },
        {
            title: 'Picture Puzzle',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img9
        },
        {
            title: 'Small Talk',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img10
        },
        {
            title: 'Quest',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img11
        },
        {
            title: 'Card Collector',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
            img: img12
        },
    ]
    return (
        <>
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

                <Pagination/>
            </div>
        </>
    )
}

export default Gameslibrary
