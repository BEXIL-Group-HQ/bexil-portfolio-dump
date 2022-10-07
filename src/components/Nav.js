import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

// logo import
import logo from "../assets/techDesk_logo.png"

export default function Nav() {

    const showHide = () => {
        let mNav = document.getElementById('mNav')
        let nav = document.getElementById('nav')
        let toggler = document.getElementsByTagName('p')
        let showIcon = document.getElementById('showMenu')
        let hideIcon = document.getElementById('hideMenu')
        let tagline = document.getElementById('tagline')

        if(mNav.style.display !== "flex"){
            mNav.style.display = "flex"
            showIcon.style.display = "none"
            hideIcon.style.display = "block"
            nav.style.backgroundColor = "#f8dcca"
            tagline.style.display = "none"
        }else{
            mNav.style.display = "none"
            nav.style.backgroundColor = ""
            showIcon.style.display = "block"
            hideIcon.style.display = "none"
        }
    }
  return (
    <nav id='nav'>
        <h2>
            {/* <h2 id='tagline'>Tech Desk</h2> */}
            <FaBars id='showMenu' onClick={showHide}/> 
        </h2>
        <h2>
            <FaTimes id='hideMenu' onClick={showHide}/>
        </h2>
        <div id='mNav'>
        {/* mobile navigation toggler */}
            
            <ul>
                <li>
                    <NavLink to="/">home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <HashLink to="#procedure">How we work</HashLink>
                </li>
            </ul>
            
            {/* <h2>tech desk</h2> */}
            <img src={logo} alt='Tech Desk Inc. Logo' />

            <ul>
                <li>
                    <NavLink>Portfolio</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">contact us</NavLink>
                </li>
                <button>
                    <NavLink>Schedule a call</NavLink>
                </button>
            </ul>
        </div>
    </nav>
  )
}
