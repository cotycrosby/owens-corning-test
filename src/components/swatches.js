import React, { Component } from 'react';
import SwatchItem from './swatchItem';



class Swatches extends Component {



  render() {
    let swatchItems;

    if( this.props.swatches)
    {
      
      swatchItems = this.props.swatches.map(swatch => {
        
        return (
          <SwatchItem key={swatch.uid} swatch = {swatch} />
        );
        
      });
    }

    return (
      <div className="Swatches">
      <ul>
        {swatchItems}
      </ul>  
      </div>
        
    );
  }
}

export default Swatches;
