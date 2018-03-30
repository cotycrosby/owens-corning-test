import React, { Component } from 'react';
import SwatchColor from './swatchColor';



class SwatchItem extends Component {

  render() {

    let colors, key, name;

    if(this.props.swatch)
    {
      key = this.props.swatch.uid;
      name = this.props.swatch.proper_name;
      colors = this.props.swatch.gallery_images.map(c => {
        c.proper_name = name;
        return <SwatchColor key={key} color={c} />
      });
    }

    return (
        {colors}  
    );
  }
}

export default SwatchItem;
