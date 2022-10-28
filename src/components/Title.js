import React from 'react';
import styles from './Title.module.css'
import memomiImage from './memomi.jpg';

const Title = () => {
    return (
        <div className={styles.title}>
            <a href={"https://memorymirror.com"} className={styles.logoLink}>
                <img className={styles.imgLogo} src={memomiImage} alt={'memomi-logo'}/>
            </a>

            <h1>Memomi Glasses Store</h1>
            <h2>Come Shop Your Favourite Shades</h2>

        </div>
    )
}

export default Title;