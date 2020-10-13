import React from 'react';
import styles from './Profile.module.sass';

export default function Profile(props) {
  return (
    <img className={styles.Avatar} src='https://asictrade.com/catalog/view/theme/default/image/user-icon.png' alt='Avatar is here' />,
    <div className={styles.Profile}>
      <p>Birthplace: Gomel, Belarus</p>
      <p>Age: 26</p>
      <p>Education: Gymnasium 10, Skorina GSU (russian philology), Rolling Scopes School</p>
    </div>
  );
}
