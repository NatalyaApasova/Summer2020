import React from 'react';
import styles from './Main.module.sass';

function Main(props) {
  return (
    <main className={styles.Main}>
      <div>
        <img className={styles.Avatar}
          src={props.userData.image}
          alt={props.userData.alt}
        />
      </div>
    </main>
  );
}

export default Main;
