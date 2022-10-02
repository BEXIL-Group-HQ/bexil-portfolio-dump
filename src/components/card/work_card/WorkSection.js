import React from 'react'
import WorkCard from './WorkCard';
import { workData } from "./workCardData"
import { Fade, LightSpeed, Roll, Slide } from "react-reveal"

export default function WorkSection() {
    const cards = workData.map((item, index) => {
        return (
                <Roll>
                  <WorkCard 
                  key={index}
                  position={item.position}
                  title={item.title}
                  desc={item.desc}
                  />
                </Roll>
        )
    })
  return (
    <div className='work--section' id='procedure'>
      <h2>How we work</h2>
      <div className='w--section--cards'>
          {cards}
      </div>
    </div>
  )
}
