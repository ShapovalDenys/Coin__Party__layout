import React from 'react';

import './SpecialFeatures.scss';

const SpecialFeatures = () => (
  <section className="special-features">
        <div id="special-features" className="special-features__breakpoint"></div>
    <h2 className="special-features__article">SPECIAL FEATURES</h2>
    <img className="special-features__image" src="./img/angle-down.svg" alt="special features"></img>

    <div className="special-features__cards">

      <div className="special-features__card card-main">
        <img src="./img/portfolio-icon-1.png" alt="portfolio-icon-1"></img>
        <h2>Creative Design</h2>
      </div>

      <div className="special-features__card card-main">
        <img src="./img/portfolio-icon-2.png" alt="portfolio-icon-2"></img>
        <h2>Unlimited Spins</h2>
      </div>

      <div className="special-features__card card-main">
        <img src="./img/portfolio-icon-3.png" alt="portfolio-icon-3"></img>
        <h2>Full Free Chat</h2>
      </div>

      <div className="special-features__card card-main">
        <img src="./img/portfolio-icon-4.png" alt="portfolio-icon-4"></img>
        <h2>Retina ready</h2>
      </div>

      <div className="special-features__card card-main">
        <img src="./img/portfolio-icon-5.png" alt="portfolio-icon-5"></img>
        <h2>High Resolution</h2>
      </div>

      <div className="special-features__card card-main">
        <img src="./img/portfolio-icon-6.png" alt="portfolio-icon-6"></img>
        <h2>Mega Rows</h2>
      </div>

    </div>

  </section>
);

export default SpecialFeatures;
