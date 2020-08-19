import React, { Component } from 'react';
import apiCall from '../../api/mockedApi';
import Card from './Card';
import styles from './Card.module.sass';

class CardsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  componentDidMount(prevState) {
    const request = new Request('../../api/mockedResponse.js');

    fetch(request)
      .then((response) => {
        apiCall()
        return JSON.parse(response);
      })
      .then((result) => {
        console.log(result)
        this.setState({cards: result});
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    const state = this.state;
    const map = state.cards.map((item, key) =>
      <Card data={item} key={item.id} />
    )

    return (
      state.cards.length === 0
      ? <div> No cards yet </div>
      : <div className={styles.CardsContainer}>{map}</div>
    )
  }
}

export default CardsContainer;
