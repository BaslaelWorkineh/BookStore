import React from 'react'
import BannerArea from '../components/BannerArea'
import '../components/css/main.css'
import CallToAction from '../components/CallToAction'
import BooksList from '../components/Books'
import FooterClass from '../components/Footer'

export const Home = () => {
  return (
    <div>
      <BannerArea />
      <BooksList />
      <FooterClass />
    </div>
  )
}
