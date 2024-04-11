import React from 'react';
import img from './img/header-img.png'
const BannerArea = () => {
  return (
    <section className="banner-area" id="home" style={{zIndex:'999'}}>	
      <div className="container">
        <div className="hero">
        
          <div className="banner-content col-lg-7">
            <h5 className="text-white text-uppercase">Author: Travor James</h5>
            <h1 className="text-uppercase">
              New Adventure				
            </h1>
            <p className="text-white pt-20 pb-20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp <br/> or incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
            </p>
            <a href="/" className="primary-btn text-uppercase">Buy Now for $9.99</a>
          </div>
          <div className="col-lg-5 banner-right">
            <img className="img-fluid" src={img} alt="" />
          </div>												
        </div>
      </div>
    </section>
  );
}

export default BannerArea;
