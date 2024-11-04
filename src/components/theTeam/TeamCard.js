import React from 'react'
import { Bounce } from "react-awesome-reveal"

export const TeamCard = ({image, name, title}) => {
  return (
    <Bounce>
    <div className='team--card'>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>{title}</p>
    </div>
    </Bounce>
  )
}
