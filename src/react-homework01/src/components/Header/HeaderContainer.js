import Header from './index';
import { connect } from 'react-redux';
import { setLoggedState, setUnloggedState, setUnloggedData } from '../../redux/actions/index.js';

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
  setLoggedState,
  setUnloggedState,
  setUnloggedData
};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
