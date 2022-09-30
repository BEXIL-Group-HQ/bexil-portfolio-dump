import React from 'react'
import { Fade, LightSpeed } from 'react-reveal'
import ServiceCard from './ServiceCard'
import {cardData} from './serviceCardsData'

export default function ServiceSection() {
    const cards = cardData.map((item, index) => {
        return (
                <Fade >
                  <ServiceCard 
                  key={index}
                  image={item.image}
                  title={item.title}
                  desc={item.desc}
                  />
                </Fade>
        )
    })
  return (
    <div className='service--section'>
        <div className='service--section--content'>
            <h2>OUR SERVICES</h2>
            <div className='s--section--cards'>
                {cards}
            </div>
        </div>
    </div>
  )
}
