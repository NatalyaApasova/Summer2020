import { connect } from 'react-redux';
import { addCard, removeCard } from '../../redux/actions/index.js';
import CardsPage from './CardsPage';
import CardsCreationForm from './CardsCreationForm';
import Card from './Card';

const mapStateToProps = state => ({
  cardsState: {
    cards: state.cardsState.cards
  }
});

const mapDispatchToProps = {
  addCard,
  removeCard
  // handleCardsRequest
};


export const CardsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsPage)

export const CardsCreationFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsCreationForm);

export const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);