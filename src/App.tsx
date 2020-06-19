import React from 'react';

import './App.scss';
import Header from './components/Header/Header';
import Advantages from './components/Advantages/Advantages';
import SpecialFeatures from './components/Special/SpecialFeatures';
import Price from './components/Price/Price';
import Testimonials from './components/Testimonials/Testimonials';
import ContactUs from './components/ContactUs/ContactUs';

const App = () => (
  <div className="App">
    <Header />
    <Advantages />
    <SpecialFeatures />
    <Price />
    <Testimonials />
    <ContactUs />
  </div>
);

export default App;
