import React from "react";
import "../css/Header.component.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="content">
          <div className="head">
            <span className="one">My</span>
            <span>Portfolio</span>
          </div>

          <div className="links">
            <a href="/"> Home</a>
            <a href="/Project">Projects</a>
            <a href="/About">About</a>
            <a href="/Contect">Contect</a>
          </div>
        </div>
      </div>
    </>
  );
}
