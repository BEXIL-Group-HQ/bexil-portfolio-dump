import React from 'react'
import { Bounce } from "react-awesome-reveal"
import ServiceCard from './ServiceCard'
import {cardData} from './serviceCardsData'

export default function ServiceSection() {
    const cards = cardData.map((item, index) => {
        return (
                <Bounce key={index}>
                  <ServiceCard 
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
