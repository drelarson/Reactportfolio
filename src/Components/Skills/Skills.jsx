import React from "react";
import './skills.css'
import hardSkills from '../../Resources/Skills/hardSkills.jpg'
import softSkills from '../../Resources/Skills/softSkills.jpg'

const Skills = () => {

    return(
      <div id="skillsArea">

        <div id="mySkills" className="headers">My Skills</div>
  
        <div id="skillsDiv">

         <img className="skills" src={hardSkills} alt="skills logos" />
         <img className="skills" src={softSkills} alt="skills logos" />
    
        </div>


      </div>


    )
}

export default Skills