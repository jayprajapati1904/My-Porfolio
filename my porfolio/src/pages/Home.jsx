import React from "react";
import "../css/Home.page.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="hero">
          <img src="/_10.jpg" alt="photo" />
        </div>
        <div className="intro">
          <h1>
            <span className="span">Hello</span>, I am a Web Devloper
          </h1>
          <div>
            <p>
              Welcome to my digital playground! I'm <span>JAY PRAJAPATI</span>,
              a passionate web developer specializing in crafting visually
              stunning, high-performance websites. With a blend of creativity
              and technical expertise, I transform ideas into interactive
              experiences that captivate and engage. Let's build something
              extraordinary together where innovation meets impeccable design.
            </p>
          </div>
          <div className="icon">
            <a href="https://github.com/jayprajapati1904">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jay-prajapati-768213277/">
              <FaLinkedin />
            </a>
            <a href="https://x.com/jayprajapa1908">
              {" "}
              <FaTwitter />
            </a>

            <a href="https://www.instagram.com/j_a_y_1245/">
              <FaInstagram />
            </a>
          </div>

          <div className="buttons">
            <a href="/About">
              <button>More About me</button>
            </a>
            <a href="/Contect">
              <button>Hire Me</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
