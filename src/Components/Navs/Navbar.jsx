import React from "react";
import Alogo from '../../Resources/Images/Alogo.png'
import github from '../../Resources/Images/github1.png'
import mail from '../../Resources/Images/mail1.png'
import linkedin from '../../Resources/Images/Linken.png'
import './nav.css'

const Navbar = ()=>{

    return(

        <div id="navBar">

            <img id='navLogo' src={Alogo} alt="AL Logo" />

            <div id="linkDiv">

                <a className="linksDivs"href=""> About Me </a>
                <a className="linksDivs"href=""> My Projects </a>
                <a className="linksDivs"href=""> My Skills </a>
                <a className="linksDivs"href=""> Contact Me </a>

                </div>

            <div id="contactDiv">

                <span className="contactlinksDiv"><img className="contactlinks" src={github} alt="Gmail icon"/></span>
                <span className="contactlinksDiv"><img className="contactlinks" src={mail} alt="LinkedIn Icon" /></span>
                <span className="contactlinksDiv"><img  className="contactlinks" src={linkedin} alt="Github Icon"/></span>

            </div>


        
        </div>

    )


}

export default Navbar
