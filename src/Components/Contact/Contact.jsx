import React, {useContext} from 'react'
import './Contact.css'
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="contact-form">
    <div className="w-left">
        <div className="awesome">
        <span style={{color: darkMode?'white': ''}}>Get in Touch</span>
            <span> Contact me</span>
            <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
    </div>

     {/* right side form */}
     <div className="c-right">
        <form>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          
          <div
            className="blur c-blur1"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
        </form>
      </div>
   </div>
  )
}

export default Contact