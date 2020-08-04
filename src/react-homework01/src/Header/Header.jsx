import React from 'react';
import './Header.sass';

function MapList(props) {
  const list = props.list;
  const listMapping = list.map((item, key) =>
      <li className='ListItem' key = {key}>{item}</li>
    )
  return (
    <ul className="NavigationList">{listMapping}</ul>
  )
}

function Header(props) {
  const navigation = ['Home', 'Friends', 'Messages', 'Articles', 'Photos'];
  return (
    <div className='Header'>
      <nav className='Navigation'>
        <MapList list={navigation} />
      </nav>
      <div className='UsernameBlock'><p>{props.userData.firstName} {props.userData.lastName}</p></div>
    </div>
  );
}

export default Header;
