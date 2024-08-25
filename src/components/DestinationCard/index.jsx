import React from 'react';
import styles from './DestinationCard.module.scss';

function DestinationCard(props) {
    const {eachItemList} = props;
    return (
        <li className={`${styles.destinationCard}`}>
            <div className={`${styles.imageWrapper}`}>
                <img src={eachItemList.imgUrl} alt="" />
            </div>
            <p className={`${styles.destinationName}`}>{eachItemList.name}</p>
        </li>
    )
}

export default DestinationCard