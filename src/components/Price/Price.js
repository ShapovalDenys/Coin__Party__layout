import React from 'react';

import './Price.scss';

const Price = () => (
  <section className="price">
    <div id="price" className="price__breakpoint"></div>
    <div className="price__decoration"></div>
    <h2 className="price__article">AFORTABLE PRICE</h2>
    <img className="price__image" src="./img/angle-down-white.svg"></img>

    <div className="price__cards">

      <div className="price__card">
        <h3 className="price__card-article">BASIC</h3>
        <ul className="price__card-list">
          <li className="price__card-list-items"><strong>$ 10</strong>/Month</li>
          <li className="price__card-list-items">200 coins</li>
          <li className="price__card-list-items">Webmail Support</li>
          <li className="price__card-list-items">Customer Support 24/7</li>
        </ul>
        <button className="price__card-list-button">Purchase</button>
      </div>

      <div className="price__card main-card">
        <span className="main-card__decoration">
          <img src="./img/crown.svg" alt="card decoration crown"></img>
        </span>
        <h3 className="price__card-article">PRO</h3>
        <ul className="price__card-list">
          <li className="price__card-list-items"><strong>$ 25</strong>/Month</li>
          <li className="price__card-list-items">500 coins</li>
          <li className="price__card-list-items">Webmail Support</li>
          <li className="price__card-list-items">Customer Support 24/7</li>
        </ul>
        <button className="price__card-list-button">Purchase</button>
      </div>

      <div className="price__card">
        <h3 className="price__card-article">ADVANCED</h3>
        <ul className="price__card-list">
          <li className="price__card-list-items"><strong>$ 50</strong>/Month</li>
          <li className="price__card-list-items">1000 coins</li>
          <li className="price__card-list-items">Webmail Support</li>
          <li className="price__card-list-items">Customer Support 24/7</li>
        </ul>
        <button className="price__card-list-button">Purchase</button>
      </div>

    </div>

  </section>
);

export default Price;
