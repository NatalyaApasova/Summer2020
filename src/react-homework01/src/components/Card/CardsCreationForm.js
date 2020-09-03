import React from 'react';
import styles from './CardsCreationForm.module.sass';

export default function CardsCreationForm(props) {
  const {addCard, inputChange} = props;
  const {titleWarning, genderWarning, priceWarning} = props.data;
  return (
    <div className={styles.CardsCreationForm}>
      <div className={styles.InputWrapper}>
        <input type="text" placeholder="image URL" name="image" onChange={inputChange} required></input>
      </div>
      <div className={styles.InputWrapper}>
        <input className={styles.Input} type="text" placeholder="title" name="title" onChange={inputChange} required></input>
        {
          titleWarning ? <div className={styles.Warning}>{titleWarning}</div> : null
        }
      </div>
      <div className={styles.InputWrapper}>
        <input className={styles.Input} type="text" placeholder="gender" name="gender" onChange={inputChange} required></input>
        {
          genderWarning ? <div className={styles.Warning}>{genderWarning}</div> : null
        }
      </div>
      <div className={styles.InputWrapper}>
        <input className={styles.Input} type="number" placeholder="price" name="price" onChange={inputChange} required></input>
        {
          priceWarning ? <div className={styles.Warning}>{priceWarning}</div> : null
        }
      </div>
      <button type="submit" onClick={addCard}>Submit</button>
    </div>
  );
}
