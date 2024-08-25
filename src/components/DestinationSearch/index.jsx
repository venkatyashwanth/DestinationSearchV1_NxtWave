import React, { useEffect, useState } from 'react';
import styles from "./DestinationSearch.module.scss";
import DestinationCard from '../DestinationCard';

const destinationsList = [
    {
        id: 1,
        name: 'Melaka Mosque',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/melaka-mosque-img.png',
    },
    {
        id: 2,
        name: 'Shrubland',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
    },
    {
        id: 3,
        name: 'New York',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/new-york-img.png',
    },
    {
        id: 4,
        name: 'Escarpment',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/escarpment-img.png',
    },
    {
        id: 5,
        name: 'Westminster Abbey',
        imgUrl:
            'https://assets.ccbp.in/frontend/react-js/westminster-abbey-img.png',
    },
    {
        id: 6,
        name: 'South Downs National Park',
        imgUrl:
            'https://assets.ccbp.in/frontend/react-js/south-downs-national-park-img.png',
    },
    {
        id: 7,
        name: 'National Historic Site',
        imgUrl:
            'https://assets.ccbp.in/frontend/react-js/national-historic-site-img.png',
    },
    {
        id: 8,
        name: 'Tower Bridge',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tower-bridge-img.png',
    },
    {
        id: 9,
        name: 'Arc Here',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/arc-here-img.png',
    },
    {
        id: 10,
        name: 'Steeple',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/steeple-img.png',
    },
    {
        id: 11,
        name: 'Glaciokarst',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/glaciokarst-img.png',
    },
    {
        id: 12,
        name: 'Parco Nazionale delle Cinque Terre',
        imgUrl:
            'https://assets.ccbp.in/frontend/react-js/parco-nazionale-delle-cinque-terre-img.png',
    },
]

function DestinationSearch() {
    const [initialDestinationList, setInitialDestinationList] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        setInitialDestinationList(destinationsList);
        setFilteredList(destinationsList);
    }, [])

    const handleSearch = (event) => {
        const userInput = event.target.value;
        setSearchTerm(userInput);
        const filteredItems = initialDestinationList.filter(eachItem =>
            eachItem.name.toLowerCase().includes(userInput.toLowerCase())
        )
        setFilteredList(filteredItems)
    }

    return (
        <div className={`${styles.appBg}`}>
            <div className={`${styles.appContent}`}>
                <h1>Destination Search</h1>
                <div className={`${styles.inputContainer}`}>
                    <input type="search" placeholder='Search' onChange={handleSearch} value={searchTerm}/>
                    <span className={`${styles.imageElement}`}>
                        <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" alt="search icon" />
                    </span>
                </div>
                <ul className={`${styles.cardsWrapper}`}>
                    {
                        filteredList.length === 0 ?
                            <div  className={`${styles.notFoundText}`}>
                                <p>Not Found</p>
                            </div>
                            :
                            filteredList.map((eachItem) =>
                                <DestinationCard key={eachItem.id} eachItemList={eachItem} />
                            )
                    }
                </ul>

            </div>
        </div >
    )
}

export default DestinationSearch