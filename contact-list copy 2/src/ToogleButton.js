import React, { Component } from 'react';

class ToogleButton extends Component {

  constructor() {
    super()
    this.state = {
      btn: false
    }
  }

  onBtnClick = () => {
    this.setState({
      btn: !this.state.btn
    })
  }

  render() {
    if (this.state.btn) {
      return (
        <button style={{"backgroundColor": "blue", "color": "white", "margin": "10%", "height": "100px", "width": "100px"}} onClick={this.onBtnClick}> {this.props.name} </button>
      )
    }
    else {
      return (
        <button style={{"backgroundColor": "white", "fontColor": "black", "margin": "10%", "height": "100px", "width": "100px"}} onClick={this.onBtnClick}> {this.props.name}  </button>
      )
    }
  }
}

export default ToogleButton;
