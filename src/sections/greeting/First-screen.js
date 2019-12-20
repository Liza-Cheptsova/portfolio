import React from 'react';
import '../../App.css';
import styles from './First-screen.module.css';
import Greeting from "./greetingText/Greeting";
import MyPhoto from "./myPhoto/MyPhoto";


function First_screen() {
    return (
        <section className={`${styles.fullScreen} ${styles.darkBg} ${styles.centring}`}>
                <div className="container">
                   <Greeting/>
                    <MyPhoto/>
                </div>
        </section>
    );
}

export default First_screen;
