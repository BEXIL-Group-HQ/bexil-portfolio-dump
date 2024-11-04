import React from 'react'
import { ImLocation2, ImPhone } from "react-icons/im"
import { FaAt } from "react-icons/fa"
import { Fade } from "react-awesome-reveal"

export default function ContactDiv() {
  return (
    <Fade>
    <div id='contactDiv'>
        <div className='contactDiv--content'>
            <div className='contactDiv--header'>
                <h2>CONTACT US</h2>
            </div>

            <div className='contactDiv--items'>
                <div>
                    <div className="gmap_canvas">
                    <iframe title="office location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.1340889847443!2d13.152386275921302!3d11.82588123895884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11049f004aab05b3%3A0x46def503debe74c1!2sBEXIL%20GARDENS!5e0!3m2!1sen!2sng!4v1730708957632!5m2!1sen!2sng" width="80%" height="300px"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    ></iframe>
                    </div>
                    <div className="contactDiv--info">
                        <ImLocation2 className='icon'/>
                        <div>
                            <h4>Visit us:</h4>
                            <p>R5G3+9V8, Gidan Madara, Lagos St, <br /> Maiduguri 600282, <br /> Borno, Nigeria</p>
                        </div>
                    </div>
                    <div className="contactDiv--info">
                        <FaAt className='icon'/>
                        <div>
                            <h4>Mail us:</h4>
                            <p>bexilcomputer@gmail.com</p>
                        </div>
                    </div>
                    <div className="contactDiv--info">
                        <ImPhone className='icon'/>
                        <div>
                            <h4>Call us via:</h4>
                            <p>+2348068375557</p>
                        </div>
                    </div>
                    {/* <div className="contactDiv--icons">
                        <FaLinkedin className='icon'/>
                        <FaTwitter className='icon'/>
                    </div> */}
                </div>

                <div>
                {/* Tally Forms */}
                    <iframe
                        src="https://tally.so/embed/3NZqQ3?alignLeft=1&transparentBackground=1&dynamicHeight=1"
                        width="100%"
                        height="600"
                        frameBorder="0"
                        marginHeight="0 "
                        marginWidth="0"
                        title="Send a message:"
                        className='tally--form'>
                    </iframe>
                </div>
            </div>
        </div>
    </div>
    </Fade>
  )
}
