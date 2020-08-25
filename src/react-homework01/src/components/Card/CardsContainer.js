import React, { Component } from 'react';
import styles from './CardsContainer.module.sass';
import Card from './Card';
import ApiCall from '../../api/mockedApi.js';
import CardsCreationForm from './CardsCreationForm';

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    console.log(newCardsState)
    let newCardsArr = Object.values(newCardsState).filter((card) => {
      console.log(card.id)
      console.log(card.id !== id)
      console.log(id)
      return card.id !== id;
    })
    console.log(newCardsArr)
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
                this.state.cards.map((item) => {
                  return (<Card key={item.id} data={item} remove={this.handleRemoveClick} />)
               })
              }
            </div>
          </div>
        }
        <CardsCreationForm />
      </div>
    )
  }
}

export default CardsContainer;
