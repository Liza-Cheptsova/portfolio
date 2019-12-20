import React from 'react';
import '../../App.css';
import styles from './Footer.module.css';

function Footer() {
  return (
    <div className="LighterBg">
    <div className="container">
        <div className={styles.footer}>
            <nav>
                <a href="">Facebook</a>
                <a href="">Twitter</a>
                <a href="">Vk</a>
                <a href="">Linkedin</a>
            </nav>
            <p>© 2019</p>
        </div>
    </div>
    </div>
  );
}

export default Footer;
