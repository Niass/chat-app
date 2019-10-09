import React from "react";
import ContactList from "./components/ContactList";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App-header">
        <h3>Please, refresh the page to see who is just connected!</h3>
        <ContactList />
      </div>
    );
  }
}
export default App;
