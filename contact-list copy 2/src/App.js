import React, { Component } from 'react';
import ToogleButton from './ToogleButton'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        {name: "Milk", cost: 1000},
        {name: "Bread", cost: 2000},
        {name: "Tomato", cost: 3000},
        {name: "Apple", cost: 4000},
      ],
      tot_cost: 0,
    }
  }

  addToCost = (cost) => {
    let cur = this.state.tot_cost
    this.setState ({
      tot_cost: cur + cost
    })
  }

  render() {
    return (
      <div align="center">
        <h1> Products </h1>
        <ul>
          {
            this.state.list.map((data, index) => {
              return <li>
                <ToogleButton addToCost={this.addToCost} data={data} key={index}/>
              </li>
            })
          }
        </ul>
        <div> Total cost = {this.state.tot_cost} $ </div>
      </div>
    )
  }
}

export default App;
