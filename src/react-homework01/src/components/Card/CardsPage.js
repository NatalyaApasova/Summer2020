import React, { Component } from 'react';
import styles from './CardsPage.module.sass';
import {CardContainer, CardsCreationFormContainer} from './containers';
import {cardsState} from '../../redux/reducers/cards.js';
import ApiCall from '../../api/mockedApi.js';

export default function CardsPage(props) {
  return (
    <div>
      {
        !props.cardsState.cards.length
        ? <div className={styles.NoCards}> No cards yet </div>
        : <div>
            <div className={styles.CardsPage}>
            {
              props.cardsState.cards.map((item) => {
                const {id, image, title, gender, price} = item;
                return (
                  <div className={styles.Card} key={id}> 
                    <button className={styles.RemoveButton} id={id} onClick={() => props.removeCard(item)}>X</button>
                    <div className={styles.CardImgWrapper}>
                      <img src={image} className={styles.CardImg} alt="no image" width="130" height="140"></img>
                    </div>
                    <div>
                      <p>{title}</p>
                      <p>{gender}</p>
                      <p>price: {price}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      }
      <CardsCreationFormContainer />
    </div>
  )
}
//   constructor(props) {
//     super(props);
//     this.state = {
//       titleWarning: '',
//       genderWarning: '',
//       priceWarning: '',
//       isValid: true
//     };
//   }

//   async componentDidMount() {
//     await ApiCall()
//       .then((result) => {
//         this.setState({cards: JSON.parse(result)});
//       })
//   }

//   handleRemoveClick = (e, id) => {
//     const newCardsState = {...this.state.cards};
//     let newCardsArr = Object.values(newCardsState).filter((card) => {
//       return card.id !== id;
//     })
//     this.setState({cards: newCardsArr});
//   }

//     const newCardsArr = Object.values(newCardsState);
//     let newWarningRequired = "This field is required";

//     if (this.handleValidation()) {
//       newWarningRequired = "";
//       newCardsArr.push(newCard);
//       this.setState({cards: newCardsArr});
//     } else {
//       if (!title) {
//         this.setState({titleWarning: newWarningRequired});
//       }
//       if (!gender) {
//         this.setState({genderWarning: newWarningRequired});
//       }
//       if (!price) {
//         this.setState({priceWarning: newWarningRequired});
//       }
//       return null;
//     }
//   }

//   handleValidation = () => {
//     const {title, gender, price} = this.state;
//     const newWarningRequired = "";
//     let newIsValid = true;
//     this.setState({titleWarning: newWarningRequired});
//     this.setState({genderWarning: newWarningRequired});
//     this.setState({priceWarning: newWarningRequired});
//     if (!title) {
//       newIsValid = false;
//     }
//     if (!gender) {
//       newIsValid = false;
//     }
//     if (!price) {
//       newIsValid = false;
//     }
//     this.setState({isValid: newIsValid});
//     return newIsValid;
//   }
