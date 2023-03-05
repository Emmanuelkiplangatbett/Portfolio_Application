import React from 'react' 
import {code} from "./Data"



function About() {
  return (
    <div className='about'>
      <div>
            <img src={code.image } alt="ooops!"/>
       </div>
      <h1>About Me</h1>
      <p>My name is Emmanuel KIplangat Bett, I am studying Software Engineering specializing in fullstack web Development.
        My passions for learning and gaining.I am very ambitious Junior Web Developer looking <br></br> in established IT company with the opportunity to work withe latest technologies<br></br> on challenging and diverse projects. </p>
       <p> I'm quietly confident,naturally curious,and perpetually woriking on improvig my skills as a web developer.</p>
    </div>
  )
}

export default About