import React from 'react';

import './ContactUs.scss';

const ContactUs = () => (
  <section className="contact-us">
    <div id="contact-us" className="contact-us__breakpoint"></div>
    <h2 className="contact-us__article">CONTACT WITH US</h2>
    <img className="contact-us__image" src="./img/angle-down-blue.svg" alt="contact us"></img>

    <div className="contact-us__wrap">
      <div className="contact-us__contacts contacts">

        <div className="contacts__card">
          <img className="contacts__card-image" src="./img/location-arrow.png" alt="location"></img>
          <h4>Address:<span>Box 564, Disneyland USA</span></h4>
        </div>

        <div className="contacts__card">
          <img className="contacts__card-image" src="./img/phone-arrow.png" alt="telephone"></img>
          <h4>Telephone:
            <span><a href="tel:+8801812726495">+8801812726495</a></span>
            <span><a href="tel:+8801687420471">+8801687420471</a></span>
          </h4>
        </div>

        <div className="contacts__card">
          <img className="contacts__card-image" src="./img/mail-arrow.png" alt="e-mail"></img>
          <h4>E-mail:
            <span><a href="mailto:coinmia@example.com">coinmia@example.com</a></span>
            <span><a href="mailto:dcoiania@mail.com">dcoiania@mail.com</a></span>
          </h4>
        </div>

      </div>
      <form className="contact-us__form" method="POST" action="#">

        <div className="contact-us__form-contact">
          <input className="contact-us__form-contact-name" type="name" name="name" placeholder="Your name" maxLength={30} required />
          <input type="email" name="email" placeholder="E-mail address" className="contact-us__form-contact-email" maxLength={40} required />
        </div>
        <textarea name="message" placeholder="Message topic" className="contact-us__form-contact-topic" maxLength={40} />
        <textarea name="message" placeholder="Your message" className="contact-us__form-contact-message" maxLength={180} />
        <button type="submit" className="contact-us__form-contact-button">Submit</button>
      </form>
    </div>

    <div className="contact-us__background">
      <h3>©Copyright 2020 All right reserved.</h3>
    </div>
  </section>
);

export default ContactUs;
