import React from "react";

import CardSlider from "../CardSlider/CardSlider.components";

import './Wheretofind.styles.scss';

function WhereToFind() {
  return (
    <div className='where-wrapper'>
      <h1>to find us</h1>
      <p>Let us introduce you to our biggest offices, so you can get a sense of our fun company culture and the teams working near you. If you prefer to work remotely, <span>get in touch with us</span> to learn about the options.</p>
      <CardSlider />
    </div>
  );
}

export default WhereToFind;