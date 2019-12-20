import React from 'react';
import '../../App.css';
import styles from "../services/Service.module.css";

function Service(props) {
  return (
    <div className={styles.serviceStyles}>
    <div className={styles.icon}></div>
       <h4>{props.title}</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...</p>
    </div>
  );
}

export default Service;
