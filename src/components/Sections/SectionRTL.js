import React from 'react'
import { Fade } from 'react-reveal'

export default function SectionRTL({title, description, button, image, type}) {
  const className = type === "coloured" ? "section--coloured" : ""
  return (
    <section className={className}>
            <div>
          <Fade bottom>
                <h2>{title}</h2>
                <p>{description}</p>
                {button && <button>{button}</button>}
            </Fade>
            </div>
            <div>
            <Fade top>
                <img src={image} alt="Designer" />
            </Fade>
            </div>
    </section>
  )
}
