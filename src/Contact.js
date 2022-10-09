import React from 'react'
import { Fade } from "react-reveal"
import { ImLocation2, ImPhone } from "react-icons/im"
import { FaAt, FaLinkedin, FaTwitter } from "react-icons/fa"

// // image
// import codingman from "./assets/coding-man.jpg"
// import Footer from './Footer'

export default function Contact() {
  return (
    <div className='contact'>
        <div className='contact--header'>
            <h1>Contact Us</h1>
        </div>
        <div className='contact--form'>
            <div>
                <h2>Get In Touch</h2>
                <p>Kindly fill out the form to send us a quick message. Our Support Team will make sure you get reply as quick as possible!</p>
                <div className='contact--form--items'>
                    <div class="gmap_canvas">
                        <iframe className='g--map' width="80%" height="300px" id="gmap_canvas" src="https://maps.google.com/maps?q=Zone%205,%20Standard%20Plaza&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                    <h4>You can also reach us via:</h4>
                    <div class="contactDiv--info">
                        <ImLocation2 className='icon'/>
                        <div>
                            <h4>Visit us:</h4>
                            <p>Wuse II, Abuja, Nigeria.</p>
                        </div>
                    </div>
                    <div class="contactDiv--info">
                        <FaAt className='icon'/>
                        <div>
                            <h4>Mail us:</h4>
                            <p>support@techdesk.io</p>
                        </div>
                    </div>
                    <div class="contactDiv--info">
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
            </div>
            {/* <Fade direction="left">
                <div>
                    <div class="gmap_canvas">
                        <iframe className='g--map' width="200" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=Zone%205,%20Standard%20Plaza&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                </div>
                </Fade> */}
            {/* <form>
                <h3>Send us a Message:</h3>
                <input type="email"  placeholder="Email Address"/>
                <input type="text"  placeholder="Subject of Mail"/>
                <input type="text"  placeholder=""/>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <input type="submit" value="SEND" />
            </form> */}
            <Fade direction="right">
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
            </Fade>
        </div>
    </div>
  )
}
