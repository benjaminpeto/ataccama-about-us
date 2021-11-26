import React from "react";

import './NavigationBar.styles.scss';

import logo from '../../assets/ataccama-horizontal-transparent.svg';

function NavigationBar() {
  return (
    <nav>
      <img src={logo} alt='ataccama logo' width='187.38px' height='28px' />
      <ul>
        <li>Our story</li>
        <li>Culture</li>
        <li>Blog</li>
      </ul>
    </nav>
  );
}

export default NavigationBar;