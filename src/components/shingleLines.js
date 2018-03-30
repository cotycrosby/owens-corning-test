import React, { Component } from 'react';
// import SwatchItem from './swatchItem';
import ShingleLine from './shingleLine';



class ShingleLines extends Component {



  render() {

    let lineItems;

    if( this.props.lines)
    {

      console.log(this.props.lines);
      lineItems = this.props.lines.map(l => {
        console.log(l);
        return <ShingleLine key={this.props.uid} line={l} />
 
        
      });
    }

    return (
      <div className='row'>
        <h1>in here</h1>
        {lineItems}

      </div>
        
    );
  }
}

export default ShingleLines;
