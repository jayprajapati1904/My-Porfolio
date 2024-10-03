import React from "react";
import { motion } from "framer-motion";
import "../css/Contact.page.css";

export default function Contact() {
  return (
    <motion.div
      className="contact-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="contact-hero"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <img src="/_10.jpg" alt="Jay Prajapati" />
      </motion.div>

      <motion.div
        className="contact-info"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        <h1>Contact Information</h1>
        <p>
          <strong>Name:</strong> Jay Prajapati
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:jay1904prajapati@gmail.com">
            jay1904prajapati@gmail.com
          </a>
        </p>
        <p>
          <strong>Mobile No:</strong> +91 9429468900
        </p>
        <p>
          <strong>City:</strong> Ahmedabad
        </p>
        <p>
          <strong>Address:</strong> Durdarshan Kendra, Thaltej, Ahmedabad
        </p>
      </motion.div>
    </motion.div>
  );
}
