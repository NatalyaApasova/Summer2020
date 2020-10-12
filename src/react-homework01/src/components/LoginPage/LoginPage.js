import React from 'react';
import styles from './LoginPage.module.sass';

export default function LoginPage(props) {
  const {submitData, inputChange} = props;
  return (
    <div className={styles.LoginWrapper}>
      <div>
        login: <input type="text" placeholder="login" name="login" onChange={inputChange} required></input>
      </div>
      <div>
        password: <input type="password" placeholder="password" name="password" onChange={inputChange} required></input>
      </div>
      <button type="submit" onClick={submitData}>Log in</button>
    </div>
  )
}
