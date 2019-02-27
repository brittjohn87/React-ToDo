import React, { Component } from 'react';
import ListEntry from './ListEntry';
import ListView from './ListView';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <ListEntry />
        <ListView />  
      </div>
    );
  }
}

export default App;
