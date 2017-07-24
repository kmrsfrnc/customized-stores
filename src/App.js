import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import './Buttons.css';

import Home from './components/Home.js';
import Store from './components/Store.js';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/:store" component={Store}/>
        </div>
      </Router>
    );
  }
}

export default App;
