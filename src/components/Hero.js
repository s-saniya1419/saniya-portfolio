import React from "react";
import { FaReact, FaFire, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

function Hero() {
  return (
    <section id="home" className="home">

    <section className="hero">

      <div className="tech-icons">
        <FaReact />
        <FaFire />
        <SiMongodb />
      </div>

      <p className="welcome">✨ Welcome to my portfolio ✨</p>

      <h1>Hi, I'm Saniya Sulthana</h1>

      <h2>AI & Mobile Application Developer</h2>

      <p className="hero-desc">
        B.Tech Computer Science (AI) student passionate about building scalable
        mobile applications using React Native, Firebase, and modern technologies.
      </p>

      <div className="social-icons">
      
      <a
      href="https://www.linkedin.com/in/saniya-sulthana-shaik-00755633b"
      target="_blank"
      rel="noopener noreferrer"
      >
      <FaGithub/>
      </a>
      
      <a
      href="https://www.linkedin.com/in/saniya-sulthana-shaik-00755633b"
      target="_blank"
      rel="noopener noreferrer"
      >
      <FaLinkedin/>
      </a>
      
      </div>

    </section>
    </section>

  );
}

export default Hero;