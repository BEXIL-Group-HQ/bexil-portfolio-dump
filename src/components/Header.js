import React from 'react'
import { Fade, Slide, Zoom } from 'react-reveal'

// images
import heroImage from '../assets/Developer.svg'

export default function Header() {
  return (
    <header>
        <Fade left >
        <div>
            <h1>Let Tech Desk give your Business a digital kickstart!</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam soluta quos natus veritatis tempora nihil maxime adipisci dolorum nobis, illum placeat ad sequi ut quas ullam, explicabo, animi similique excepturi sit accusamus impedit eum corporis rem. Deleniti ratione vitae iure.
            </p>
            <button>
                <a href="/contact">HIRE US TODAY!</a>
            </button>
        </div>
        </Fade>

        <Zoom>
        <div>
            <img src={heroImage} alt="Designer" />
        </div>
        </Zoom>
    </header>
  )
}
