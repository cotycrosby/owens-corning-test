import React, { Component } from 'react';
// import SwatchItem from './swatchItem';



class Swatches extends Component {

  imageHandler(e)
  {

    let id = this.props.id;

    


    this.props.changeImage(id);
      
  }

  render() {

    let className = (this.props.activeNumber === this.props.id) ? 'active' : '';

    

    return (
      <li onClick={this.imageHandler.bind(this)}>
        <img src={this.props.swatches.img_url} alt={this.props.swatches.name} className={className} data-id={this.props.id } />
        <p className={className}>{this.props.swatches.name} </p>
      </li>
        
    );
  }
}

export default Swatches;
