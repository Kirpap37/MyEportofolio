/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import "../styles/AlienInvasion.css";
import Alien1 from '../images/AlienImages/Alien1.png';
import Alien2 from '../images/AlienImages/Alien2.png';
import Alien3 from '../images/AlienImages/Alien3.png';
import Alien4 from '../images/AlienImages/Alien4.png';
import Alien5 from '../images/AlienImages/Alien5.png';
import Alien6 from '../images/AlienImages/Alien6.png';
import Alien7 from '../images/AlienImages/Alien7.png';
import Alien8 from '../images/AlienImages/Alien8.png';
import Alien9 from '../images/AlienImages/Alien9.png';
import Alien10 from '../images/AlienImages/Alien10.png';


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

function AlienInvasion() {

  return (
    <div className="App">
      <h1>Alien Invasion</h1>
      <Slideshow
        imgs={[
         Alien1,Alien2,Alien3,Alien4,Alien5,Alien6,Alien7,Alien8,Alien9,Alien10
        ]}
      />
      <div className='gameAbout'>
        <p>
          <strong>Alien Invasion</strong> is a space shoot 'em up game.
          It is made using Scratch and you can play it only by using the 
          movement of your mouse, as it shoots automatically.
          It has two modes, Story mode and Infinite mode 
        </p>
        <p>
         In Story mode, you have to stay alive until the end and kill the 
         final boss, to save the planet from the Alien Invasion. You have 
         3 lives to do it, that you can lose by getting hit with a bullet 
         or colliding with an enemy. By killing enemies, you have the chance
         to get a Power up. There are  2 types of Power ups. The first one
         is the Rapid fire, which allows you to shoot very fast like a machine gun,
         and the other one is the Shield that prevents you from taking any kind of damage.
        </p>
        <p>
         In Infinite mode, you have to stay alive as long as you can, so you
         can raise your high score. In this mode, you only have one life. 
         By staying alive you are getting 2 points every second and by killing an 
         enemy 10 points. The previous power ups are available in this mode, too.
        </p>
        <p>
        You can play the game at<a href='https://scratch.mit.edu/projects/407620172' target='blank'>https://scratch.mit.edu/projects/407620172.</a> 
        </p>
      </div>
    </div>
  );
}
export default AlienInvasion;