import React from 'react'
import "../styles/Footer.css";
import { FaHome,FaMailBulk,FaPhone } from 'react-icons/fa';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



function Footer() {
  return (
  <div className='footer'>
   <div className='footer-list'>
    <h2>Contact Me</h2>
     <div className='location'>
      <h4>
       <FaHome size={30} style={{color:"#fff" }}/>
        Georgiou Kondili 37 ,13231 Athens
        </h4> 
     </div> 
     <div className='phone'>
      <h4>
        <FaPhone size={30} style={{color:"#fff" }}/>
        +30 693 420 8262
      </h4>
     </div> 
     <div className='email'>
      <h4>
         <FaMailBulk size={30} style={{color:"#fff" }}/>
         Kirpap37@yahoo.gr
      </h4>
     </div>
   </div>
   <div className='socialMedia'>
   <a href="https://github.com/Kirpap37" target='blank'>
    <GitHubIcon />
   </a>  
   <a href="https://linkedin.com/in/kiriakos-papadopoulos-69188a254" target='blank'>
    <LinkedInIcon />
   </a>  
   </div>
  </div>
)}

export default Footer;
