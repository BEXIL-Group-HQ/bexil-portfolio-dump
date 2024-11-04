import React from 'react'

// image
import coworkers from "../assets/21.png"


export default function About() {
return (
    <div className='about'>
        <div className='about--header'>
            <h1>ABOUT US</h1>
        </div>
        <div className='about--content'>
            <div className='about--image'>
                <img src={coworkers} alt="tech team work" />
            </div>
            <div className='about--text'>
                <h2>Bexil Group Inc.</h2>
                <p>Bexil Group Inc. is a multifaceted company dedicated to providing top-notch services across various domains. Our expertise spans Taxations, Automations (Hardware and Software), Software Development, Entrepreneurship, Data Science solutions, and Hardware Installations such as CCTVs and more. We are committed to empowering businesses and individuals to grow by offering tailored solutions that meet their unique needs.</p>
                <p>At Bexil Group, we believe in delivering excellence through innovation and a deep understanding of our clients' goals. Our team of seasoned professionals works collaboratively to drive success and create lasting value.</p>
                <p>Contact us at <a href="mailto:bexilcomputer@gmail.com">bexilcomputer@gmail.com</a> to learn how we can assist in your growth journey.</p>
            </div>
        </div>
    </div>
)
}
