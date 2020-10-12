import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import styles from './Header.module.sass';
import {fakeAuth} from '../App/App.jsx';

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthentificated
    ? <p>
        <button className={styles.SignOutButton} onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    : <p className={styles.NotLogged}>You are not logged in</p>
))

function Header(props) {
  const {firstName, lastName} = props.userData;
  return (
          <header className={styles.Header}>
            <>
              <div className={styles.NavBlock}>
                <NavLink to="/profile">PROFILE</NavLink>
                <NavLink to="/cards">CARDS</NavLink>
              </div>
              <div className={styles.UsernameBlock}>
                <p>{firstName} {lastName}</p>
              </div>
            </>
            <AuthButton />
          </header>
        );
}

export default Header;
