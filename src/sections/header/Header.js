import React from 'react';
import '../../App.css';
import styles from './Header.module.css'

function Header() {
    function menu() {
let test = document.querySelector('styles.burger');
console.log(test);
    }
  return (
    <div className={styles.burgerWrap}>
        <div className={styles.burgerAll} onClick={menu}>
      <span className={styles.burger}></span>
        </div>
    </div>
  );
}

export default Header;
