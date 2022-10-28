import React, {useState} from 'react';
import styles from'./Carousel.module.css'

const Carousel = (props) => {
    const {children, numItemsToShow, cardSelected, isFinite} = props
    const [startingIndex, setStartingIndex] = useState(0);

    const endOfContent = children.length - numItemsToShow;

    const next = () => {
        const arrLength = children.length;
        setStartingIndex((((startingIndex + 1) % arrLength + arrLength) % arrLength));
    }
    const prev = () => {
        const arrLength = children.length;
        setStartingIndex((((startingIndex - 1) % arrLength + arrLength) % arrLength));
    }

    /**
     * return a sliced array in the length of the given numItemsToShow.
     * In case the startingIndex + numItemsToShow is out of array's index boundaries, the function will continue the slice
     * operation from index zero
     * @param array - array to slice
     * @param startingIndex - the index to start the slice from
     * @param slicedArrayLength - number of items in sliced array
     * @returns {*[]|*}
     */
    const cyclicSlicedArray = (array, startingIndex, slicedArrayLength) => {
        if (array.length < slicedArrayLength) {
            return array;
        }

        if (startingIndex > (array.length - slicedArrayLength)) {
            return [...(array.slice(startingIndex, array.length)),
                ...array.slice(0, slicedArrayLength - (array.length - startingIndex))];
        }
        return array.slice(startingIndex, startingIndex + slicedArrayLength)
    }

    return (<div className={styles.carouselContainer} onClick={cardSelected}>
            <button onClick={prev} className={isFinite && startingIndex === 0 ? styles.hiddenLeft : styles.leftArrow}/>
            <div className={styles.carouselContent}>
                {cyclicSlicedArray(children, startingIndex, numItemsToShow)}
            </div>

            <button onClick={next} className={isFinite && endOfContent <= startingIndex ? styles.hiddenRight : styles.rightArrow}/>
        </div>)

}

export default Carousel;