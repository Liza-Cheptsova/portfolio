import React from 'react';
import '../../App.css';
import styles from './Filter.module.css'
import Title from "../title/Title";

function Filter() {
  return (
    <div className='wrapp'>
        <Title title='Мои работы'/>
      <div className={styles.filter}>
        <ul>
          <li className={styles.active}>Все</li>
          <li>Слайдшоу</li>
          <li>Видео</li>
          <li>Картинки</li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
