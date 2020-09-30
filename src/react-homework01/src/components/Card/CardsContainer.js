import React, { Component } from 'react';
import styles from './CardsContainer.module.sass';
import Card from './Card';
import ApiCall from '../../api/mockedApi.js';
import CardsCreationForm from './CardsCreationForm';

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
      title: '',
      gender: '',
      price: '',
      cards: [],
      titleWarning: '',
      genderWarning: '',
      priceWarning: '',
      isValid: true
    };
  }

  async componentDidMount() {
    await ApiCall()
      .then((result) => {
        this.setState({cards: JSON.parse(result)});
      })
  }

  handleRemoveClick = (e, id) => {
    const newCardsState = {...this.state.cards};
    const newCardsArr = Object.values(newCardsState).filter(card => card.id !== id)
    this.setState({cards: newCardsArr});
  }

  handleInputChange = (e) => {
    const {name, value} = e.target; 
    this.setState({[name]: value});
  }

  handleSubmit = (e, id) => {
    const {image, title, gender, price, cards} = this.state;
    const newCardsState = {...cards};
    const newCard = {
      id: Math.floor(Math.random() * (9999999 - 9) + 9),
      imageUrl: image,
      title,
      gender,
      price
    }
    const newCardsArr = Object.values(newCardsState);
    let newWarningRequired = "This field is required";
    if (this.handleValidation()) {
      newWarningRequired = "";
      newCardsArr.push(newCard);
      this.setState({cards: newCardsArr});
    } else {
      if (!title) {
        this.setState({titleWarning: newWarningRequired});
      }
      if (!gender) {
        this.setState({genderWarning: newWarningRequired});
      }
      if (!price) {
        this.setState({priceWarning: newWarningRequired});
      }
      return null;
    }
  }

  handleValidation = () => {
    const {title, gender, price} = this.state;
    const newWarningRequired = "";
    let newIsValid = true;
    this.setState({
      titleWarning: newWarningRequired,
      genderWarning: newWarningRequired,
      priceWarning: newWarningRequired
    });
    if (!title || !gender || !price) {
      newIsValid = false;
    }

    this.setState({isValid: newIsValid});
    return newIsValid;
  }

  render() {
    const {cards} = this.state;
    
    return (
      <div>
        {
          cards.length === 0
          ? <div className={styles.NoCards}> No cards yet </div>
          : <div>
              <div className={styles.CardsContainer}>
              {
                cards.map((item) => {
                  return (<Card key={item.id} data={item} remove={this.handleRemoveClick} />)
               })
              }
            </div>
          </div>
        }
        <CardsCreationForm data={this.state} addCard={this.handleSubmit} inputChange={this.handleInputChange} />
      </div>
    )
  }
}

export default CardsContainer;
