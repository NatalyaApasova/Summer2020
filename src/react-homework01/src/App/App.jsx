import React from 'react';
import './App';
import Header from '../Header/Header.jsx'
import Main from '../Main/Main.jsx'
import Footer from '../Footer/Footer.jsx'

function App(props) {
  return (
    <div className="App">
      <Header userData={props.userData.user} />
      <Main userData={props.userData.avatar}/>
      <Footer />      
    </div>
  );
}

export default App;
