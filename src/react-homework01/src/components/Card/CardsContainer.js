import React, { Component } from 'react';
import Card from './Card';
import ApiCall from '../../api/mockedApi.js';
import styles from './CardsContainer.module.sass';

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  async componentDidMount(prevState) {
    await ApiCall()
      .then((result) => {
        this.setState({cards: JSON.parse(result)});
      })
      .catch((err) => {
        return new Error("Oops!" + err)
      })
  }

  render() {
    const { cards } = this.state;
    
    return (
      cards.length === 0
      ? <div> No cards yet </div>
      : <div >
          <div className={styles.CardsContainer}>
          {
            this.state.cards.map((item) => {
              return (<Card key={item.id} data={item} />)
           })
          }
        </div>
      </div>
    )
  }
}

export default CardsContainer;
