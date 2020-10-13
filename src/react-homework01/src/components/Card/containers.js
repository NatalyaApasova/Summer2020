import { connect } from 'react-redux';
import { addCard, removeCard } from '../../redux/actions/index.js';
import { handleCardsRequest } from '../../redux/actions/index.js';
import CardsPage from './CardsPage';
import CardsCreationForm from './CardsCreationForm';

const mapStateToProps = state => ({
  cardsState: {
    cards: state.cardsState.cards,
    isAdded: state.cardsState.isAdded
  },
  userData: {
    user: {
      image: {
        src: 'https://asictrade.com/catalog/view/theme/default/image/user-icon.png',
        alt: 'Avatar is here'
      }
    }
  },
  isLogged: state.authState.isLogged
});

const mapDispatchToProps = {
  addCard,
  removeCard,
  handleCardsRequest
};

export const CardsPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsPage)

export const CardsCreationFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardsCreationForm);
