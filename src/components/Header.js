import React from 'react';
import Timer from './Timer'
import Globe from '../assets/globe.gif'
import rightHeader from '../assets/headerRight.svg'
const Header = ({ children }) => {
    return (
        <div class="f-container fixed-hf">
            <header>
                <Timer />
                <img className="img" src={Globe}></img>
                <img className="imgHeader" src={rightHeader}></img>
            </header>
            <div class="main">
                {children}
            </div>
            <footer className="footer">
                <a className="" href="https://canvasolutions.net">Developed by Canvasolutions</a>
            </footer>
        </div>
    )
}

export default Header;

