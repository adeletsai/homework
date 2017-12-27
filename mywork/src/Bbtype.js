import React, { Component } from 'react';
import './index.css';

class Bbtype extends Component {
    constructor(){
        super();
        this.state={
            errorMessage:''
        }
    }

    handleClick=() =>{
        this.setState({
            errorMessage:'喵的勒，你按錯人了'
        })
    }

    render() {
      return (
        <div className="bbtype">
            <span className="button" onClick={this.handleClick}>BB</span><br/>
                {this.state.errorMessage}
        </div>
      );
    }
  }
  
  export default Bbtype;
