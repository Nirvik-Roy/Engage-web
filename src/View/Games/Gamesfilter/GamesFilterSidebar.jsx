import './Gamesfilter.css'
import searchIcon from '../../../assets/Search (1).svg'
import { useState } from 'react'
import buttonIcon from '../../../assets/svg159.svg'
import filterImg from '../../../assets/filter_list.svg'
const GamesFilterSidebar = ({ setshowFilter }) => {
    const [useCase, setuseCase] = useState(true);
    const [duration, setduration] = useState(true)
    return (
        <>
            <div className='games_responsive_filter_Wrapper' onClick={(() => setshowFilter(false))}>
                <div className='games_filter_wrapper ' onClick={((e) => e.stopPropagation())}>
                    <div className='filter_head_wrapper'>
                        <span>Filter <img src={filterImg} /></span>
                    </div>
                    <div className='search_input'>
                        <input placeholder='Search..' />
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
                                    <input type='checkbox' value={'NGAGE Rhythm'} />
                                    <p>NGAGE Rhythm</p>
                                </div>

                                <div className='games_filter_checkbox'>
                                    <input type='checkbox' value={'NGAGE Play Day'} />
                                    <p>NGAGE Play Day</p>
                                </div>

                                <div className='games_filter_checkbox'>
                                    <input type='checkbox' value={'NGAGE Launchpad'} />
                                    <p>NGAGE Launchpad</p>
                                </div>

                                <div className='games_filter_checkbox'>
                                    <input type='checkbox' value={'NGAGE Live'} />
                                    <p>NGAGE Live</p>
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
                                    <input type='checkbox' value={'30 min'} />
                                    <p>30 min</p>
                                </div>

                                <div className='games_filter_checkbox'>
                                    <input type='checkbox' value={'60 min'} />
                                    <p>60 min</p>
                                </div>

                                <div className='games_filter_checkbox'>
                                    <input type='checkbox' value={'90 min '} />
                                    <p>90 min </p>
                                </div>

                                <div className='games_filter_checkbox'>
                                    <input type='checkbox' value={'0.5 day '} />
                                    <p>0.5 day </p>
                                </div>
                                <div className='games_filter_checkbox'>
                                    <input type='checkbox' value={'1 day'} />
                                    <p>1 day</p>
                                </div>
                                <div className='games_filter_checkbox'>
                                    <input type='checkbox' value={'3 days'} />
                                    <p>3 days</p>
                                </div>
                                <div className='games_filter_checkbox'>
                                    <input type='checkbox' value={'5+ days'} />
                                    <p>5+ days</p>
                                </div>
                                <div className='games_filter_checkbox'>
                                    <input type='checkbox' value={'Custom'} />
                                    <p>Custom</p>
                                </div>
                            </div>}
                        </div>
                    </div>

                    <div className='games_button_dropdown_rapper'>
                        <button className='base_btn_design'>Apply <img src={buttonIcon} /></button>
                        <button>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GamesFilterSidebar
