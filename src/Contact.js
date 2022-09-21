import React from 'react';
import './Contact.css';
import contactImg from "./img/about-9.jpg"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMailBulk } from "react-icons/fa"

function Contact() {
    const scriptURL =
        "https://script.google.com/macros/s/AKfycbwjdiA7t7Q-eSf-0YDX4pL-13vqlwOSISgf7VDjtbtK5Rr9na7rX9eD4xuPCD7Kg3O3/exec";
    const form = document.forms["submit-to-google-sheet"];
    const msg = document.getElementById("msg")

    const handleSubmit = ((e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then((response) => {
                msg.innerHTML = "Your Message Sended To GOKULRAJ !!"
                setTimeout(function () {
                    msg.innerHTML = ""
                }, 5000)
                form.reset()
            })
            .catch((error) => console.error("Error!", error.message));
    });
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Contact Me</h1>
                            {/* <p className="hire__text white">I am available for freelance work. Connect with me via phone:</p> */}
                            <p className="hire__text white " id="contact__under" ><FaPhone /><strong>+91 7402415366</strong> </p>
                            <p className="hire__text white" id="contact__under" ><FaMailBulk /><strong>gokulcasper@gmail.com</strong></p>
                        </div>
                        <div className="contact__socialIcons">
                            <a href="https://github.com/Gokulcasper"><FaGithub /></a>
                            <a href="https://www.linkedin.com/in/gokulraj-p-8a426820a/"><FaLinkedin /></a>
                            <a href="mailto:gokulcasper@gmail.com"><FaEnvelope /></a>
                        </div>
                        <>
                            <div className="input__box">
                                <form name="submit-to-google-sheet" onSubmit={handleSubmit} >
                                    <input type="text" className="contact name" placeholder="Your name *" name="Name" required="true" />
                                    <input type="text" className="contact email" placeholder="Your Email *" name="Email" required="true" />
                                    <input type="text" className="contact subject" placeholder="Write a Subject" name="Subject" />
                                    <textarea name="Message" id="message" placeholder="Write Your message *" required="true"></textarea>
                                    <button className="btn contact pointer" type="submit" >Submit</button>
                                </form>
                                <span id="msg"></span>
                            </div>
                        </>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div >
    )
}

export default Contact

// Deployed ID
// AKfycbwjdiA7t7Q-eSf-0YDX4pL-13vqlwOSISgf7VDjtbtK5Rr9na7rX9eD4xuPCD7Kg3O3
// URL
// https://script.google.com/macros/s/AKfycbwjdiA7t7Q-eSf-0YDX4pL-13vqlwOSISgf7VDjtbtK5Rr9na7rX9eD4xuPCD7Kg3O3/exec