import React, { useState } from 'react';

import './Header.scss';
import './hamburgers.css';

const Header = () => {

  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <>
    <nav className="header__nav nav">
      <a href="/#" className="nav__article">Jurassic Dino Coin Party Dozer</a>

      <div className="header__mobile-menu">
          <button
            className={isActiveMenu ? "hamburger hamburger--spin is-active" : "hamburger hamburger--spin"}
            type="button"
            onClick={() => setIsActiveMenu(!isActiveMenu)}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>

        <div className={isActiveMenu ? "mobile mobile__active" : "mobile"}>
          <ul className="mobile__nav-items">
            <li className="mobile__nav-item"><a className="mobile__nav-link" href="/">Home</a></li>
            <li className="mobile__nav-item"><a className="mobile__nav-link" href="#advantages">Service</a></li>
            <li className="mobile__nav-item"><a className="mobile__nav-link" href="#special-features">Features</a></li>
            <li className="mobile__nav-item"><a className="mobile__nav-link" href="#price">Pricing</a></li>
            <li className="mobile__nav-item"><a className="mobile__nav-link" href="#contact-us">Contact</a></li>
          </ul>
        </div>

        <ul className="nav__items">
        <li className="nav__item"><a className="nav__link" href="/">Home</a></li>
        <li className="nav__item"><a className="nav__link" href="#advantages">Service</a></li>
        <li className="nav__item"><a className="nav__link" href="#special-features">Features</a></li>
        <li className="nav__item"><a className="nav__link" href="#price">Pricing</a></li>
        <li className="nav__item"><a className="nav__link" href="#contact-us">Contact</a></li>
      </ul>
    </nav>

    <div className="header">
    <div className="header__decoration"></div>
    <div className="header__filter"></div>
    <h1>It’s all about Coin Pusher Game</h1>
    <p>Try to complete all villages: pirate king island, piggy go village, coin master lands, homescape and many others.</p>
    </div>
    </>
);
}

export default Header;
