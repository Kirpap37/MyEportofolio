import React from 'react'
import "../styles/Home.css";
import { FaJava } from 'react-icons/fa';
import { 
        SiCsharp, SiC , SiReact,  SiJavascript, SiHtml5, SiCss3, SiUnity, SiScratch   
       } from 'react-icons/si';
import CV from '../assets/CV.jpg';
import PDF from '../assets/CV_KIRIAKOS_PAPADOPOULOS.pdf';





function Home() {
  return (
  <div className='home'>
    <div className='about'>
    <a href={PDF} target='blank' className="resume"> 
     <p style={{margin:10}}>My Resume</p>
    </a>
      <img src={CV}  className="logo" alt='' />
      <h2>Hi, My Name is Kiriakos</h2>
      <div className='prompt'> 
        <p>
        Passionate about Computer Sciences, innovation and Technology, 
        sedulous, hard worker, disciplined that can work under pressure 
        individually as well as in a team. Eager to learn new technologies 
        and improve Programming skills
        </p>
        
      </div>
    </div>
    <div className='skills'>
      <h1>Skills</h1>
      <div className='skills-container'>
          <div className="skills-list">
            <p> <SiHtml5 /> Html</p>
            <p> <SiJavascript /> JavaScript</p>
            <p> <SiCsharp /> C#</p>
            <p> <FaJava /> Java</p>           
            <p> <SiUnity /> Unity</p> 
          </div>
          <div className="skills-list">
            <p> <SiCss3 /> Css</p>
            <p> <SiReact /> React.js </p>
             <p> <SiC /> C </p>
             <p> <SiScratch /> Scratch</p>
           
          </div>
        </div>
    </div>
  </div>
  );
}


export default Home