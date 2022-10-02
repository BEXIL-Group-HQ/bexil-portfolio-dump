import React from 'react'
import { Fade, Roll } from 'react-reveal'



export default function SectionLTR({title, description, button, image, type}) {
  const className = type === "coloured" ? "section--coloured" : ""
  return (
    <section className={className}>
          <Fade left>
            <div>
                <img src={image} alt="Designer" />
            </div>
          </Fade>
          <Fade right>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                {button && <button>{button}</button>}
            </div>
          </Fade>
    </section>
  )
}
