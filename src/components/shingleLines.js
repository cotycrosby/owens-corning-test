import React, { Component } from 'react';
// import SwatchItem from './swatchItem';
import ShingleLine from './shingleLine';
import uuid from 'uuid';



class ShingleLines extends Component {


  // My editor is going crazy here and everything is yellowed out.
  // This splits all the shingle Line items into individual lines.

  render() {

    let lineItems;



    if( this.props.lines )
    {
    
      lineItems = this.props.lines.map( key => {
          return <ShingleLine line={key} />
      });


      lineItems = this.props.lines.map(el => {
        return <ShingleLine key={uuid.v4()} line={el} />
      });
    }


    return (
      <div>
        
        {lineItems}

      </div>
        
    );
  }
}

export default ShingleLines;
