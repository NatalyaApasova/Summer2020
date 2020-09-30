import React, { useEffect } from 'react';
import styles from './CardsPage.module.sass';
import { CardsCreationFormContainer } from './containers';

export default function CardsPage(props) {
  const { removeCard, handleCardsRequest } = props;
  const { cards } = props.cardsState;
  const { image } = props.userData.user;

  useEffect(() => {
    handleCardsRequest();
  }, [])

  return (
    <>
      <div className={ styles.AvatarBlock }>
        <img className={ styles.Avatar } src={ image.src } alt={ image.alt }></img>
      </div>
      <div>
        {
          !cards.length
            ? <div className={ styles.NoCards }>No cards yet</div>
            : <div>
                <div className={ styles.CardsPage }>
                {
                  cards.map((item) => {
                    const { id, image, title, gender, price } = item;
                    return (
                      <div className={ styles.Card } key={ id }> 
                        <button className={ styles.RemoveButton } id={ id } onClick={ () => removeCard(item) }>X</button>
                        <div className={ styles.CardImgWrapper }>
                          <img src={ image } className={ styles.CardImg } alt="no image" width="130" height="140"></img>
                        </div>
                        <div>
                          <p>{ title }</p>
                          <p>{ gender}</p>
                          <p>price: { price }</p>
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
    </>
  )
}
