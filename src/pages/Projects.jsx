import React from 'react'
import {Link} from "react-router-dom";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className='projects'>
       <h1>My Projects</h1>
       <ul className='projects-list'>
        <li className="first">
          <Link to="/projects/VirusAttack">
           <span className='overlay'>
           <p className='title'>
              Virus Attack - Mobile Game
            </p>
          </span> 
          </Link>
        </li>
        <li className="second">
         <Link to="/projects/AlienInvasion">
          <span className='overlay'>
            <p className='title'>
              Alien Invasion - Shoot 'Em Up Game 
            </p>
          </span>
          </Link>
        </li>
       </ul>
    </div>
  )
}

export default Projects