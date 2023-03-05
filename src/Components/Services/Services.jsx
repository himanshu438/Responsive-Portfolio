import React from 'react'
import './Services.css'
import HEmoji from '../../../src/img/hemoji.png'
import Glass from '../../../src/img/glass.png'
import Humble from '../../../src/img/humble.png'
import Card from '../Card/Card'



const Services = () => {
  return (
  <div className="services">

        {/* left side */}
    <div className="awesome">
        <span> My Awesome </span>
        <span> Services </span>
        <span> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        <br/>
        tempor incididunt ut labore et dolore magna aliqua.
        </span>
        <button className="button s-button"> Download CV </button>
        <div className="blur s-blur1" 
        style={{ background: "#ABF1FF94"}}>
      </div>

    </div>
    {/* right side */}
    <div className="cards">
        {/* first card */}
        <div style={{left: '14rem'}}>
            <Card
            emoji= {Glass}
            heading= {'Developer'}
            detail= {"Figma, Photoshop, Adobe"}
            />
        </div>
        {/* second card */}
        <div style={{ top: '12rem', left: '-4rem' }}>
            <Card
            emoji= {HEmoji}
            heading= {'Design'}
            detail= {"HTML, CSS, JavaScript, React"}
            />
        </div>
        {/* third card */}
        <div style={{ top: '19rem', left: '12rem' }}>
            <Card
            emoji= {Humble}
            heading= {'UI/UX'}
            detail= {"UX design is identifying and solving user problems; UI design is about creating intuitive,"}
            />
        </div>
        <div className="blur s-blur2"
          style={{ background: "#EED2FF"}}></div>
    </div>
    </div>
  );
};

export default Services;