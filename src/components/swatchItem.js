import React, { Component } from 'react';



class SwatchItem extends Component {

  render() {
    console.log(this.props.swatch);
    return (
      
      <li className='Swatch'>
        {this.props.swatch.proper_name}
      </li>
        
    );
  }
}

export default SwatchItem;
