import React from 'react';
import styles from './Card.module.sass';

export default function Card(props) {
  return (
    <div className={styles.Card}>
      <p>{props.data.imageUrl}</p>
      <p>{props.data.title}</p>
      <p>{props.data.gender}</p>
      <p>{props.data.price}</p>
    </div>
  );
}
