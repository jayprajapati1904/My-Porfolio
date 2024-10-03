import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.component.css";

export default function Header() {
  return (
    <div className="header">
      <div className="content">
        <div className="head">
          <span className="one">My</span>
          <span>Portfolio</span>
        </div>

        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/Project">Projects</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
