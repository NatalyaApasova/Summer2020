import {setLoggedUserData, setUnloggedState} from './../actions/index';

const InitialUserState = {
  user: {
    image: {
      src: 'https://asictrade.com/catalog/view/theme/default/image/user-icon.png',
      alt: 'Avatar is here'
    }
  }
}

export default function userData(state = InitialUserState, action) {
  switch (action.type) {
    case 'LOG_IN':
      const newState = Object.assign({}, state, action.userData);
      return newState;
    case 'SIGN_OUT':
      return InitialUserState;
    default:
      return state;
  }
}
