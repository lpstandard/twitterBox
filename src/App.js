import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class TweetBox extends Component {
  constructor (props){
    super(props); 
    this.state = {
      text: ""
    }
  }  

  handleChange = (e) => {
    this.setState({ text: e.target.value});
  }

  render() {
    return (
      <div className="well clearfix">
        <textarea onChange={this.handleChange} className="form-control" ></textarea><br/>
        <span>{140 - this.state.text.length}</span>
        <button disabled={this.state.text.length === 0} className="btn btn-primary pull-right">Tweet</button>
      </div>
    );
  }
}

