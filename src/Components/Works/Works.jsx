import React from 'react'
import './Works.css'
import Utopian from "../../../src/img/Utopian.png"
import ByteWink from "../../../src/img/ByteWink.png"
import Hitchki from "../../../src/img/Hitchki.png"
import DostHost from "../../../src/img/DHost.png"
import Richesm from "../../../src/img/Richesm.png"
import { motion } from "framer-motion";
const Works = () => {
  return (
    <div className="works"> 
     <div className="awesome">

          <span>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            Lorem ispum is simpley dummy text of printing of printing Lorem
            <br />
            ispum is simpley dummy text of printingLorem ispum is simpley dummy
            text
            <br />
            y dummy text of printingLorem
            <br />
            ispum is simpley dummy text of printing
          </span>
            <button className="button s-button">Hire Me</button>
          
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
    </div>
    {/* right side */}
    <div className="w-right">
    <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
        <div className="w-mainCircle">
            <div className="w-secCircle">
                <img src={Utopian} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={ByteWink} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={DostHost} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Hitchki} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Richesm} alt="" />
            </div>
        </div>
        </motion.div>
        { /* background Circle */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>

    </div>
    </div>
  )
}

export default Works