import React from 'react';
import '../../App.css';
import styles from "../services/Services.module.css";
import Service from "./Service";
import Title from "../title/Title";

function Services() {
  return (
    <div className="DarkBg">
        <div className="container">
        <div className='wrapp'>
            <Title title='Мои сервисы'/>
            <div className={styles.servicesWrap}>
            <Service title='web design' text=''/>
            <Service title='WEB DEVELOPMENT' text=''/>
            <Service title='LOGO DESIGN' text=''/>
            <Service title='MARKETING' text=''/>
            <Service title='DESIGN' text=''/>
            <Service title='BRANDING' text=''/>
            </div>
        </div>
        </div>
    </div>
  );
}

export default Services;
