import React from 'react';
import styles from './Profile.module.sass';

export default function Profile(props) {
  return (
    <div className={styles.Profile}>
      <p>Birthplace: Gomel, Belarus</p>
      <p>Age: 26</p>
      <p>Education: Gymnasium 10, Skorina GSU (russian philology), Rolling Scopes School</p>
    </div>
  );
}
