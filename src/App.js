import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
// import Swatches from './components/swatches';
import ShingleLines from './components/shingleLines';




class App extends Component {


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

        // console.log(d);

        d.forEach(el => {
          formattedData[el.uid] = {
            name: el.proper_name,
            images: el.gallery_images
          };
        });

        this.setState({shingles: formattedData}, function(){
          // console.log(this.state.shingles);
        })

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
