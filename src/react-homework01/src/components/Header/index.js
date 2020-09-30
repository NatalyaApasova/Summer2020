import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import styles from './Header.module.sass';

function Header(props) {
  const { isLogged } = props.authState;
  const { login } = props.userData.user;
  const { setUnloggedData, setUnloggedState } = props;

  const AuthButton = withRouter(({ history }) => (
    isLogged
      ? <div>
          <button
            className={styles.SignOutButton}
            onClick={() => {
              setUnloggedData();
              setUnloggedState();
              history.push('/');
       }}>Sign out</button>
        </div>
      : <p className={styles.NotLogged}>{props.authState.text}</p>
  ))

  return (
    <header className={styles.Header}>
      <>
        {
          isLogged
            ? (
                <div className={styles.NavBlock}>
                  <NavLink to="/profile">PROFILE</NavLink>
                  <NavLink to="/cards">CARDS</NavLink>
                </div>
              )
            : null
        }
        <div className={styles.UsernameBlock}>
          <p>
            {
              isLogged
                ? login
                : null
            }
          </p>
        </div>
      </>
      <AuthButton />
    </header>
  );
}

export default Header;
