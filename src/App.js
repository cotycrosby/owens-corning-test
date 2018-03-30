import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Swatches from './components/swatches';



class App extends Component {


  constructor()
  {
    super();

    this.state = {
      swatches: []
    }

  }


  getData()
  {

    $.ajax({
      url: 'https://mdms.owenscorning.com/api/v1/product/shingles?zip=43659',
      dataType:'json',
      cache: false,

      success: function(d)
      {
        this.setState({swatches: d}, function(){
          // console.log(this.state.swatches);
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
        <div className='row'>
          <div className='col-md-6'>
            <h1>Hello World</h1>
          </div>
          <div className='col-md-6'>
            <Swatches swatches={this.state.swatches} />
          </div>
        </div>
      </div>
        
      </div>
    );
  }
}

export default App;
