import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Carousel from "../Reusable/Carousel/Carousel";
import './projects.css'

import home from '../../Resources/ProjectImages/ppphome.JPG'
import userHome from '../../Resources/ProjectImages/userHome.JPG'
import oneProject from '../../Resources/ProjectImages/oneProject.JPG'
import group from '../../Resources/ProjectImages/groupProjects.JPG'
import milestones  from '../../Resources/ProjectImages/milestones.JPG'
import purchase    from '../../Resources/ProjectImages/purchase.JPG'
import extreme  from '../../Resources/ProjectImages/extreme.JPG'
import admin  from '../../Resources/ProjectImages/admin.JPG'
import dashboard  from '../../Resources/ProjectImages/dashboard.JPG'
import guns  from '../../Resources/ProjectImages/guns.JPG'
import ugo from '../../Resources/ProjectImages/ugo.JPG'
import book from '../../Resources/ProjectImages/book.JPG'
import register from '../../Resources/ProjectImages/register.JPG'
import itinerary from '../../Resources/ProjectImages/Itinerary.JPG'
import positive from '../../Resources/ProjectImages/positivePlace.JPG'
import horoscope from '../../Resources/ProjectImages/horoscope.JPG'
import food from '../../Resources/ProjectImages/food.JPG'
import test from '../../Resources/ProjectImages/test.JPG'
import learn from '../../Resources/ProjectImages/learn.JPG'
import soup from '../../Resources/ProjectImages/soup.JPG'




const Projects = () => {

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