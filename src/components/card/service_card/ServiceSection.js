import React from 'react'
import { Bounce, Fade, LightSpeed } from 'react-reveal'
import ServiceCard from './ServiceCard'
import {cardData} from './serviceCardsData'

export default function ServiceSection() {
    const cards = cardData.map((item, index) => {
        return (
                <Bounce>
                  <ServiceCard 
                  key={index}
                  image={item.image}
                  title={item.title}
                  desc={item.desc}
                  />
                </Bounce>
        )
    })
  return (
    <div className='service--section'>
      <h2>OUR SERVICES</h2>
      <div className='s--section--cards'>
          {cards}
      </div>
    </div>
  )
}
