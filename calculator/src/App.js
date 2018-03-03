import React, { Component } from 'react';
import CalcList from './CalcList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      calc_title: "0",
      accumulator: "0",
      opType: ""
    }
  }

  handleButtonPress = (e) => {
    let btnTitle = e.target.value
    let title = this.state.calc_title === 0 ? "" : this.state.calc_title
    let opType = this.state.opType

    if (btnTitle === "+/-") {
      title = (-1) * parseInt(title, 10)
      this.setState({
        calc_title: title
      })
    }
    else {
      if (btnTitle >= "0" && btnTitle <= "9") {
        if (this.state.calc_title !== "0") {
          title += e.target.value
        }
        else {
          title = e.target.value
        }
        this.setState({
          calc_title: title,
        })
      }
      else {
        if (opType === "") {
          this.setState({
            opType: btnTitle,
            accumulator: title,
            calc_title: "0"
          })
          opType = btnTitle
        }
        else {
          this.calcAnswer();
        }
      }
    }
  }

  calcAnswer = () => {
    let answer = 0
    switch (this.state.opType) {
      case "/":
        answer = parseInt(this.state.accumulator, 10) / parseInt(this.state.calc_title, 10)
        break;
      case "*":
        answer = parseInt(this.state.accumulator, 10) * parseInt(this.state.calc_title, 10)
        break;
      case "+":
        answer = parseInt(this.state.accumulator, 10) + parseInt(this.state.calc_title, 10)
        break;
      case "-":
        answer = parseInt(this.state.accumulator, 10) - parseInt(this.state.calc_title, 10)
        break;
      default:
        break;
    }
    this.setState({
      calc_title: answer,
      accumulator: answer,
      opType: ""
    })
  }

  onRemove = () => {
    let title = this.state.calc_title.toString().slice(0, -1)
    title = title.length === 0 ? "0" : title

    this.setState({
      calc_title: title
    })
  }

  onClear = () => {
    this.setState({
      calc_title: "0",
      accumulator: "0",
      opType: ""
    })
  }

  render() {
    return (
      <div align="center">
        <input type="text" value={this.state.calc_title} className="mainInput"/>
        <div style={{"margin": "10px"}}>
          <button style={{"marginRight": "5px"}} onClick={this.onRemove}> Remove </button>
          <button onClick={this.onClear}> Clear All </button>
        </div>

        <CalcList onButtonClick={this.handleButtonPress}/>
      </div>
    );
  }
}

export default App;
