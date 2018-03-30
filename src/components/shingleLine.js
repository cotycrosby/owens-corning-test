import React, { Component } from 'react';
import Swatches from './swatches';



class ShingleLine extends Component {

  constructor()
  {
    super();

    this.state = {
      imageNumber: 0
    }
  }

  handleChangeImage(id)
  {

    this.setState({
      imageNumber: id
    })
  }



  render() {
    let colorItems;
    var id = -1;


    if( this.props.line)
    {


      
      colorItems = this.props.line.images.map(colors => {
        id = id + 1;
        return (
          <Swatches activeNumber={this.state.imageNumber}  swatches={colors} id={id} key={id} changeImage={this.handleChangeImage.bind(this)} />
        );
        
      });
    }

    // Separating the Main display from the swatches.
    // header in second div to help with alignment
    return (
      <div className='row ShingleLine well'>

        <div className='col-md-5 main '>

          <h2>{this.props.line.name}</h2>
          <img alt={this.props.line.images[this.state.imageNumber].name} src={this.props.line.images[this.state.imageNumber].img_url} />
          <h4>{this.props.line.images[this.state.imageNumber].name}</h4>

        </div>

        <div className='col-md-7 swatches'>
          <h2>&nbsp;</h2>
          <ul>
            {colorItems }
          </ul>
        </div>

      </div>
        
    );
  }
}

export default ShingleLine;
