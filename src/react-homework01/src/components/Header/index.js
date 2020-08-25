import React from 'react';
import styles from './Header.module.sass';

function Header(props) {
  const {firstName, lastName} = props.userData;
  return (
    <header className={styles.Header}>
      <div className={styles.UsernameBlock}>
        <p>{firstName} {lastName}</p>
      </div>
    </header>
  );
}

export default Header;
