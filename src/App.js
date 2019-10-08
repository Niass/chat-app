import React from "react";
import Contact from "./components/Contact";
import "./App.css";

class App extends React.Component {
 
  state = {
    data:null,
    user1: false,
    user2:false,
    user3:false
  }
  checkboxOnChange = (user) => {
    this.setState({[user]: !this.state[user]})

  };
  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
 
  render() {
    return (
      
      <div className="App-header">
        
        <Contact
          name="Fatou"
          url={`https://randomuser.me/api/portraits/men/45.jpg`}
          isOnlineClass={this.state.user1 ? "status-online": "status-offline"}
          isOnline= {this.state.user1 ? "Online": "Offline"}  
         /* { checkboxOnChange={()=> this.setState({user1: !this.state.user1})} }*/
          checkboxOnChange={()=> this.checkboxOnChange('user1')}
        />
        <Contact
        name="Coumba"
        url={`https://randomuser.me/api/portraits/men/44.jpg`}
        isOnlineClass={this.state.user2 ? "status-online": "status-offline"}
        isOnline= {this.state.user2 ? "Online": "Offline"}
        checkboxOnChange={()=> this.checkboxOnChange('user2')}
        />
        
        <Contact
          name="Coura"
          url={`https://randomuser.me/api/portraits/men/73.jpg`}
          isOnlineClass={this.state.user3 ? "status-online": "status-offline"}
          isOnline= {this.state.user3 ? "Online": "Offline"}
          checkboxOnChange={()=> this.checkboxOnChange('user3')}
        />
      </div>
    );
  }
}
export default App;
