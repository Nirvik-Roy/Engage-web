import './Gamesfilter.css'
import searchIcon from '../../../assets/Search (1).svg'
import {  useState } from 'react'
import buttonIcon from '../../../assets/svg159.svg'
import { useSearchParams } from 'react-router-dom'
import toast from 'react-hot-toast'
const Gamesfilter = () => {
    const [useCase, setuseCase] = useState(true);
    const [duration, setduration] = useState(true)
    const [checkBoxValue,setcheckboxValue] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const handleQuery = () =>{
        if(checkBoxValue !=''){
            searchParams.set('filter',checkBoxValue)
            setSearchParams(searchParams)
        }else{
            toast.error('Plz select any one filter!')
        }
    }
    return (
        <>
            <div className='games_filter_wrapper'>
                <div className='search_input'>
                    <input placeholder='Search..' />
                    <img src={searchIcon} />
                </div>

                <div className='games_filter_dropdown_wrapper'>
                    <div className='games_filter'>
                        <div onClick={(() => setuseCase(!useCase))} className='games_filter_head'>
                            <h4>Solutions</h4>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>

                        {useCase && <div className='games_filter_checkbox_Wrapper'>
                            <div className='games_filter_checkbox'>
                                <input type='checkbox' onChange={((e) => setcheckboxValue(e.target.value))} checked={checkBoxValue == 'NGAGE Rhythm'} value={'NGAGE Rhythm'} />
                                <p>NGAGE Rhythm</p>
                            </div>

                            <div className='games_filter_checkbox'>
                                <input type='checkbox' onChange={((e) => setcheckboxValue(e.target.value))} checked={checkBoxValue == 'NGAGE Play Day'} value={'NGAGE Play Day'} />
                                <p>NGAGE Play Day</p>
                            </div>

                            <div className='games_filter_checkbox'>
                                <input type='checkbox' onChange={((e) => setcheckboxValue(e.target.value))} checked={checkBoxValue == 'NGAGE Launchpad'} value={'NGAGE Launchpad'} />
                                <p>NGAGE Launchpad</p>
                            </div>

                            <div className='games_filter_checkbox'>
                                <input type='checkbox' onChange={((e) => setcheckboxValue(e.target.value))} checked={checkBoxValue == 'NGAGE Live'} value={'NGAGE Live'} />
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
                    <button className='base_btn_design' onClick={handleQuery}>Apply <img src={buttonIcon}/></button>
                    <button>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Gamesfilter
