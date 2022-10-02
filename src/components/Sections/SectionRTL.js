import React from 'react'
import { Fade } from 'react-reveal'

export default function SectionRTL({title, description, button, image, type}) {
  const className = type === "coloured" ? "section--coloured" : ""
  return (
    <section className={className}>
          <Fade left>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                {button && <button>{button}</button>}
            </div>
            </Fade>
            <Fade right>
            <div>
                <img src={image} alt="Designer" />
            </div>
            </Fade>
    </section>
  )
}
