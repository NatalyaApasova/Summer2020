import React from 'react';
import './Main.sass';

function Main(props) {
  return (
    <main className='Main'>
      <div>
        <img className="Avatar"
          src={props.userData.image}
          alt={props.userData.alt}
        />
      </div>
    </main>
  );
}

export default Main;
