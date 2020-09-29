import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import styles from './Main.module.sass';
import LoginPageContainer from '../LoginPage/LoginPageContainer.js';
import {CardsPageContainer} from '../Card/containers.js';
import Profile from '../Profile';
import authState from '../../redux/reducers/auth.js';
import { userData } from '../../redux/reducers/user.js';

function Main(props) {
  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={() => (
      props.authState.isLogged
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    )} />
  )

  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Redirect push to="/login"></Redirect>} />
        <Route path="/login" component={LoginPageContainer} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/cards" component={CardsPageContainer} />
      </Switch>
    </main>
  );
}

export default Main;
