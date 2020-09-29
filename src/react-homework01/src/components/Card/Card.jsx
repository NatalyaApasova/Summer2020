import React from 'react';
import styles from './Card.module.sass';
import { cardsState } from '../../redux/reducers/cards.js';

export default function Card(props) {
  const { id, image, title, gender, price } = props.cardsState.cards;
  return (
    <div className={styles.Card}> 
      <button className={styles.RemoveButton} id={id} onClick={() => props.removeCard(id)}>X</button>
      <div className={styles.CardImgWrapper}>
        <img src={image} className={styles.CardImg} alt="no image" width="130" height="140"></img>
      </div>
      <div>
        <p>{title}</p>
        <p>{gender}</p>
        <p>price: {price}</p>
      </div>
    </div>
  );
}
