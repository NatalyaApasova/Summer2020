import React from 'react';
import styles from './Card.module.sass';

export default function Card(props) {
  return (
    <div className={styles.Card}>
      <div className={styles.CardElemWrapper}>
        <img width="100" height="140" src={props.data.imageUrl} alt=""></img>
      </div>
      <div className={styles.CardElemWrapper}>
        <p>{props.data.title}</p>
        <p>{props.data.gender}</p>
        <p>price: {props.data.price}</p>
      </div>
    </div>
  );
}
