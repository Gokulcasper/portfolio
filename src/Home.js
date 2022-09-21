import React, { useState } from "react";
import "./Home.css";
import logo from "./img/logo.jpg";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMailBulk } from "react-icons/fa"


function Home() {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  });
  // Toogle Menu
  const [show, setShow] = useState(false);
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        <div className="header d__flex align__items__center pxy__30">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="navigation pxy__30">
            <ul className="navbar d__flex">
              <a href="#Home">
                <li className="nav__items mx__15">Home</li>
              </a>
              <a href="#About">
                <li className="nav__items mx__15">About</li>
              </a>
              <a href="#Services">
                <li className="nav__items mx__15">Skills</li>
              </a>
              <a href="#Portfolio">
                <li className="nav__items mx__15">Portfolio</li>
              </a>
              {/* <a href="#Blog">
                <li className="nav__items mx__15">Blog</li>
              </a> */}
              <a href="#Contact">
                <li className="nav__items mx__15">Contact</li>
              </a>
            </ul>
          </div>
          {/* Toogle Menu */}
          <div className="toggle__menu">
            {/* <svg onClick={() => setShow(!show)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-justify white pointer"
              viewBox="0 0 16 16"
            > */}
            {!show ? (
              <FaIcons.FaBars onClick={() => setShow(!show)} className="FaBar_bar" id="bar" />) :
              <AiIcons.AiOutlineClose className="FaBar_close" id="bar" onClick={() => setShow(!show)} />}
            {/* <path
                fill-rule="evenodd"
                d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              /> */}
            {/* </svg> */}
          </div>
          {show ? (
            <div className="sideNavbar">
              <ul className="sidebar d__flex ul__hover">
                <li className="sideNavbar li__hover">
                  <a href="#Home">Home</a>
                </li>
                <li className="sideNavbar li__hover">
                  <a href="#About">About</a>
                </li>
                <li className="sideNavbar li__hover">
                  <a href="#Services">Skills</a>
                </li>
                <li className="sideNavbar li__hover">
                  <a href="#Portfolio">Portfolio</a>
                </li>
                {/* <li className="sideNavbar">
                  <a href="#blog">Blog</a>
                </li> */}
                <li className="sideNavbar li__hover">
                  <a href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Mr.Gokulraj P</h2>
              <h4 className="home__text pz__10">I'm a passionate <h3 className="home__text sweet pz__10">Web Developer</h3> from India</h4>
            </div>
            <div className="social_Icons">
              <a href="https://github.com/Gokulcasper"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/gokulraj-p-8a426820a/"><FaLinkedin /></a>
              <a href="mailto:gokulcasper@gmail.com"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
