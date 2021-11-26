import React from "react";
import { cardData } from "../../data/Card.data";

import { ReactComponent as ArrowExpand } from '../../assets/Arrow.svg';
import { ReactComponent as ArrowOpenings } from '../../assets/arrow-right-s.svg';

import './Card.styles.scss';

function Card() {
  return (
    <>
      {
        cardData.map(card => (
          <div key={card.id} className='card-element'>

            <div className='card-title-wrapper'>
              <h3>{card.city}</h3>
              <img src={card.image} alt='city illustration' height='96px' width='96px' />
            </div>

            <div className='card-description-wrapper'>
              <p>{card.description} 
                <span className='expand-btn'>
                  Expand
                  <ArrowExpand className='arrow-expand' />
                </span>
              </p>
            </div>

            <div className='card-info-wrapper'>
              <div className='atacc-wrapper'>
                <h4>{card.ataccamers}</h4>
                <h5>Ataccamers</h5>
              </div>

              <div className='open-wrapper'>
                <h4>
                  {card.openings}
                  <ArrowOpenings />
                </h4>
                <h5>Openings</h5>
              </div>
              
            </div>

          </div>
        ))
      }
    </>
  );
}

export default Card;