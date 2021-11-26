import React from "react";

import Card from '../Cards/Card.components';

import './CardSlider.styles.scss';

function  CardSlider() {
  return (
    <div className='radient-cover'>
      <div className='card-slider'>
        <Card />
      </div>
    </div>
  );
}

export default CardSlider;