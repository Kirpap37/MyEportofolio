import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css";
import { FaJava } from 'react-icons/fa';
import { 
        SiCsharp, SiC , SiReact,  SiJavascript, SiHtml5, SiCss3, SiUnity, SiScratch   
       } from 'react-icons/si';





function Home() {
  return (
  <div className='home'>
    <div className='about'>
      <h2>Hi, My Name is Kiriakos</h2>
      <div className='prompt'>
        <p>
        Passionate about Computer Sciences, innovation and Technology, 
        sedulous, hard worker, disciplined that can work under pressure 
        individually as well as in a team. Eager to learn new technologies 
        and improve Programming skills
        </p>
        <EmailIcon />
        <LinkedInIcon />
      </div>
    </div>
    <div className='skills'>
      <h1>Skills</h1>
          <div className="skills-list">
            <p> <SiCsharp /> C#</p>           
            <p> <SiC /> C </p>
            <p> <SiReact /> React.js </p>
            <p> <SiJavascript /> JavaScript</p>
            <p> <SiHtml5 /> Html</p>
            <p> <SiCss3 /> Css</p>
            <p> <SiUnity /> Unity</p>
            <p> <SiScratch /> Scratch</p>
            <p> <FaJava /> Java</p>
          </div>
    </div>
  </div>
  );
}


export default Home