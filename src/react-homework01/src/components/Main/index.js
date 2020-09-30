import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import LoginPageContainer from '../LoginPage/LoginPageContainer.js';
import { CardsPageContainer } from '../Card/containers.js';
import Profile from '../Profile';

function Main(props) {
  const { isLogged } = props.authState;

  return (
    <main>
      <Switch>
        <Route exact path="/" render={ () => <Redirect push to="/login"></Redirect> } />
        <Route path="/login" component={ LoginPageContainer } />
        {
          isLogged
            ? (
                <>
                  <Route path="/profile" component={ Profile } />
                  <Route path="/cards" component={ CardsPageContainer } />
                </>
              )
            : <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
              }} />
        }
      </Switch>
    </main>
  );
}

export default Main;
