import React from 'react';
import styles from './CardsCreationForm.module.sass';

export default function CardsCreationForm(props) {
  return (
    <div className={styles.CardsCreationForm}>
      <input type="text" placeholder="image URL"></input>
      <input type="text" placeholder="title"></input>
      <input type="text" placeholder="gender"></input>
      <input type="text" placeholder="price"></input>
      <button type="submit">Submit</button>
    </div>
  );
}


