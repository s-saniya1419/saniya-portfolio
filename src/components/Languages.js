import React from "react";
import { FaLanguage } from "react-icons/fa";

function Languages(){

const languages = [
{ name:"English", level:"Fluent" },
{ name:"Hindi", level:"Fluent" },
{ name:"Telugu", level:"Native" }
]

return(

<section className="languages-section">

<h2>Languages</h2>

<div className="language-card">

<div className="language-header">
<FaLanguage/>
<p>I can communicate in multiple languages</p>
</div>

<div className="language-grid">

{languages.map((lang,index)=>(
<div key={index} className="language-box">

<h3>{lang.name}</h3>
<p>{lang.level}</p>

</div>
))}

</div>

</div>

</section>

)

}

export default Languages