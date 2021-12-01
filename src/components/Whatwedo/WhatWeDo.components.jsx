import React from "react";

import { ReactComponent as One } from '../../assets/one-glyph.svg';

import Screenshot from '../../assets/Screenshot.png';
import DataQuality from '../../assets/Data Quality@2x.png';
import DataCatalog from '../../assets/Data Catalog@2x.png';

import './WhatWeDo.styles.scss';

function  WhatWeDo() {
  return (
    <section className='whatwedo-wrapper'>
      <h1>we do</h1>
      <p>We’re helping to build agile, data-driven organizations where data people have the power to drive change.</p>

      <div className='main--wrapper'>

        <div className='content'>
          <One />
          <p>We're building Ataccama ONE—an AI-powered data management & governance platform that <strong>helps our customers do amazing things with their data</strong>. Our goal is to provide clients with a single platform to analyze, process, manage, and monitor (big) data. We help global businesses across industries improve their data so they can create innovative products, overcome operational inefficiencies, comply with regulations, and so much more.</p>
        </div>

        <div className='image-wrapper'>
          <img src={Screenshot} alt='ONE platform screenshot' />
          <img src={DataQuality} alt='data quality illustration' />
          <img src={DataCatalog} alt='data catalog illustration' />
        </div>

      </div>

    </section>
  );
}

export default WhatWeDo;