import React from 'react'
import Herosection from '../Herosection'
import Card1 from '../Card1'
import Card2 from '../Card2'
import Ourservices from '../Ourservices'
import Recentproj from '../Recentproj'
import Offer from '../Offer'
import Testimonial from '../Testimonial'

const Home = () => {
  return (
    <div>
      <Herosection />
      {/* <Card1 /> */}
      <Ourservices />
      <Offer />
      <Recentproj />
      <Testimonial />
    </div>
  )
}

export default Home