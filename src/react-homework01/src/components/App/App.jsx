import React from 'react';
import styles from './App.module.sass';
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

export default function App(props) {
  const { user, avatar } = props.userData;
  return (
    <div className={styles.App}>
      <Header userData={user} />
      <Main userData={avatar} />
      <Footer />
    </div>
  );
}
