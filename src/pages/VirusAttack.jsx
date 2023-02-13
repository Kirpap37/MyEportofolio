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
        imgs={[
          Virus1,Virus2,Virus3,Virus4,Virus5,Virus6,Virus7,Virus8
        ]}
      />
    </div>
  );
}

export default VirusAttack;

