import React, { Component } from 'react';


class Card extends Component {

  buttonClass(custom) {
    let bc = 'button button-small';
    if(custom) {
      bc += ` button-${custom.buttons}`;
    }
    return bc;
  }

  render() {
    return (
      <li className="store-item">
        <span className="store-item__name">{this.props.item.name}</span>
        <span className="store-item__price">{this.props.item.price}</span>
        <button className={this.buttonClass(this.props.custom)}>Add to cart</button>
      </li>
    );
  }
}

export default Card;
