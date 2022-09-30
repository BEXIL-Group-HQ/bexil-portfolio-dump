import React from 'react'
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


export default function Nav() {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">HOME</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
            <li>
                <HashLink to="#procedure">How we work</HashLink>
            </li>
        </ul>
        <div>
            <h2>tech desk</h2>
        </div>
        <ul>
            <li>
                <NavLink>PORTFOLIO</NavLink>
            </li>
            <li>
                <NavLink to="/contact">CONTACT US</NavLink>
            </li>
            <li>
                <button>
                    <NavLink>Schedule a call</NavLink>
                </button>
            </li>
        </ul>
    </nav>
  )
}
