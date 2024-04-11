import React from 'react';
import c1Image from './img/c1.jpg';
import c2Image from './img/c2.jpg';
import c3Image from './img/c3.jpg';

function BooksList() {
  // Course data array
  const courses = [
    {
      id: 1,
      image: c1Image,
      title: 'Breakthrough Thinking',
      price: '$25',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      id: 2,
      image: c2Image,
      title: 'Breakthrough Thinking',
      price: '$25',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    {
      id: 3,
      image: c3Image,
      title: 'Breakthrough Thinking',
      price: '$25',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    ,
    {
      id: 3,
      image: c3Image,
      title: 'Breakthrough Thinking',
      price: '$25',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    ,
    {
      id: 3,
      image: c3Image,
      title: 'Breakthrough Thinking',
      price: '$25',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    ,
    {
      id: 3,
      image: c3Image,
      title: 'Breakthrough Thinking',
      price: '$25',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    ,
    {
      id: 3,
      image: c3Image,
      title: 'Breakthrough Thinking',
      price: '$25',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    ,
    {
      id: 3,
      image: c3Image,
      title: 'Breakthrough Thinking',
      price: '$25',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
    ,
    {
      id: 3,
      image: c3Image,
      title: 'Breakthrough Thinking',
      price: '$25',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna',
    },
  ];

  return (
    <section className="course-area section-gap" id="course">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="menu-content pb-60 col-lg-9">
            <div className="title text-center">
              <h1 className="mb-10">Top Courses That are open for Students</h1>
              <p>Who are in extremely love with eco friendly system.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="active-course-carusel">
            {/* Map over the courses array and render each course */}
            {courses.map(course => (
              <div className="single-course item" key={course.id}>
                <img className="img-fluid" src={course.image} alt={course.title} />
                <p className="sale-btn">For Sale</p>
                <div className="details">
                  <a href="#"><h4>{course.title} <span className="price float-right">{course.price}</span></h4></a>
                  <p>{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BooksList;
