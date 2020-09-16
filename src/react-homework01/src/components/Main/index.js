import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import styles from './Main.module.sass';
import LoginPageContainer from '../LoginPage/LoginPageContainer.js';
import CardsContainer from '../Card/CardsContainer.js';
import Profile from '../Profile';
import {fakeAuth} from '../App/App.jsx';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthentificated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
  )} />
)

function Main(props) {
  const {image, alt} = props.userData;
  return (
    <main className={styles.Main}>
      <img className={styles.Avatar}
        src={image}
        alt={alt}
      />
      <Switch>
        <Route exact path="/" render={() => <Redirect push to="/login"></Redirect>} />
        <Route path="/login" component={LoginPageContainer} />
        <PrivateRoute path="/profile" userData={image} component={Profile} />
        <PrivateRoute path="/cards" component={CardsContainer} />
      </Switch>
    </main>
  );
}

export default Main;
