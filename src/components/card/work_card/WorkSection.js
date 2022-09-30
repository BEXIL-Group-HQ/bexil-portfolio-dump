import React from 'react'
import WorkCard from './WorkCard';
import { workData } from "./workCardData"
import { LightSpeed, Slide } from "react-reveal"

export default function WorkSection() {
    const cards = workData.map((item, index) => {
        return (
                <Slide right>
                  <WorkCard 
                  key={index}
                  position={item.position}
                  title={item.title}
                  desc={item.desc}
                  />
                </Slide>
        )
    })
  return (
    <div className='work--section' id='procedure'>
        <div className='work--section--content'>
            <h2>How we work</h2>
            <div className='w--section--cards'>
                {cards}
            </div>
        </div>
    </div>
  )
}
