import React from 'react'
import { Fade, Zoom } from 'react-reveal'
import { HashLink } from 'react-router-hash-link'

// images
import heroImage from '../assets/Developer.svg'

export default function Header() {
  return (
    <header>
        <Fade left >
        <div>
            <h1>Let Tech Desk scale up your business the digital way!</h1>
            <p>
                We are focused on boosting the productivity and growth of businesses using Tech. Digitally helping businesses yield higher percentages.  
            </p>
            <p>See <span style={{borderBottom: "1px ridge #FF9270"}}><HashLink to="#whyOwnASite">why you need a website!</HashLink></span></p>
            <button>
                <a href="/getquote">HIRE US TODAY!</a>
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
