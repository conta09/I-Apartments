import React from 'react'
import Navbar from './components/Navbar'
import Rentals from './components/Rentals'
import Hero from './components/Hero'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Rentals />
    </div>
  )
}

export default page


