import React, {useRef} from "react";
import emailjs from '@emailjs/browser';
import './contact.css'

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nfdj7rg', 'template_7odxp2r', form.current, 'tcSF4qroplP8H-YBs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (

        <div id="contactArea">
            <div id="contactHeader"className="headers">Contact Me</div>
            <form id="contactForm" ref={form} onSubmit={sendEmail}>
                <label className="labels">Name</label>
                <input className="inputs" type="text" name="user_name" />
                <label className="labels" >Email</label>
                <input className="inputs" type="email" name="user_email" />
                <label className="labels">Message</label>
                <textarea className="inputs textBox" name="message" />
                <input className="buttons"  type="submit" value="Send" />
            </form>

        </div>
    )


}

export default ContactMe
