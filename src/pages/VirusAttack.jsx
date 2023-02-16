/* eslint-disable jsx-a11y/alt-text */

import React, { useState, useEffect } from 'react';
import "../styles/VirusAttack.css";
import Virus1 from '../images/VirusImages/Virus1.png';
import Virus2 from '../images/VirusImages/Virus2.png';
import Virus3 from '../images/VirusImages/Virus3.png';
import Virus4 from '../images/VirusImages/Virus4.png';
import Virus5 from '../images/VirusImages/Virus5.png';
import Virus6 from '../images/VirusImages/Virus6.png';
import Virus7 from '../images/VirusImages/Virus7.png';
import Virus8 from '../images/VirusImages/Virus8.png';

const Thumbnail = ({ arr, image, index }) => {
  return (<div className="tumbnail">
    {
      arr.map((imgsrc, i) => (
        <img
          key={i}
          height="50"
          src={imgsrc}
          onClick={() => image(i)}
          className={index === i ? 'active' : ''}
        />
      ))
    }
  </div>)
}

const Slideshow = ({ imgs }) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if (index === imgs.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }
  const prev = () => {
    if (index === 0) {
      setIndex(imgs.length - 1)
    } else {
      setIndex(index - 1)
    }
  }


  return (
    <div className="slideshow">
      <img className="mainImg" src={imgs[index]} />
      <div className="actions">
        <button onClick={prev} style={{color:"white", fontSize:20}}>&#60;</button>
        <button onClick={next} style={{color:"white", fontSize:20}}>&#62;</button>
      </div>
      <Thumbnail arr={imgs} image={setIndex} index={index} />
    </div>
  )
}

function VirusAttack() {

  return (
    <div className="App">
      <h1>Virus Attack</h1>
      <Slideshow
        imgs={
          [Virus1,Virus2,Virus3,Virus4,Virus5,Virus6,Virus7,Virus8]
        }
      />
       <div className='gameAbout'>
        <p>
         <strong>Virus Attack</strong> is a 2D Android mobile high-scoring game. It is made using
         C# in Unity and you can play it only by moving your finger.
       </p>
       <p>
        The purpose of this game is to stay alive as much as you can, raise your score and 
        collect as many coins as you can. You can do this by avoiding the enemy viruses that
        are blocking your way. Your score increases by 1 point every second you are alive.
        As soon as your finger touches an enemy, you lose and you can try again.
       </p>
       <p>
        The coins you collect in every run can be exchanged for 1 of the 4 skins that are in the shop.So keep collecting them!
       </p>
        <p>
        You download the Apk here<a href='https://drive.google.com/file/d/1wuUUKRCz9CyXUr5rXfMzBPO3WkdfoTwo/view' target='blank'>Download APK file </a> 
        </p>
      </div>
    </div>
    
  );
}

export default VirusAttack;

