import React, { Component } from 'react';
import ToogleButton from './ToogleButton'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [
        {name: "ABs", cost: 1000},
        {name: "Abd", cost: 2000},
        {name: "Aqwe", cost: 3000},
        {name: "Aqweqw", cost: 4000},
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
      <div>
        <ul>
          {
            this.state.list.map((data, index) => {
              return <li> <ToogleButton addToCost={this.addToCost} data={data} key={index}/>
              </li>
            })
          }
        </ul>
        <div> Total cost = {this.state.tot_cost} </div>
      </div>
    )
  }
}

export default App;
