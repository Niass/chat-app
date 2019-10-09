import React from "react";
import "./Contact.css";

function Contact(props) {
  return (
    <div >
    <div key={props.id} className="Contact"> 
      <img className="avatar" src={props.imgSrc} alt="Avatar" />
      <div>
        <p className="name">{props.name}</p>

        <div className="status flex">
          <span
            className={
              props.isOnline ? "status-online" : "status-offline"
            }
          ></span>
          <p className="status-text">
            {props.isOnline ? "Online" : "Offline"}
           
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;
