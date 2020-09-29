export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const LOG_IN = 'LOG_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const SHOW_UNLOGGED = 'SHOW_UNLOGGED';
export const SHOW_LOGGED = 'SHOW_LOGGED';

export const setLoggedState = (authState) => {
  return {
    type: SHOW_LOGGED,
    authState
  }
}

export const setUnloggedState = () => {
  return {
    type: SHOW_UNLOGGED
  }
}

export function setLoggedUserData(userData) {
  return {
    type: LOG_IN,
    userData
  }
}

export function setUnloggedData() {
  return {
    type: SIGN_OUT
  }
}

export function addCard(card) {
  return {
    type: ADD_CARD,
    card
  }
}

export function removeCard(id) {
  return {
    type: REMOVE_CARD,
    id
  }
}


// export function handleCardsRequest(dispatch) {
//   mockedApi()
//     .then(cardsData => dispatch(showCards(cardsData)))
// }
