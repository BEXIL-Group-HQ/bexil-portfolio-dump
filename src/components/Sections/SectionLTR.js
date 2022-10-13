import React from 'react'
import { Fade } from 'react-reveal'



export default function SectionLTR({title, description, button, image, type, id}) {
  const className = type === "coloured" ? "section--coloured" : ""
  return (
    <section className={className} id={id}>
            <div>
          <Fade top>
                <img src={image} alt="Designer" />
          </Fade>
            </div>
          <Fade bottom>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                {button && <button>{button}</button>}
            </div>
          </Fade>
    </section>
  )
}
