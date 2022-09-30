import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
        <div className='footer--content'>
            <div>
                <ul>
                    <li>QUICK LINKS</li>
                    <li><Link>get a quote</Link></li>
                    <li><Link>how we work</Link></li>
                    <li><Link>services</Link></li>
                    <li><Link>Schedule a call</Link></li>
                </ul>
                <ul>
                    <li>CONTACT US</li>
                    <li><Link>Office</Link></li>
                    <li><Link>Call: +234 xxx - xxx - xxx</Link></li>
                    <li><Link>Mail: @techdesk.io</Link></li>
                </ul>
                <ul>
                    <li>CONNECT WITH US</li>
                    <li><Link>Twitter</Link></li>
                    <li><Link>LinkedIn</Link></li>
                    <li><Link>Facebook</Link></li>
                    <li><Link>Instagram</Link></li>
                </ul>

                <h2>Tech Desk</h2>
            </div>
            <p>&copy; 2022 | Tech Desk Inc.</p>
        </div>
    </footer>
  )
}
