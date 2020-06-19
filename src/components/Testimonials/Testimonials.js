import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './Testimonials.scss';

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="testimonials">
      <h2 className="testimonials__article">CLIENT SAYS</h2>
      <img className="testimonials__image" src="./img/angle-down.svg"></img>
      <div className="testimonials__carousel">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
        <Carousel.Item>
            <div className="testimonials__wrap">
              <img
              className="testimonials__wrap-user-picture"
              src="./img/avatar-small-1.jpeg"
              alt="testimonials-user"
              />
              <h4 className="testimonials__wrap-user-article">Michelle Johnson, Australia</h4>
              <p className="testimonials__wrap-user-text">
                The multichannel sales engagement platform which automates
                personal email outreach, calls, and tasks, while Sales can
                focus on what really matters - closing while Sales can
                focus on what really matters - closing
              </p>
            </div>
      </Carousel.Item>
      <Carousel.Item>
            <div className="testimonials__wrap">
              <img
              className="testimonials__wrap-user-picture"
              src="./img/avatar-small-2.jpeg"
              alt="testimonials-user"
              />
              <h4 className="testimonials__wrap-user-article">Michelle Johnson, Australia</h4>
              <p className="testimonials__wrap-user-text">
                The multichannel sales engagement platform which automates
                personal email outreach, calls, and tasks, while Sales can
                focus on what really matters - closing while Sales can
                focus on what really matters - closing
              </p>
            </div>
      </Carousel.Item>
      <Carousel.Item>
            <div className="testimonials__wrap">
              <img
              className="testimonials__wrap-user-picture"
              src="./img/avatar-small-3.jpg"
              alt="testimonials-user"
              />
              <h4 className="testimonials__wrap-user-article">Michelle Johnson, Australia</h4>
              <p className="testimonials__wrap-user-text">
                The multichannel sales engagement platform which automates
                personal email outreach, calls, and tasks, while Sales can
                focus on what really matters - closing while Sales can
                focus on what really matters - closing
              </p>
            </div>
      </Carousel.Item>
    </Carousel>
      </div>
          </section>
  );
}

export default Testimonials;
