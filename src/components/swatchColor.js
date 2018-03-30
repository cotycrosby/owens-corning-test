import React, { Component } from 'react';



class SwatchColor extends Component {

  render() {

    return (
      
      <li className='Colors'>
        <img src={this.props.colors.gallery_images[0].img_url} alt={this.props.colors.proper_name} />
        <br />
        {this.props.colors.proper_name}
        <br />
        {this.props.colors.gallery_images[0].name}
      </li>
        
    );
  }
}

export default SwatchColor;
