import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
// import Swatches from './components/swatches';
import ShingleLines from './components/shingleLines';

/*
  Coty Crosby
  Owens Corning Internship Project



*/




class App extends Component {



  // set the shingle state so the get request has a place to be stored.
  constructor()
  {
    super();

    this.state = {
      shingles: []
    }

  }


  getData()
  {
    let formattedData = [];

    $.ajax({
      url: 'https://mdms.owenscorning.com/api/v1/product/shingles?zip=43659',
      dataType:'json',
      cache: false,

      success: function(d)
      {

        // format the data so that its easier for me to read the console.logs
        d.forEach(el => {
          formattedData.push( {
            name: el.proper_name,
            images: el.gallery_images
          });
        });

        this.setState({shingles: formattedData});

      }.bind(this),

      error: function(xhr, status, err)
      {
        console.log(err);
      }
    });

  }

  componentWillMount()
  {
    this.getData();
  }

  componentDidMount()
  {
    this.getData();
  }


  //wrap everything in the container for bootstrap
  render() {
    return (
      <div className="App">
      <div className='container'>
        <ShingleLines lines={this.state.shingles} />
      </div>
        
      </div>
    );
  }
}

export default App;
