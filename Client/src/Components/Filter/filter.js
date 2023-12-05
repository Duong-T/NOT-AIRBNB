import './filter.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'

const Filter = () => {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        actions.getCategories(dispatch)
    }, [])

    const categories = useSelector((state) => state.app.categories)
    console.log(categories)
    console.log(selectedFilters)

    const handlePickFilter = (item) => {
        // if (selectedFilters.includes(item)) {
        //     let filters = selectedFilters.filter((el) => el !== item);
        //     setSelectedFilters(filters);
        // } else {
        setSelectedFilters([item]);
        // }
    }
    const filter = document.querySelector('.filter-content');
    const managerFilter = () => {
        const leftArrow = document.querySelector('.left-arrow');
        const rightArrow = document.querySelector('.right-arrow');
        if (filter.scrollLeft >= 20) {
            leftArrow.classList.add("active")
        } else {
            leftArrow.classList.remove("active")
        }

        let maxScrollValue = filter.scrollWidth - filter.clientWidth - 20;

        if (filter.scrollLeft >= maxScrollValue) {
            rightArrow.classList.remove("active")
        } else {
            rightArrow.classList.add("active")
        }
    }

    const handleRightArrow = () => {
        filter.scrollLeft += 200;
        managerFilter();
    }
    const handleLeftArrow = () => {
        filter.scrollLeft -= 100;
        managerFilter();
    }

    return (
        <section>
            <div className='filter-container'>
                <div className='pick-filter'>
                    <div className='left-arrow'
                        onClick={handleLeftArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </div>
                    <div className='filter-content'>
                        {categories.length > 0 ? categories.map((item, index) => {
                            return (
                                <div href={item.code} key={item.id} className={`filter-item 
                                ${selectedFilters?.includes(item) ? "active" : ""}
                                ${(selectedFilters.length === 0 && index === 0) ? "active" : ""}`}

                                    onClick={() => handlePickFilter(item)}
                                >
                                    <img src={item.icon} className='icon-filter' />
                                    <a className='name-filter'>{item.name}</a>
                                </div>
                            )
                        }) : <></>}
                    </div>

                    <div className='right-arrow active'
                        onClick={handleRightArrow}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>
                </div>
                <div className='select-filter'>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false">
                            <path fill="none" d="M7 16H3m26 0H15M29 6h-4m-8 0H3m26 20h-4M7 16a4 4 0 1 0 8 0 4 4 0 0 0-8 0zM17 6a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 20a4 4 0 1 0 8 0 4 4 0 0 0-8 0zm0 0H3">
                            </path>
                        </svg>
                    </div>
                    <div>
                        Filters
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Filter;