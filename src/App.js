import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

// File thats needed for data
// https://mdms.owenscorning.com/api/v1/product/shingles?zip=43659


class App extends Component {


  constructor()
  {
    super();

    this.state = {
      data: {}
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
        this.setState({data: d}, function(){
          console.log(this.state);
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
        
      </div>
    );
  }
}

export default App;
