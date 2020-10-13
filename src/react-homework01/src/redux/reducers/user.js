const InitialUserState = {
  user: {}
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
