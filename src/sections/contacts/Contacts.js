import React from 'react';
import '../../App.css';
import styles from './Contacts.module.css'
import Title from "../title/Title";

function Contacts() {
  return (
    <div className="DarkBg">
        <div className={"container"}>
            <div className={"wrapp"}>
                <Title title='Контакты'/>
                <form className={styles.form} action="">
                    <input type="text" placeholder={'Ваше имя'}/>
                    <input type="email" placeholder={'Ваш email'}/>
                    <textarea name="" id="" cols="30" rows="10" placeholder={'Сообщение'}></textarea>
                    <button type="submit">Отправить</button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default Contacts;
