import React from "react";
import Alogo from '../../Resources/Images/Alogo.png'
import github from '../../Resources/Images/github1.png'
import mail from '../../Resources/Images/mail1.png'
import linkedin from '../../Resources/Images/Linken.png'
import './nav.css'

const Navbar = () => {

    return (

        <div id="navBar">

            <a id="atagLogo" href="#landingArea"><img id='navLogo' src={Alogo} alt="AL Logo" /></a>

            <div id="linkDiv">

                <a className="linksDivs" href="#aboutArea"> About Me </a>
                <a className="linksDivs" href="#projectsArea"> My Projects </a>
                <a className="linksDivs" href="#skillsArea"> My Skills </a>
                <a className="linksDivs" href="#contactArea"> Contact Me </a>


            </div>

            <div id="contactDiv">

                <span className="contactlinksDiv">
                    <a href="https://github.com/drelarson/Reactportfolio.git" target="_blank">
                        <img className="contactlinks" src={github} alt="Gmail icon" />
                    </a>
                </span>
                <span className="contactlinksDiv">

                    <a href="mailto:larsonandre01@gmail.com">
                        <img className="contactlinks" src={mail} alt="LinkedIn Icon" /></a>
                </span>
                <span className="contactlinksDiv">
                    <a href="https://www.linkedin.com/in/andre-larson-38729228a/" target="_blank">
                        <img className="contactlinks" src={linkedin} alt="Github Icon" /></a>
                </span>

            </div>



        </div>

    )


}

export default Navbar
