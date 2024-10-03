import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"; // Make sure to import the icons
import "../css/Contact.page.css"; // Ensure this file doesn't apply background styles

export default function Contact() {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="contact-info"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <h1>Contact Me</h1>
        <p>
          <strong>Name : </strong> Jay Prajapati
        </p>
        <p>
          <strong>Email : </strong>{" "}
          <a
            href="mailto:jay1904prajapati@gmail.com?subject=Hello%20Jay&body=Hi%20Jay,"
            title="Send an email to Jay Prajapati"
          >
            jay1904prajapati@gmail.com
          </a>
        </p>
        <p>
          <strong>Mobile No : </strong>{" "}
          <a href="tel:+919429468900" title="Call Jay Prajapati">
            +91 9429468900
          </a>
        </p>
        <p>
          <strong>City : </strong> Ahmedabad
        </p>
        <p>
          <strong>Address : </strong> Durdarshan Kendra, Thaltej, Ahmedabad
        </p>

        {/* Social Media Links */}
        <div className="social-media">
          <h2>Also Connect with me on</h2>
          <a href="https://github.com/jayprajapati1904" title="GitHub Profile">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/jay-prajapati-768213277/"
            title="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a href="https://x.com/jayprajapa1908" title="Twitter Profile">
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/j_a_y_1245/"
            title="Instagram Profile"
          >
            <FaInstagram />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
