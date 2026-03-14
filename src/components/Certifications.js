import React from "react";
import { FaCertificate } from "react-icons/fa";

function Certifications() {

const certifications = [
{
title: "Gen AI Powered Data Analytics Job Simulation",
org: "TATA Forage"
},
{
title: "Data Analytics Fundamentals",
org: "Google"
},
{
title: "Introduction to Modern AI",
org: "Cisco"
},
{
title: "HTML & CSS",
org: "Let's Upgrade"
},
{
title: "JavaScript",
org: "Let's Upgrade"
}
];

return (

<section id="certifications" className="certifications">

<h2 className="section-title">Certifications</h2>

<div className="cert-grid">

{certifications.map((cert, index) => (

<div key={index} className="cert-card">

<div className="cert-icon">
<FaCertificate />
</div>

<h3>{cert.title}</h3>

<p>{cert.org}</p>

</div>

))}

</div>

</section>

);

}

export default Certifications;