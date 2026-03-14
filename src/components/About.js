import React from "react";
import { FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="about">

      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        {/* LEFT SIDE TEXT */}
        <div className="about-text">

          <p>
            I am a Computer Science (Artificial Intelligence) student at
            Chalapathi Institute of Technology. I enjoy building mobile
            applications and exploring technologies like Artificial
            Intelligence, Data Analytics, and modern web frameworks.
          </p>

          <p>
            I focus on creating scalable, user-friendly applications and
            solving real-world problems using technology. My passion lies in
            leveraging cutting-edge tools and frameworks to deliver impactful
            solutions.
          </p>

        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="about-cards">

          <div className="about-card">

            <div className="card-icon">
              <FaGraduationCap />
            </div>

            <div>
              <h3>B.Tech Computer Science (Artificial Intelligence)</h3>
              <p>Chalapathi Institute of Technology</p>
              <p>Expected Graduation: 2028</p>
              <p className="cgpa">CGPA: 8.2</p>
            </div>

          </div>

          <div className="about-card">

            <div className="card-icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Location</h3>
              <p>Sattenapalle, Andhra Pradesh, India</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;