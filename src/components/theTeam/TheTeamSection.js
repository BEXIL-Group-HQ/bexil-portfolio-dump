import React from 'react'
import { TeamCard } from './TeamCard';
import { theTeamData } from './teamData';

export default function TheTeam() {
    const cards = theTeamData.map((item, index) => {
        return (
                  <TeamCard 
                  key={index}
                  image={item.image}
                  name={item.name}
                  title={item.title}
                  />
        )
    })
  return (
    <div className='team--section' id='team'>
      <h2>MEET THE TEAM</h2>
      <div className='team--card--section'>
          {cards}
      </div>
    </div>
  )
}
