import React from 'react';
import styles from './Header.module.sass';

function Header(props) {
  return (
    <header className={styles.Header}>
      <div className={styles.UsernameBlock}>
        <p>{props.userData.firstName} {props.userData.lastName}</p>
      </div>
    </header>
  );
}

export default Header;
