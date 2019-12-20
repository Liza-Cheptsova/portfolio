import React from 'react';
import '../../App.css';
import styles from './Button.module.css';

function Button(props) {
    return (
        <div className={styles.btn}>
            <a href="">{props.text}</a>
        </div>

    );
}

export default Button;
