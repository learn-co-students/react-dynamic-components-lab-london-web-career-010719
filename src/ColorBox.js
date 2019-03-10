import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const newValue = this.props.opacity - 0.1;

    if (this.props.opacity >= 0.2) {
      return (
        //   it('uses the value of the opacity prop in its style', () => {
        //    expect(box.prop('style')).to.contain({opacity: 1})
        //   })
        <div style={{opacity: this.props.opacity}}>
          <ColorBox opacity={newValue} />
        </div>
      )
    } else {
      return null
    }
  }
}
