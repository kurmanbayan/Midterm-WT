import React, { Component } from 'react';

class ToogleButton extends Component {

  constructor() {
    super()
    this.state = {
      btn: false
    }
  }

  onBtnClick = (cost) => {
    !this.state.btn ? this.props.addToCost(cost) : this.props.addToCost((-1) * cost)
    this.setState({
      btn: !this.state.btn
    })
  }

  render() {
    if (this.state.btn) {
      return (
        <button className="remBtn" onClick={() => this.onBtnClick(this.props.data.cost)}> {this.props.data.name} {this.props.data.cost} $ </button>
      )
    }
    else {
      return (
        <button className="addBtn" onClick={() => this.onBtnClick(this.props.data.cost)}> {this.props.data.name} {this.props.data.cost} $  </button>
      )
    }
  }
}

export default ToogleButton;
