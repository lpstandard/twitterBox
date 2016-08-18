import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class TweetBox extends Component {
  constructor (props){
    super(props); 
    this.state = {
      text: "",
      photoAdd: false
    }
  }  

  handleChange = (e) => {
    this.setState({ text: e.target.value});
  }

  togglePhoto = () => {
    this.setState({ photoAdd: !this.state.photoAdd });
  }

  handleCharCount = () => {
    if(this.state.photoAdd){
      return 140 - 23 - this.state.text.length;
    } else {
      return 140 - this.state.text.length;
    }
  }

  handleOverflow = () => {
    if(this.handleCharCount() < 0){
      if (this.state.photoAdded) {
        let beforeOverflowText = this.state.text.substring(140 - 23 - 10, 140 - 23);
        let overflowText = this.state.text.substring(140 - 23);
      } else {
        let beforeOverflowText = this.state.text.substring(140 - 10, 140);
        let overflowText = this.state.text.substring(140);
      }
      return (
        <div className="alert alert-warning">
          <strong>Oops! This sentence is too long!</strong>
          &nbsp;...{beforeOverflowText}
          <strong className="bg-danger">{overflowText}</strong>
        </div>
      );
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="well clearfix">
      {this.handleOverflow()}
        <textarea onChange={this.handleChange} className="form-control" ></textarea><br/>
        <span>{this.handleCharCount()}</span>
        <button disabled={this.handleCharCount() === 140} className="btn btn-primary pull-right">Tweet</button>
        <button onClick={this.togglePhoto} className="btn btn-default pull-right">{this.state.photoAdd ? "✓ Photo Added" : "Add Photo" }</button>
      </div>
    );
  }
}

