import React from 'react'
import { Fade } from "react-reveal"
import { ImLocation2, ImPhone } from "react-icons/im"
import { FaAt, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

// // image
// import codingman from "./assets/coding-man.jpg"
// import Footer from './Footer'

export default function GetQuote() {
  return (
    <div className='contact'>
        <div className='contact--header'>
            <h1>Contact Us</h1>
        </div>
        <div className='contact--form'>
            <div>
                <h2>Get In Touch</h2>
                <p>Kindly fill out the form to send us a quick message. <br /> Our Support Team will make sure you get reply as quick as possible!</p>
                <div className='contact--form--items'>
                    <div class="gmap_canvas">
                        <iframe className='g--map' width="80%" height="300px" id="gmap_canvas" src="https://maps.google.com/maps?q=Zone%205,%20Standard%20Plaza&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                        </iframe>
                    </div>
                    <h4>You can also reach us <HashLink to="/#contactDiv"><mark>here...</mark></HashLink> </h4>
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
                    src="https://tally.so/embed/n0QA2B?alignLeft=1&transparentBackground=1&dynamicHeight=1"
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
