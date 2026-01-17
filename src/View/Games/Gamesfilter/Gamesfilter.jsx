import './Gamesfilter.css'
import searchIcon from '../../../assets/Search (1).svg'
import {  useState } from 'react'
import buttonIcon from '../../../assets/svg159.svg'
const Gamesfilter = () => {
    const [useCase, setuseCase] = useState(true);
    const [duration, setduration] = useState(true)

    return (
        <>
            <div className='games_filter_wrapper'>
                <div className='search_input'>
                    <input placeholder='Seerch..' />
                    <img src={searchIcon} />
                </div>

                <div className='games_filter_dropdown_wrapper'>
                    <div className='games_filter'>
                        <div onClick={(() => setuseCase(!useCase))} className='games_filter_head'>
                            <h4>Use Case</h4>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>

                        {useCase && <div className='games_filter_checkbox_Wrapper'>
                            <div className='games_filter_checkbox'>
                                <input type='checkbox' value={'Staff'} />
                                <p>Staff</p>
                            </div>

                            <div className='games_filter_checkbox'>
                                <input type='checkbox' value={'Conferences'} />
                                <p>Conferences</p>
                            </div>

                            <div className='games_filter_checkbox'>
                                <input type='checkbox' value={'Expos'} />
                                <p>Expos</p>
                            </div>

                            <div className='games_filter_checkbox'>
                                <input type='checkbox' value={'Marketing'} />
                                <p>Marketing</p>
                            </div>
                        </div>}
                    </div>
                    <div className='games_filter'>
                        <div onClick={(() => setduration(!duration))} className='games_filter_head'>
                            <h4>Duration (min) </h4>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>

                        {duration && <div className='games_filter_checkbox_Wrapper'>
                            <div className='games_filter_checkbox'>
                                <input type='checkbox' value={'1–5'} />
                                <p>1–5</p>
                            </div>

                            <div className='games_filter_checkbox'>
                                <input type='checkbox' value={'5–10'} />
                                <p>5–10</p>
                            </div>

                            <div className='games_filter_checkbox'>
                                <input type='checkbox' value={'10–20 '} />
                                <p>10–20 </p>
                            </div>
                        </div>}
                    </div>
                </div>

                <div className='games_button_dropdown_rapper'>
                    <button className='base_btn_design'>Apply <img src={buttonIcon}/></button>
                    <button>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Gamesfilter
