import React from 'react';
import styles from './Card.module.sass';

export default function Card(props) {
  const { id, imageUrl, title, gender, price } = props.data;
  return (
    <div className={styles.Card}>
      <button className={styles.RemoveButton} id={id} onClick={() => props.remove(this, id)}>X</button>
      <div className={styles.CardImgWrapper}>
        <img src={imageUrl} className={styles.CardImg} alt="no image" width="130" height="140"></img>
      </div>
      <div>
        <p>{title}</p>
        <p>{gender}</p>
        <p>price: {price}</p>
      </div>
    </div>
  );
}
