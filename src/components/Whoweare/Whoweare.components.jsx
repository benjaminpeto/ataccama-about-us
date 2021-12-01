import React, { useEffect, useRef} from "react";

import gsap from "gsap";

import './Whoweare.styles.scss';

function WhoWeAre() {
  const ref = useRef();

  useEffect(() => {
    gsap.fromTo(ref.current, 
      { 
        opacity: 0,
        x: -800
      },
      { 
        opacity: 1,
        x: 0,
        duration: 1.5
      }
    );
  });

  return (
    <section className='intro-wrapper' ref={ref}>
      <h1>we are</h1>
      <div className='paragraph-wrapper'>
        <p>There are 300+ of us (and counting) from 22+ countries and 6 continents (no one from Antarctica — yet). <strong>Headquartered in Toronto, we have 10 offices around the world, the largest, R&D office is in Prague.</strong> We’re proud of our hard-working, fun-loving company culture, talented, multinational teams, and daring and caring people.</p>
        <p>We know that people are at their best when they have the freedom to experiment and grow. <strong>Our playground is unlimited and lots of Ataccamers have happily expanded their roles or moved to different teams.</strong> We work hard and play hard, and there’s no challenge we won’t tackle. So it shouldn’t come as a surprise that we’re on a journey to become a unicorn company.</p>
      </div>
    </section>
  );
}

export default WhoWeAre;