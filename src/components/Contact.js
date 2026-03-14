import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact(){

return(

<section id="contact" className="contact">

<h2 className="section-title">Get In Touch</h2>

<p className="contact-text">
Feel free to reach out for collaborations, opportunities, or just a friendly chat!
</p>

<div className="contact-grid">

<div className="contact-card">

<FaEnvelope className="contact-icon"/>

<h3>Email</h3>

<p>sksaniya474@gmail.com</p>

</div>


<div className="contact-card">

<FaPhone className="contact-icon"/>

<h3>Phone</h3>

<p>+91 9491879272</p>

</div>


<div className="contact-card">

<FaMapMarkerAlt className="contact-icon"/>

<h3>Location</h3>

<p>Sattenapalle, Andhra Pradesh</p>

</div>

</div>


<h3 className="connect-title">Connect With Me</h3>

<div className="social-icons">

<a
href="https://github.com/s-saniya1419"
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

)

}

export default Contact