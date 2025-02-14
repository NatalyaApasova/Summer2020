import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { setLoggedUserData, setUnloggedData, setLoggedState } from '../../redux/actions/index.js';

const mapStateToProps = state => ({
  authState: state.authState,
  userData: {
    user: {
      id: '',
      login: state.userData.login,
      password: state.userData.password,
      cards: []
    }
  },
  isLogged: state.authState.isLogged
});

const mapDispatchToProps = {
  setLoggedUserData,
  setUnloggedData,
  setLoggedState
};

const LoginPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);

export default LoginPageContainer;
