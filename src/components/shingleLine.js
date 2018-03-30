import React, { Component } from 'react';
// import SwatchItem from './swatchItem';
import Swatches from './swatches';



class ShingleLine extends Component {



  render() {
    console.log('in shingleline')
    let colorItems;

    if( this.props.line)
    {

      console.log(this.props.line);
      
      colorItems = this.props.line.map(colors => {
        
        return (
          <Swatches  swatch = {colors} />
        );
        
      });
    }

    return (
      <div className='row'>

        <div className='col-md-4'>

          <h2>{this.props.line.name}</h2>

        </div>

        <div className='col-md-8'>
          <Swatches swatches={colorItems} />
        </div>

      </div>
        
    );
  }
}

export default ShingleLine;
