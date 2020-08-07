import React from 'react';
import './App';
import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

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
