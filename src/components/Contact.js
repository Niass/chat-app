import React from "react";
import "./Contact.css";

class Contact extends React.Component {

  state = {
    online: this.props.isOnline
  }

  onHandleClick = () => {
    this.setState({online: !this.state.online})
    console.log(this.state.online);
  }
  render () {
    return (
      <div onClick={this.onHandleClick} >
    <div key={this.props.id} className="Contact"> 
      <img className="avatar" src={this.props.imgSrc} alt="Avatar" />
      <div>
        <p className="name">{this.props.name}</p>

        <div className="status flex">
          <span
            className={
              this.state.online ? "status-online" : "status-offline"
            }
          ></span>
          <p className="status-text">
            {this.state.online ? "Online" : "Offline"}
           
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}

} 
export default Contact;
