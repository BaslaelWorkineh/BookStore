import React from 'react'
import BannerArea from '../components/BannerArea'
import '../components/css/main.css'
import '../components/css/animate.min.css'
import CallToAction from '../components/CallToAction'
import BooksList from '../components/Books'
import Footer from '../components/Footer'
import TestimonialCarousel from '../components/Testimonial'

export const Home = () => {
  return (
    <div>
      <BannerArea />
      <BooksList />
      <CallToAction />
      <TestimonialCarousel />
      <Footer />
    </div>
  )
}
