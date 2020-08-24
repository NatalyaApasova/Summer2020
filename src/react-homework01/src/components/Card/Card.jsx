import React from 'react';
import styles from './Card.module.sass';

export default function Card(props) {
  const { id, imageUrl, title, gender, price } = props.data;
  return (
    <div className={styles.Card}>
      <div className={styles.cardImgWrapper}>
        <img src={imageUrl} className={styles.cardImg} alt="" width="130" height="140"></img>
      </div>
      <div>
        <p>{title}</p>
        <p>{gender}</p>
        <p>price: {price}</p>
      <button className={styles.RemoveButton}>X</button>
      <div className={styles.cardImgWrapper}>
        <img src={props.data.imageUrl} className={styles.cardImg} alt="" width="130" height="140"></img>
      </div>
      <div>
        <p>{props.data.title}</p>
        <p>{props.data.gender}</p>
        <p>price: {props.data.price}</p>
      </div>
    </div>
  );
}
