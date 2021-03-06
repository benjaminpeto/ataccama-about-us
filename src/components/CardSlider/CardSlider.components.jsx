import React from "react";

import Card from '../Cards/Card.components';
import LastCard from "../LastCard/LastCard.components";

import { ReactComponent as ArrowLeft } from '../../assets/Arrow left.svg';
import { ReactComponent as ArrowRight } from '../../assets/Arrow right.svg';

import './CardSlider.styles.scss';

function  CardSlider() {
  return (
    <>
      <div className='arrows'>
        <ArrowLeft className='arrow-left' />
        <ArrowRight className='arrow-right' />
      </div>
      <div className='card-slider'>
        <Card />
        <LastCard />
      </div>
    </>
  );
}

export default CardSlider;