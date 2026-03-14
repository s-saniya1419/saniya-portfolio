import React from "react";
import { FaMobileAlt, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {

return (

<section id="projects" className="projects">

<h2 className="section-title">Featured Projects</h2>

<div className="project-container">

<div className="project-card">

<div className="project-header">

<div className="project-icon">
<FaMobileAlt/>
</div>

<div className="project-title">
<h3>EventBright</h3>
<p>Event Management Mobile Application</p>
</div>

<FaExternalLinkAlt className="project-link"/>

</div>

<p className="project-desc">

Cross-platform mobile application for browsing and managing events.
Built with modern technologies to provide a seamless user experience
with scalable architecture and real-time data synchronization.

</p>

<div className="features-section">

<h4>Key Features</h4>

<ul className="features">

<li>Event browsing and management</li>
<li>MongoDB database</li>
<li>Scalable architecture</li>
<li>Firebase backend integration</li>
<li>Responsive mobile UI</li>

</ul>

</div>

<div className="tech-section">

<h4>Technologies Used</h4>

<div className="tech-tags">

<span>React Native</span>
<span>MongoDB</span>
<span>Firebase</span>

</div>

</div>

</div>

</div>

</section>

)

}

export default Projects