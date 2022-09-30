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
            <div>
                <img src={coworkers} alt="tech team work" />
            </div>
            <div>
                <h2>Tech Desk Inc.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis magni at earum possimus ad voluptatem, fugiat quae perferendis tenetur esse voluptas culpa consequatur totam unde excepturi vel exercitationem dolor suscipit numquam, nesciunt hic accusamus repudiandae quod quaerat. Dolorum quis at sed asperiores, deserunt aspernatur voluptates cumque qui adipisci nulla impedit?</p>
                <p>support@techdesk.com</p>
            </div>
        </div>
    </div>
  )
}
