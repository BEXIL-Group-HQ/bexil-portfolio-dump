import React from 'react'

export default function ServiceCard({image, title, desc}){
    const random = Math.floor(Math.random() * (7-1) + 1);

    return (
    <div className={`service--card${random}`}>
        <div>
          <h4>{title}</h4>
          <p>{desc}</p>
        </div>
        <img src={image} alt={title} loading="lazy"/>
    </div>
  )
}
