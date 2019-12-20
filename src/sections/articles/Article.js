import React from 'react';
import '../../App.css';
import styles from './Article.module.css';

function Article(props) {
  return (
        <article className={styles.articleWrap}>
            <img src={props.img} alt=""/>
            <div className={styles.indents}>
                <h4>{props.title}</h4>
                <p>{props.text}</p>
                <a href="">READ MORE</a>
            </div>
        </article>
  );
}

export default Article;
