import React from 'react';
import { Redirect } from 'react-router-dom';
import styles from './LoginPage.module.sass';

export default function LoginPage(props) {
  const { isLogged } = props.authState;

  const handleInputChange = function(e) {
    const { value, name } = e.target;
    props.setLoggedUserData({ [name]: value });
  }

  const handleSubmit = function() {
    if (props.userData.user.login && props.userData.user.password) {
      props.setLoggedState({ isLogged: true })
    }
  }

  const { from } = props.location.state || { from: { pathname: '/' } }

  return (
    !isLogged
      ? 
        (  
          <div className={ styles.LoginWrapper }>
            <div>
              login: <input type="text" placeholder="login" name="login" onInput={ handleInputChange } required></input>
            </div>
            <div>
              password: <input type="password" placeholder="password" name="password" onInput={ handleInputChange } required></input>
            </div>
            <button onClick={ handleSubmit }>Log in</button>
         </div>
        )
      : (
          <>    
            <Redirect to={{
              pathname: '/profile',
              state: { from: { from } }
            }} />
          </>
        )
  )
}
