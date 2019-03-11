import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const currentVal = this.props.opacity
    const newVal = currentVal - 0.1

    if (currentVal >= 0.2){
      return (
        <div className="color-box" style={{opacity: currentVal}}>
        <ColorBox opacity={newVal} />
        </div>
      )
    }
    else {
      return null
    }

  }

}
