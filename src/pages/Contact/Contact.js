import React from 'react'
import './Contact.css'
import LinkedIn from './LinkedIn'
import Whatsapp from './Whatsapp'
import emailjs from 'emailjs-com'

function Contact() {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_r2znkoj','template_yak0sdc',e.target,'Ca_2yV9-ve94f7l8f',).then(res=>{
        console.log(res);
    }).catch(err=> console.log(err));
  };
  
  return (
    <>
    <div className="containerContact">
        
        <div className='containerForm'>
        <h1>Contact me!</h1>
            <form onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="Name" className="inputForm"/>

                <label>Email</label>
                <input type="text" name="User_email" className="inputForm"/>

                <label>Message</label>
                <textarea name="Message" rows="6"/>
                <input type ="submit" value="Send" className="buttonSubmit"/>
            </form>
            <p>Or you can use:</p>
            <div className='IconContainer'>
            <a href="https://wa.link/l9bxp9" target="_blank">
                <Whatsapp height="50px"/>
            </a>
            <a href="https://www.linkedin.com/in/paolo-llamoza-6b5523178/" target="_blank">
                <LinkedIn height="50px" className="iconLinkedIn"/>
            </a>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact