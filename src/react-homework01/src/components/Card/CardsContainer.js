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
      cards: []
    };
  }

  async componentDidMount() {
    await ApiCall()
      .then((result) => {
        this.setState({cards: JSON.parse(result)});
      })
      .catch((err) => {
        return new Error("Oops!" + err)
      })
  }

  handleRemoveClick = (e, id) => {
    const newCardsState = {...this.state.cards};
    let newCardsArr = Object.values(newCardsState).filter((card) => {
      return card.id !== id;
    })
    this.setState({cards: newCardsArr});
  }

  handleInputChange = (e) => {
    const target = e.target;
    let value = target.value;
    const name = target.name;
    
    this.setState({[name]: value});
  }

  handleSubmit = (e, id) => {
    const {image, title, gender, price, cards} = this.state;
    const newCardsState = {...cards};
    const newCard = {
      id: Math.floor(Math.random() * (9999999 - 1) + 1) + price.toString(),
      imageUrl: image,
      title,
      gender,
      price
    }
    const newCardsArr = Object.values(newCardsState);
    newCardsArr.push(newCard);
    this.setState({cards: newCardsArr});
  }

  render() {
    const { cards } = this.state;
    
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
        <CardsCreationForm addCard={this.handleSubmit} inputChange={this.handleInputChange} />
      </div>
    )
  }
}

export default CardsContainer;
