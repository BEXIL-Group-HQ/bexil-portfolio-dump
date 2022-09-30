import React from 'react'

export default function WorkCard({position, title, desc}){
    const random = Math.floor(Math.random() * (5-1) + 1);
    // console.log(random)
  return (
    <div className={`work--card${random}`}>
        <h4>{position}</h4>
        <h3>{title}</h3>
        <p>{desc}</p>
    </div>
  )
}
