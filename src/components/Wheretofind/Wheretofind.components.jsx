import React, { useRef, useEffect} from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import CardSlider from "../CardSlider/CardSlider.components";

import './Wheretofind.styles.scss';

function WhereToFind() {
  
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;

    ScrollTrigger.defaults({
      scrub: true,
      ease: "none"
    });

    gsap.fromTo(
      element.querySelector(".title"),
      {
        y: -150,
        scale: 0.5,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          start: "2100 center",
          end: "2400 center",
        }
      }
    );

    gsap.fromTo(
      element.querySelector('.paragraph'),
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          start: "2200 center",
          end: "2500 center"
        }
      }
    )
  });

  return (
    <section className='where-wrapper' ref={ref}>
      <h1 className='title'>to find us</h1>
      <p className='paragraph'>Let us introduce you to our biggest offices, so you can get a sense of our fun company culture and the teams working near you. If you prefer to work remotely, <span>get in touch with us</span> to learn about the options.</p>
      <CardSlider />
    </section>
  );
}

export default WhereToFind;