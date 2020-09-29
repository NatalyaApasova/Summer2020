import { connect } from 'react-redux';
import { setLoggedUserData, setUnloggedData, setLoggedState } from '../../redux/actions/index.js';
import Main from './index';

const mapStateToProps = state => ({
  authState: state.authState,
  userData: {
    user: {
      id: '',
      login: state.userData.login,
      password: state.userData.password
    }
  },
  isLogged: state.authState.isLogged
});

const mapDispatchToProps = {
  setLoggedUserData,
  setUnloggedData,
  setLoggedState
};

const MainContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);

export default MainContainer;
