import React from "react";
import { FaCode, FaDatabase, FaTools, FaUsers } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";

function Skills() {

const skills = {
languages: ["Python","C","Java (Basics)"],

technologies: [
"React Native",
"HTML",
"CSS",
"JavaScript"
],

database: ["MongoDB","Firebase"],

tools: ["Git","VS Code","Canva"],

softskills: [
"Communication",
"Teamwork",
"Problem Solving",
"Adaptability"
],

languagesKnown: ["English","Hindi","Telugu"]
}

return (

<section id="skills" className="skills">

<h2 className="section-title">Skills & Expertise</h2>

<div className="skills-grid">

{/* Programming Languages */}

<div className="skill-card">
<div className="skill-icon">
<FaCode />
</div>

<h3>Programming Languages</h3>

<div className="skill-tags">
{skills.languages.map(skill=>(
<span>{skill}</span>
))}
</div>

</div>


{/* Technologies */}

<div className="skill-card">
<div className="skill-icon">
<MdDeveloperMode />
</div>

<h3>Technologies</h3>

<div className="skill-tags">
{skills.technologies.map(skill=>(
<span>{skill}</span>
))}
</div>

</div>


{/* Database */}

<div className="skill-card">
<div className="skill-icon">
<FaDatabase />
</div>

<h3>Database</h3>

<div className="skill-tags">
{skills.database.map(skill=>(
<span>{skill}</span>
))}
</div>

</div>


{/* Tools */}

<div className="skill-card">
<div className="skill-icon">
<FaTools />
</div>

<h3>Tools</h3>

<div className="skill-tags">
{skills.tools.map(skill=>(
<span>{skill}</span>
))}
</div>

</div>


{/* Soft Skills */}

<div className="skill-card">
<div className="skill-icon">
<FaUsers />
</div>

<h3>Soft Skills</h3>

<div className="skill-tags">
{skills.softskills.map(skill=>(
<span>{skill}</span>
))}
</div>

</div>

</div>

</section>

)

}

export default Skills