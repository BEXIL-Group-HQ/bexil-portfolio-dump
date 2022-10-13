import React from 'react'
import { ImLocation2, ImPhone } from "react-icons/im"
import { FaAt, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Fade } from 'react-reveal'

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
                        <iframe className='g--map' width="80%" height="300px" id="gmap_canvas" src="https://maps.google.com/maps?q=Zone%205,%20Standard%20Plaza&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                    <div className="contactDiv--info">
                        <ImLocation2 className='icon'/>
                        <div>
                            <h4>Visit us:</h4>
                            <p>Wuse II, Abuja, Nigeria.</p>
                        </div>
                    </div>
                    <div className="contactDiv--info">
                        <FaAt className='icon'/>
                        <div>
                            <h4>Mail us:</h4>
                            <p>support@techdesk.io</p>
                        </div>
                    </div>
                    <div className="contactDiv--info">
                        <ImPhone className='icon'/>
                        <div>
                            <h4>Call us via:</h4>
                            <p>+2348068375557</p>
                        </div>
                    </div>
                    <div className="contactDiv--icons">
                        <FaLinkedin className='icon'/>
                        <FaTwitter className='icon'/>
                    </div>
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
