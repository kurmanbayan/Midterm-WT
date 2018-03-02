import React, { Component } from 'react';

class ToogleButton extends Component {

  constructor() {
    super()
    this.state = {
      btn: false
    }
  }

  onBtnClick = (cost) => {
    if (!this.state.btn) {
      this.props.addToCost(cost)
    }
    else {
      this.props.subFromCost(cost)
    }
    this.setState({
      btn: !this.state.btn
    })
  }

  render() {
    if (this.state.btn) {
      return (
        <button style={{"backgroundColor": "blue", "color": "white", "height": "40px", "width": "150px"}} onClick={() => this.onBtnClick(this.props.data.cost)}> {this.props.data.name} {this.props.data.cost} $ </button>
      )
    }
    else {
      return (
        <button style={{"backgroundColor": "white", "fontColor": "black", "height": "40px", "width": "150px"}} onClick={() => this.onBtnClick(this.props.data.cost)}> {this.props.data.name} {this.props.data.cost} $  </button>
      )
    }
  }
}

export default ToogleButton;
