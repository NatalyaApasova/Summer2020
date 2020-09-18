import React from 'react';
import styles from './CardsCreationForm.module.sass';

export default function CardsCreationForm(props) {
  return (
    <div className={styles.CardsCreationForm}>
      <input type="text" placeholder="image URL" name="image" onChange={props.inputChange}></input>
      <input type="text" placeholder="title" name="title" onChange={props.inputChange}></input>
      <input type="text" placeholder="gender" name="gender" onChange={props.inputChange}></input>
      <input type="text" placeholder="price" name="price" onChange={props.inputChange}></input>
      <button type="submit" onClick={props.addCard}>Submit</button>
    </div>
  );
}


