import React from "react";
import { motion } from "framer-motion";
import "../css/Home.page.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <motion.div
      className="main"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="hero"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src="/_10.jpg" alt="photo" />
      </motion.div>

      <motion.div
        className="intro"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <h1>
          <span className="span">Hello</span>, I am a Web Developer
        </h1>
        <p>
          Welcome to my digital playground! I'm <span>JAY PRAJAPATI</span>, a
          passionate web developer specializing in crafting visually stunning,
          high-performance websites. With a blend of creativity and technical
          expertise, I transform ideas into interactive experiences that
          captivate and engage. Let's build something extraordinary together
          where innovation meets impeccable design.
        </p>
        <motion.div
          className="icon"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a href="https://github.com/jayprajapati1904">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jay-prajapati-768213277/">
            <FaLinkedin />
          </a>
          <a href="https://x.com/jayprajapa1908">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/j_a_y_1245/">
            <FaInstagram />
          </a>
        </motion.div>

        <motion.div
          className="buttons"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <a href="/About">
            <button>More About me</button>
          </a>
          <a href="/Contect">
            <button>Hire Me</button>
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
