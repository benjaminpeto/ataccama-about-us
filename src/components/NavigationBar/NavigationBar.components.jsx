import React, {useEffect, useRef} from "react";

import gsap from 'gsap';

import './NavigationBar.styles.scss';

import logo from '../../assets/ataccama-horizontal-transparent.svg';

function NavigationBar() {
  const ref = useRef();

  // wait until DOM has been rendered
  useEffect(() => {
    gsap.fromTo(ref.current, 
      { 
        y: -250,
        scale: 0 
      },
      { 
        y: 0,
        scale: 1,
        duration: 1.5
      }
    );
  });

  return (
    <nav ref={ref}>
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