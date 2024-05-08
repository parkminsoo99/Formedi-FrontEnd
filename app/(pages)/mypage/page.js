import React from 'react';
import styles from './mypage.module.css';

export default function mypage(){
    return(
        <div className={styles.myContainer}>
            <div className={styles.backgroundBox}>
                <div className={styles.innerBox}>
                    UserId, Welcome!
                </div>
            </div>
        </div>
    )
}