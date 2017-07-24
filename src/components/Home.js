import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'

class Home extends Component {

  state = { stores: [] }

  componentDidMount() {
    
    fetch('/api/stores.json')
      .then(res => res.json())
      .then(stores => this.setState({ stores }));

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>The Market</h2>
        </div>
        <div className="App-content">
          <div className="Grid">
          {this.state.stores.map(store =>
            <p key={store.id}><Link to={`/${store.id}`}>{store.name}</Link></p>
          )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
