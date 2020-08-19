import React from 'react';
import styles from './Main.module.sass';
import CardsContainer from '../Card/CardsContainer.js'

function Main(props) {
  return (
    <main className={styles.Main}>
      <div>
        <img className={styles.Avatar}
          src={props.userData.image}
          alt={props.userData.alt}
        />
      </div>
      <div>
        <CardsContainer />
      </div>
    </main>
  );
}

export default Main;
