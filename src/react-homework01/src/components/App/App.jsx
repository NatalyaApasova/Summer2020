import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import styles from './App.module.sass';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

export const fakeAuth = {
  isAuthentificated: false,
  authenticate(cb) {
    this.isAuthentificated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthentificated = false
    setTimeout(cb, 100)
  }
}

export default function App(props) {
  const {user, avatar} = props.userData;
  return (
    <Router>
      <div className={styles.App}>
        <Header userData={user} />
        <Main userData={avatar} />
        <Footer />
      </div>
    </Router>
  );
}
