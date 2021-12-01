import React from "react";

import planet from '../../assets/Planet icon.svg'

import './LastCard.styles.scss';

function  LastCard() {
  return (
    <>
    <div className="last-card">

    <div className='last-card-title'>
      <h3>Remote Offices</h3>
      <div className='img-wrapper'>
        <img src={planet} alt='globe illustration' height='70px' width='70px' />
      </div>
    </div>

    <div className='last-card-description-wrapper'>
      <p>You'll find a few of us here-working mostly remotely. We're not quite big enough to have a physical office (yet). Join us and help us change that.</p>
    </div>
      
    <div className='last-card-cities'>
      <div>Moscow</div>
      <div>Munich</div>
      <div>Paris</div>
      <div>New York</div>
    </div>

  </div>
    </>
  );
}

export default LastCard;