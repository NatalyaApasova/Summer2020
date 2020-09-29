import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import styles from './App.module.sass';
// import Header from '../Header';
import HeaderContainer from '../Header/HeaderContainer'
import MainContainer from '../Main/MainContainer';
import Footer from '../Footer';

export default function App(props) {
  return (
    <Router>
      <div className={styles.App}>
        <HeaderContainer />
        <MainContainer />
        <Footer />
      </div>
    </Router>
  );
}
