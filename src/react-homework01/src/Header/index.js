import React from 'react';
import styles from './Header.module.sass';

function MapList(props) {
  const list = props.list;
  const listMapping = list.map((item, key) =>
      <li className={styles.ListItem} key = {key}>{item}</li>
    )
  return (
    <ul className={styles.NavigationList}>{listMapping}</ul>
  )
}

function Header(props) {
  const navigation = ['Home', 'Friends', 'Messages', 'Articles', 'Photos'];
  return (
    <div className={styles.Header}>
      <nav className={styles.Navigation}>
        <MapList list={navigation} />
      </nav>
      <div className={styles.UsernameBlock}><p>{props.userData.firstName} {props.userData.lastName}</p></div>
    </div>
  );
}

export default Header;
