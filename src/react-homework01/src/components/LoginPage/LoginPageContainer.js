import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import LoginPage from './LoginPage';
import {fakeAuth} from '../App/App.jsx';

class LoginPageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      login: "",
      password: "",
      isLogged: false,
      redirectToReferrer: false
    }
  }

  handleInputChange = (e) => {
    const target = e.target;
    let value = target.value;
    const name = target.name;
    
    this.setState({[name]: value});
  }

  handleSubmit = () => {
    const {login, password} = this.state;
    const newLogin = login;
    const newPassword = password;
    let newIsLogged = true;
    this.setState({login: newLogin});
    this.setState({password: newPassword});
    this.setState({isLogged: newIsLogged});
    this.login();
  }

  login = () => {
    const newRedirectToReferrer = true;
    fakeAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: newRedirectToReferrer
      }))
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

    if (redirectToReferrer === true) {
      return <Redirect to={from} />
    }

    return (
      <div>
        {!fakeAuth.isAuthentificated
          ? (<LoginPage
            logProps={this.state}
            signOut={this.handleSignOutClick}
            submitData={this.handleSubmit}
            inputChange={this.handleInputChange}
            />)
          : (<Redirect to={{
              pathname: '/profile',
              state: { from: {from} }
            }} />)
        }
      </div>
    )
  }
}

export default LoginPageContainer;
