import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StoreItem from './StoreItem.js';
import WebFont from 'webfontloader';

class Store extends Component {

  state = { store: false, showModal: false }

  constructor(props) {
   super(props);
  }

  componentDidMount() {

    const storeId = parseInt(this.props.match.params.store)

    fetch('/api/stores.json')
      .then(res => res.json())
      .then(stores => {
        const store = stores.find((store) => store.id === storeId );
        this.setState({ store });
        if(store.custom.fontFamily) {
          WebFont.load({
            google: {
              families: [store.custom.fontFamily]
            }
          });
        }
      });
  }

  products() {
    if(this.state.store) {
      return (
        <ul>
          {this.state.store.products.map(product => <StoreItem custom={this.state.store.custom} key={product.id} item={product} />)}
        </ul>
      );
    }
  }

  themeClass(base) {
    if(this.state.store && this.state.store.custom.theme) {
      return  `${base} ${base}--theme-${this.state.store.custom.theme}`;
    } else {
      return base;
    }
  }

  getAppStyle() {
    return {
      fontFamily: this.state.store.custom.fontFamily
    }
  }

  render() {
    if(this.state.store) {      
      const store = this.state.store;
      return (
        <div className={this.themeClass('App')} style={this.getAppStyle()} >
          <div className={this.themeClass('App-header')}>
            <img src={store.custom.logo} className="App-logo" alt="logo" />
            <h2>{this.state.store.name}</h2>
          </div>
          <div className="App-content">
          {this.products()}
          </div>
          <div className="app-footer">
            <Link to="/">Back</Link>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Store;
