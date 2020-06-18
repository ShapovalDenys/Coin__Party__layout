import React from 'react';

import './Advantages.scss';

const Advantages = () => (
  <section id="advantages" className="advantages">
    <div className="advantages__cards">

      <div className="advantages__card">
        <img src="./img/service-icon-1.png" alt="service-icon-1"></img>
        <h2>EASY TO PLAY</h2>
      </div>

      <div className="advantages__card">
        <img src="./img/service-icon-2.png" alt="service-icon-2"></img>
        <h2>FANTASTIC DESIGN</h2>
      </div>

      <div className="advantages__card">
        <img src="./img/service-icon-3.png" alt="service-icon-3"></img>
        <h2>EASY TO PAY</h2>
      </div>

    </div>
  </section>
);

export default Advantages;
