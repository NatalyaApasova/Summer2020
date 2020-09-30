import React from 'react';
import styles from './CardsCreationForm.module.sass';

export default function CardsCreationForm(props) {
  let newCard = {
    id: '',
    image: '',
    title: '',
    gender: '',
    price: ''
  }
  let id;

  const handleInputChange = function(e) {
    const { value, name } = e.target;
    newCard = Object.assign({}, newCard, {
      id: id,
      [name]: value
    })
  };

  const handleSubmit = function() {
    const { addCard } = props;
    let id =  Math.floor(Math.random() * (9999999 - 9) + 9);
    newCard = Object.assign({}, newCard, {
      id: id
    })
    if (newCard['title'] && newCard['gender'] && newCard['price']) {
      addCard(newCard);
    }
  }

  return (
    <div className={styles.CardsCreationForm}>
      <>
        <div className={styles.InputWrapper}>
          <input type="text" placeholder="image URL" name="image" onInput={handleInputChange} required></input>
        </div>
        <div className={styles.InputWrapper}>
          <input className={styles.Input} type="text" placeholder="title" name="title" onInput={handleInputChange} required></input>
        </div>
        <div className={styles.InputWrapper}>
          <input className={styles.Input} type="text" placeholder="gender" name="gender" onInput={handleInputChange} required></input>
        </div>
        <div className={styles.InputWrapper}>
          <input className={styles.Input} type="number" placeholder="price" name="price" onInput={handleInputChange} required></input>
        </div>
      </>
      <>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </>
    </div>
  )
}
