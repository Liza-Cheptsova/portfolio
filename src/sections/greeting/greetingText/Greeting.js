import React from 'react';
import '../../../App.css';
import styles from './Greeting.module.css';

function Greeting() {
    return (
        <div className={styles.greeatingTitles}>
            <span>Здравсвтуйте</span>
            <h1>Меня зовут <span>Чепцова Елизавета</span></h1>
            <p>Я frontend разработчик</p>

        </div>
    );
}

export default Greeting;
