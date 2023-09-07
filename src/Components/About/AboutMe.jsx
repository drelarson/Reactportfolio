import React from "react";
import dre from '../../Resources/Images/Dre.jpg'
import './about.css'

const AboutMe = () => {

    return (


        <div id="aboutArea">
            <div className="headers">About Me</div>

            <div id="intro">
                I am a professional with a passion for web development, a dedication to client satisfaction, and a relentless drive for self-improvement. I am ready to leverage my skills and experience to tackle new challenges,  and create and contribute to innovative projects. Let's collaborate and bring your ideas light!
            </div>
            <div id="textBox">


                <div id="about">

                    <div className="paras">I have versatile background in operations, management, and production, all of which have uniquely   equipped me for a dynamic career within the ever-evolving world of web development. My journey began with a strong foundation in business, having earned an Associate's Degree with a concentration in Business then undertaking a comprehensive certification in Fullstack Web Development, specializing in the powerful MERN (MongoDB, Express.js, React, Node.js) Stack. This intensive program honed my technical skills and provided me with the knowledge needed to craft innovative web solutions.</div>

                    <div className="paras">
                        What sets me apart in the world of web development is my unique blend of skills and experiences. My background in operations and management has instilled in me a strong sense of organization, efficiency, and the ability to see the big picture. Meanwhile, my technical skillfulness in web development allows me to translate those skills into the digital world, creating web solutions that are not only visually appealing but also functionally seamless.

                    </div>

                    <div className="paras">
                        I firmly believe that open communication and trust are the cornerstones of successful projects, and I am dedicated to ensuring that every client's vision is not only realized but exceeded. My commitment to exceptional service has allowed me to drive client retention efforts and build lasting partnerships.

                    </div>

                    <div className="paras">

                        I thrive on challenges and am always eager to learn through hands-on experience, on-the-job training, and further education. The fast-paced nature of the technology field excites me, and I'm continually seeking opportunities to expand my knowledge and stay at the forefront of industry trends.

                    </div>

                </div>
                <div id="imageArea"><img className="myPicture" src={dre} alt="Andre's Picture" /></div>
            </div>

        </div>

    )

}

export default AboutMe
