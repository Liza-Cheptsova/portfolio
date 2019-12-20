import React from 'react';
import '../../App.css';
import styles from './Articles.module.css';
import Article from "./Article";
import Button from "../button/Button";
import Title from "../title/Title";

function Articles() {
  return (
    <div className="DarkBg">
        <div className={'container'}>
            <div className={'wrapp'}>
                <Title title='Статьи'/>
                <div className={styles.d_flex}>
                    <Article img='https://images.golos.io/DQmdD1cks7pUkKjvcMhPotVK8CjT8cbjyroGUTrDBZsJYWH/%D0%B0%D0%B8%D1%80%D1%80.jpg' title='10 tips for drawing with coloured pencils' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
                    <Article img='https://alonti.ru/uploads/templates/origins/2019/94360dd6eb54f15cb3208d350cbd17d6.jpg' title='The single greatest gift to get your friend who always travels' text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim...'/>
                </div>
                <Button text='смотреть больше'/>
            </div>
        </div>
    </div>
  );
}

export default Articles;
