import { addCard, removeCard } from './../actions/index';

const InitialCardsState = {
  cards: []
}

const cardsState = (state = InitialCardsState, action) => {
  switch(action.type) {
    case "ADD_CARD":
      return Object.assign({}, state, {cards: [...state.cards, action.card]});
    case "REMOVE_CARD":
      const filter = state.cards.filter((card) => card !== action.id);
      return Object.assign({}, state, {cards: filter});
    default:
      return state;
  }
} 

export default cardsState;
