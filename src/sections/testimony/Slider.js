import React from 'react';
import '../../App.css';
import styles from './Slider.module.css';

function Slider() {
  return (
    <div className={styles.sliderWrap}>
        <div className={styles.icon}></div>
        <div className={styles.descript}>
            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
            <span>Jon Doe, Web Developer</span>
        </div>
    </div>
  );
}

export default Slider;
