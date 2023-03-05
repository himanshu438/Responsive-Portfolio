import React, {useContext} from 'react'
import './intro.css'
import Github from '../../../img/github.png'
import Linkedin from '../../../img/linkedin.png'
import Instagram from '../../../img/insta.png'
import Vector1 from '../../../img/Vector1.png'
import Vector2 from '../../../img/Vector2.png'
import boy from '../../../img/boy.png'
import crown from '../../../img/crown.png' 
import thumb from '../../../img/thumb.png'
import gemoji from '../../../img/gemoji.png'
import FloatingDiv from '../../FloatingDiv/FloatingDiv'
import { motion } from "framer-motion";
import { themeContext } from "../../../Context";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
 
    // Transition
    const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span> Hy! I Am</span>
            <span> Himanshu Kumar</span>
            <span> Frontend developer with experience 
                in web designing and development, 
                producting the quality work</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons"> 
        <a href='https://github.com/himanshu438'>
        <img src={Github} alt="" />
        </a>
        <a href='https://www.linkedin.com/in/himanshukashk/'>
        <img src={Linkedin} alt="" />
        </a>
            <img src={Instagram} alt="" />
        
        
        </div>
        </div>
        <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={gemoji}
          alt=""
        />
        <div style={{top: '-4%', left: '68%'}}>
            <FloatingDiv image={crown} txt1='Web' txt2='Developer'/>
        </div>
        <div style={{top: '18rem', left: '0rem'}}>
        <FloatingDiv image={thumb} txt1='Best Design'/>
        </div>
        <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
        <div className="blur" style={{
            background: '#C1F5FF',
            top: '17rem', 
            width: '21rem',
            height: '11rem',
            left: '-9rem'
            }}></div>
        </div>
        </div>
  )
}

export default Intro