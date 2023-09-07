import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "../Reusable/Carousel/Carousel";
import './projects.css'
import test1 from '../../Resources/Images/Alogo.png'
import test2 from '../../Resources/Images/Dre.jpg'
import test3 from '../../Resources/Images/Linken.png'
import test4 from '../../Resources/Images/github.png'
import test5 from '../../Resources/Images/gmail2.gif'
import home from '../../Resources/Images/ProjectImages/ppphome.JPG'
import userHome from '../../Resources/Images/ProjectImages/userHome.JPG'
import oneProject from '../../Resources/Images/ProjectImages/oneProject.JPG'
import group from '../../Resources/Images/ProjectImages/groupProjects.JPG'
import milestones  from '../../Resources/Images/ProjectImages/milestones.JPG'
import purchase    from '../../Resources/Images/ProjectImages/purchase.JPG'
import extreme  from '../../Resources/Images/ProjectImages/extreme.JPG'
import admin  from '../../Resources/Images/ProjectImages/admin.JPG'
import dashboard  from '../../Resources/Images/ProjectImages/dashboard.JPG'
import guns  from '../../Resources/Images/ProjectImages/guns.JPG'
import ugo from '../../Resources/Images/ProjectImages/ugo.JPG'
import book from '../../Resources/Images/ProjectImages/book.JPG'
import register from '../../Resources/Images/ProjectImages/register.JPG'
import itinerary from '../../Resources/Images/ProjectImages/Itinerary.JPG'
import positive from '../../Resources/Images/ProjectImages/positivePlace.JPG'
import horoscope from '../../Resources/Images/ProjectImages/horoscope.JPG'
import food from '../../Resources/Images/ProjectImages/food.JPG'
import test from '../../Resources/Images/ProjectImages/test.JPG'
import learn from '../../Resources/Images/ProjectImages/learn.JPG'
import soup from '../../Resources/Images/ProjectImages/soup.JPG'




const Projects = () => {

    const images = [test1, test2, test3, test4, test5]
    const pppProjects = [home, userHome, oneProject, group, milestones]
    const azEnt = [guns,purchase, extreme, admin, dashboard]
    const ugoImgs = [ugo, book, register, itinerary]
    const positiveImgs = [positive, horoscope, food, test, learn,soup]



    return (
        <div id="projectsArea">
            <div id="myProjects" className="headers">My Projects</div>
            <div id="projectsDiv">

                <Carousel id={"p1"} array = {pppProjects}/> 
                <Carousel id={"p2"} array={positiveImgs}/>
                <Carousel id={"p3"} array={azEnt}/>
                <Carousel id={"p4"} array={ugoImgs}/>
       
             
            </div>
 
   
        </div>

    )

}

export default Projects