import React from 'react';
import './Contact.css';
import contactImg from "./img/about-9.jpg"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMailBulk } from "react-icons/fa"

function Contact() {
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
                                <input type="text" className="contact name" placeholder="Your name *" name="Name" />
                                <input type="text" className="contact email" placeholder="Your Email *" name="Email" />
                                <input type="text" className="contact subject" placeholder="Write a Subject" name="Subject" />
                                <textarea name="Message" id="message" placeholder="Write Your message" ></textarea>
                                <button className="btn contact pointer" type="submit">Submit</button>
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
