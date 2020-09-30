const InitialAuthState = {
  isLogged: false,
  text: 'You are not logged in'
}

const authState = (state = InitialAuthState, action) => {
  switch (action.type) {
    case 'SHOW_LOGGED':
      const newState = Object.assign({}, state, {isLogged: true});
      return newState;
    case 'SHOW_UNLOGGED':
      return InitialAuthState;
    default:
      return state;
  }
}

export default authState;
