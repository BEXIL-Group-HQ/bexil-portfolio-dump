import React from 'react'


export default function ServiceCard({image, title, desc}){
    const random = Math.floor(Math.random() * (7-1) + 1);
    console.log(random)

    return (
    <div className={`service--card${random}`}>
        <img src={image} alt="app development" />
        <h4>{title}</h4>
        <p>{desc}</p>
    </div>
  )
}
