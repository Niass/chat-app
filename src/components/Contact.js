import React from "react";
import "./Contact.css";

function Contact(props) {
   
  return (
    <div className="Contact">
      <img
        className="avatar"
        src={props.url}
        alt="Avatar"
      />
      <div>
        <p className="name">{props.name}</p>

        <div className="status flex">
          <span className={props.isOnlineClass}></span>
          <p className="status-text">
          
            {props.isOnline}
            <input 
              
              onChange={props.checkboxOnChange}
              type="checkbox"
              name="checkboxG3"
              id="checkboxG3"
              className="css-checkbox"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
