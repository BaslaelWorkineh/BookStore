import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from './img/t1.png';
import img2 from './img/t1.png';
import img3 from './img/t1.png';

const testimonialData = [
  {
    id: 1,
    image: img1,
    description: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory',
    name: 'Mark Alviro Wiens',
    position: 'CEO at Google'
  },
  {
    id: 2,
    image: img2,
    description: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory',
    name: 'Mark Alviro Wiens',
    position: 'CEO at Google'
  },
  {
    id: 3,
    image: img3,
    description: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker, projector, hardware and more. laptop accessory',
    name: 'Mark Alviro Wiens',
    position: 'CEO at Google'
  },
  // Add more testimonial data objects as needed
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    afterChange: (index) => setActiveIndex(index)
  };

  return (
    <section className="testimonial-area">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-8">
            <div className="title text-center">
              <h1 className="mb-10">What our Reader’s Say about us</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="active-testimonial-carousel">
            <Slider {...settings}>
              {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="single-testimonial-item">
                  <img className="testimonial-image" src={testimonial.image} alt={testimonial.name} />
                  <p className="testimonial-description">{testimonial.description}</p>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
