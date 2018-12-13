import React, { Component } from 'react';
import './App.css';
import axios from "axios";

import Message from "./components/Message";
import MessageList from "./components/MessageList";

class App extends Component {

// default State object
state = {
  messages: []
};

componentDidMount() {
  axios
    .get("http://localhost:8080/sensor")
    .then(response => {

      // create an array of contacts only with relevant data
      const newMessages = response.data.map(c => {
        return {
          id: c.id,
          value: c.value
        };
      });

// create a new "State" object without mutating 
      // the original State object. 
      const newState = Object.assign({}, this.state, {messages: newMessages});

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to Kafka Message Monitor</h1>
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
