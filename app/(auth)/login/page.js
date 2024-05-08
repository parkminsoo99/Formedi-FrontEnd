import React from 'react';
import styles from './login.module.css';
import Image from 'next/image';

export default function login(){

    return(
        <div className={styles.loginContainer}>
            <div className={styles.inputContainer}>
                <div className={styles.login}>
                    User Login
                </div>
                <input type="text" className={styles.inputBox} placeholder="Username" />
                <input type="password" className={styles.inputBox} placeholder="Password" />
                <div className={styles.checkboxContainer}>
                    <label className={styles.checkboxLabel} htmlFor="autoLogin">
                        <span className={styles.checkbox}></span>
                        Remember Me
                    </label>
                </div>
            </div>
        </div>
    )
}