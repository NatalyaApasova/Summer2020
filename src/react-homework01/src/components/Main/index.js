import React from 'react';
import styles from './Main.module.sass';
import CardsContainer from '../Card/CardsContainer.js'

function Main(props) {
  const {image, alt} = props.userData;
  return (
    <main className={styles.Main}>
      <div>
        <img className={styles.Avatar}
          src={image}
          alt={alt}
        />
      </div>
      <div>
        <CardsContainer />
      </div>
    </main>
  );
}

export default Main;
