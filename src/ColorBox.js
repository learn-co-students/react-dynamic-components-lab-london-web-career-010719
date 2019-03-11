import React, { Component } from 'react';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

export default class ColorBox extends Component {
  
  render() {
    const newValue = this.props.opacity - 0.1;

    if (this.props.opacity > 0.2) {
      return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        <ColorBox opacity={newValue}/>
      </div>
    )
  } else {
  return null;}
  }
}
