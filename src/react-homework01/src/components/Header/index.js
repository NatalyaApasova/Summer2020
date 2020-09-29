import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import styles from './Header.module.sass';
import {authState} from '../../redux/reducers/auth.js';
import {userData} from '../../redux/reducers/user.js';

function Header(props) {
  const AuthButton = withRouter(({ history }) => (
    props.authState.isLogged
      ? <div>
          <button
            className={styles.SignOutButton}
            onClick={() => {
              props.setUnloggedData();
              props.setUnloggedState();
              history.push('/');
       }}>Sign out</button>
        </div>
      : <p className={styles.NotLogged}>{props.authState.text}</p>
  ))

  return (
    <header className={styles.Header}>
      <>
        {
          props.authState.isLogged
            ? (
                <div className={styles.NavBlock}>
                  <NavLink to="/profile">PROFILE</NavLink>
                  <NavLink to="/cards">CARDS</NavLink>
                </div>
              )
            : null
        }
        <div className={styles.UsernameBlock}>
          <p>{props.authState.isLogged
            ? props.userData.user.login
            : null}</p>
        </div>
      </>
      <AuthButton />
    </header>
  );
}

export default Header;
