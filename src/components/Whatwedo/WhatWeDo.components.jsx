import React, { useEffect, useRef} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { ReactComponent as One } from '../../assets/one-glyph.svg';

import Screenshot from '../../assets/Screenshot.png';
import DataQuality from '../../assets/Data Quality@2x.png';
import DataCatalog from '../../assets/Data Catalog@2x.png';

import './WhatWeDo.styles.scss';

function  WhatWeDo() {
  
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;

    ScrollTrigger.defaults({
      scrub: true,
      ease: "none"
    });

    gsap.fromTo(
      element.querySelector('h1'),
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
          start: "3000 center",
          end: "3200 center",
        }
      }
    );

    gsap.fromTo(
      element.querySelector('p'),
      {
        y: -100,
        scale: 0,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          start: "3100 center",
          end: "3300 center"
        }
      }
    );

    gsap.fromTo(
      element.querySelector('.content'),
      {
        x: -300,
        opacity: 0,
        transformOrigin: '50% 50%'
      },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          start: "3300 center",
          end: "3600 center"
        }
      }
    );

    gsap.fromTo(
      element.querySelector('.screenshot'),
      {
        x: 1200,
        opacity: 0,
        transformOrigin: '50% 50%'
      },
      {
        x: 0,
        opacity: 1,
        ease: "slow(0.7, 0.7, false)",
        scrollTrigger: {
          start: "3300 center",
          end: "3600 center"
        }
      }
    );

    gsap.fromTo(
      element.querySelector('.data-quality'),
      {
        opacity: 0,
        scale: 0,
        transformOrigin: '50% 50%',
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          start: "3500 center",
          end: "3750 center"
        }
      }
    );

    gsap.fromTo(
      element.querySelector('.data-catalog'),
      {
        opacity: 0,
        scale: 0,
        transformOrigin: '50% 50%',
      },
      {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          start: "3600 center",
          end: "3800 center"
        }
      }
    );
  });

  return (
    <section className='whatwedo-wrapper' ref={ref}>
      <h1>we do</h1>
      <p>We’re helping to build agile, data-driven organizations where data people have the power to drive change.</p>

      <div className='main--wrapper'>

        <div className='content'>
          <One />
          <p>We're building Ataccama ONE—an AI-powered data management & governance platform that <strong>helps our customers do amazing things with their data</strong>. Our goal is to provide clients with a single platform to analyze, process, manage, and monitor (big) data. We help global businesses across industries improve their data so they can create innovative products, overcome operational inefficiencies, comply with regulations, and so much more.</p>
        </div>

        <div className='image-wrapper'>
          <img src={Screenshot} alt='ONE platform screenshot' className='screenshot' />
          <img src={DataQuality} alt='data quality illustration' className='data-quality' />
          <img src={DataCatalog} alt='data catalog illustration' className='data-catalog' />
        </div>

      </div>

    </section>
  );
}

export default WhatWeDo;