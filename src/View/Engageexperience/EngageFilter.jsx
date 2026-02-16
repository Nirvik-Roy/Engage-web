import React, { useEffect } from 'react'
import searchIcon from '../../assets/Search (1).svg'
import { useState } from 'react'
import buttonIcon from '../../assets/svg159.svg'
import { useSearchParams } from 'react-router-dom'
const EngageFilter = () => {
    const [useCase, setuseCase] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const filter = searchParams.get('filter')
    const [checkBoxValue, setcheckboxValue] = useState("");
    const category = searchParams.get('category')
    const [firstValue, setfirstValue] = useState();
    const [mainFilterData, setmainFilterData] = useState([]);
    const [price, setPrice] = useState('');
    const [totalPrice, settotalPrice] = useState('')
    useEffect(() => {
        setcheckboxValue(filter)
        setfirstValue(filter)
    }, [filter])
    console.log(filter)
    const handleQuery = () => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('filter', checkBoxValue);
        newParams.set('price', price);
        newParams.set('totalprice', totalPrice)
        setSearchParams(newParams);
    }

    const resetFunc = () => {
        const newParams = new URLSearchParams(searchParams.toString());
        newParams.set('filter', firstValue);

        setSearchParams(newParams);
        setcheckboxValue(firstValue)
    }


    const filterData = [
        {
            title: 'NGAGE Rythm',
            list: [
                {
                    title: 'Rhythm Spark',
                    price: 699,
                    totalPrice: 699,
                },
                {
                    title: 'Rhythm Pulse',
                    price: 1499,
                    totalPrice: 1499
                },
                {
                    title: 'Boost Rhythm',
                    price: 1249,
                    totalPrice: 4996
                },
                {
                    title: 'Build Rhythm',
                    price: 999,
                    totalPrice: 11988
                },
                {
                    title: 'Sustain Rhythm',
                    price: 1999,
                    totalPrice: 23988
                }
            ]
        },
        {
            title: 'NGAGE Launchpad',
            list: [
                {
                    title: 'FOUNDATION',
                    price: 4499,
                    totalPrice: 4499
                },
                {
                    title: 'GROWTH',
                    price: 6999,
                    totalPrice: 6999
                },
                {
                    title: 'ENTERPRISE',
                    price: 6999,
                    totalPrice: 6999
                },
            ]
        },
        {
            title: 'NGAGE Play Day',
            list: [
                {
                    title: '90-Minute Team Building',
                    price:999,
                    totalPrice:999
                },
                {
                    title: 'Half-Day Team Building',
                    price: 2999,
                    totalPrice: 2999
                },
                {
                    title: 'Corporate Fun Day / Sports Day',
                    price: 4999,
                    totalPrice: 4999
                },
            ]
        }
    ]
    useEffect(() => {
        setmainFilterData(filterData.filter((e) => e.title == category))
    }, [filter, category])
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
                            <h4>{category && category}</h4>
                            <i class="fa-solid fa-angle-down"></i>
                        </div>

                        {useCase && <div className='games_filter_checkbox_Wrapper'>
                            {checkBoxValue && mainFilterData?.map((element) => (
                                element.list.map((ele) => (
                                    <div className='games_filter_checkbox'>
                                        <input type='checkbox' checked={checkBoxValue.trim() == ele?.title} onChange={((e) => {
                                            setcheckboxValue(e.target.value)
                                            setPrice(ele.price);
                                            settotalPrice(ele.totalPrice)
                                        })} value={ele.title} />
                                        <p>{ele.title}</p>
                                    </div>
                                ))
                            ))}
                        </div>}
                    </div>

                </div>

                <div className='games_button_dropdown_rapper'>
                    <button onClick={(() => handleQuery())} className='base_btn_design'>Apply <img src={buttonIcon} /></button>
                    <button onClick={(() => {
                        resetFunc()
                    })}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default EngageFilter
