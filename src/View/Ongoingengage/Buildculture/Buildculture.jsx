import './Buildculture.css'
import img from '../../../assets/Rectangle 6674 (6).png'
import shadow from '../../../assets/Rectangle 6684.png'
import Betterrythm from '../Betterrythm/Betterrythm'
const Buildculture = () => {
    return (
        <>
            <div className='build_culture_wrapper'>
                <img src={shadow} style={{
                    position: 'absolute',
                    top: '-60%',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }} />
                <div className='container build_culture_content_wrapper'>
                    <div className='build_culture_img'>
                        <img src={img} />
                    </div>
                    <div className='build_culture_content'>
                        <h1 className='heading'>Build culture. Create a rhythm of connection.</h1>
                        <p>Keeping teams engaged shouldn’t rely on one big event or the same handful of people stepping up every time.</p>

                        <p>Most engagement efforts lose momentum because:</p>

                        <ul>
                            <li>Participation drops after the first few activities</li>
                            <li>The same people get involved every time</li>
                            <li>HR has to keep inventing new ideas</li>
                            <li>Engagement feels like extra work, not part of work</li>

                            <p style={{
                                marginTop: '10px'
                            }}><span>Ngage Rhythm replaces scattered activities with a steady, repeatable flow of engagement</span> — simple to run, easy to join, and designed to build culture and connection across everyday work</p>
                        </ul>
                    </div>
                </div>
                <Betterrythm/>
            </div>
        </>
    )
}

export default Buildculture
