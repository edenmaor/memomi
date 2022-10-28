import React from 'react';
import styles from './Card.module.css'

const Card = ({item, clickedCardHandler, cardStyle, closedCardHandler}) => {
    /**
     * call the provided callback when click on the card occurs
     */
    const handleClickEvent = () => {
        if (clickedCardHandler) {
            clickedCardHandler(item);
        }
    }

    /**
     * call the provided callback when clicking on the 'x' icon
     */
    const closeCardExpanded = () => {
        if (closedCardHandler) {
            closedCardHandler(item);
        }
    }

    return (

        <div className={cardStyle === 'expanded' ? styles.cardExpanded : styles.card} onClick={handleClickEvent}>
            {cardStyle === 'expanded' ?
                <div className={styles.header}>
                    <a className={styles.cancelIcon} aria-label={'Close'} onClick={closeCardExpanded}/>
                    <h1 className={styles.headerTitle}>
                        Our Fall-Winter 2023 Collection
                    </h1>
                    <a href={"https://memorymirror.com"} className={styles.buyLink}>SHOP</a>
                </div> : ""}
            <div className={styles.itemDetails}>
                <div className={styles.cardImage}>
                    <img src={item.ObjectsLocation + "/" + item.Id + "/" + item.Image} className={styles.imgItem}/>
                </div>
                <div className={styles.cardDetails}>
                    <span className={styles.itemId}>{item.Id} </span>
                    <span className={styles.itemPrice}>{'$' + (item.Id).slice(-2) + '.00'}</span>
                </div>
            </div>
        </div>
    )
}
export default Card;