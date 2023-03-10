import React, { useEffect } from 'react'
import {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
import PDF from '../assets/CV_KIRIAKOS_PAPADOPOULOS.pdf';


function Navbar() {
  const [expandNavbar, setExpandNavbar] =  useState(false);

  const location = useLocation(); 

  useEffect(() =>{
    setExpandNavbar(false);
  },[location]);

  return <div className='navbar' id={expandNavbar ? "open" : "close"}>
    <div className='toggleButton'>
      <button onClick={()=> {
          setExpandNavbar((prev) => !prev);
          }}
          >
       <ReorderOutlinedIcon />
      </button>
    </div>
    <div className='links'>
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience"> Experience </Link> 
    </div>
    <a href={PDF} target='blank' className="resume"> 
     <p style={{margin:3}}>My Resume</p>
    </a>
  </div>;

}

export default Navbar