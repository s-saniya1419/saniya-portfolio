import React from "react";
import { Link } from "react-scroll";

function Navbar() {

return (

<nav className="navbar">

<h2 className="logo">SS</h2>

<ul className="nav-links">

<li>
<Link to="home" smooth={true} duration={500}>
Home
</Link>
</li>

<li>
<Link to="about" smooth={true} duration={500}>
About
</Link>
</li>

<li>
<Link to="skills" smooth={true} duration={500}>
Skills
</Link>
</li>

<li>
<Link to="projects" smooth={true} duration={500}>
Projects
</Link>
</li>

<li>
<Link to="certifications" smooth={true} duration={500}>
Certifications
</Link>
</li>

<li>
<Link to="achievements" smooth={true} duration={500}>
Achievements
</Link>
</li>

<li>
<Link to="contact" smooth={true} duration={500}>
Contact
</Link>
</li>

</ul>

</nav>

)

}

export default Navbar