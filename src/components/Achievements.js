import React from "react";
import { FaTrophy, FaMedal, FaStar } from "react-icons/fa";

function Achievements() {

const achievements = [
{
title:"3rd Prize – Salesforce Agentforce Ideathon",
desc:"Secured 3rd position in the Salesforce Agentforce Ideathon",
year:"2025",
icon:<FaTrophy/>
},
{
title:"Participant – RoboMelaa Hackathon",
desc:"Participated in RoboMelaa Hackathon, showcasing innovative solutions",
year:"2025",
icon:<FaMedal/>
},
{
title:"Participant – HackMelaa Hackathon",
desc:"Participated in HackMelaa Hackathon, collaborating with diverse teams",
year:"2026",
icon:<FaStar/>
}
]

return (

<section id="achievements" className="achievements">

<h2 className="section-title">Achievements & Recognition</h2>

<div className="achievements-container">

{achievements.map((item,index)=>(
<div key={index} className="achievement-card">

<div className="achievement-icon">
{item.icon}
</div>

<div className="achievement-content">

<h3>{item.title}</h3>
<p>{item.desc}</p>

</div>

<div className="achievement-year">
{item.year}
</div>

</div>
))}

</div>

</section>

)

}

export default Achievements;