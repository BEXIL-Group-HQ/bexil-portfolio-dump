import React from 'react'
import { Roll } from "react-reveal"
import ChooseUsCard from './ChooseUsCard';
import { ChooseUsdata } from './chooseUsData';

export default function ChooseUsSection() {
    const cards = ChooseUsdata.map((item, index) => {
        return (
                <Roll key={index}>
                  <ChooseUsCard 
                  icon={item.icon}
                  title={item.title}
                  desc={item.desc}
                  />
                </Roll>
        )
    })
  return (
    <div className='work--section' id='procedure'>
      <h2>WHY CHOOSE US?</h2>
      <div className='w--section--cards'>
          {cards}
      </div>
    </div>
  )
}
