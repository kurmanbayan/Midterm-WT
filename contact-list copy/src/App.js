import React, { Component } from 'react';
import ToogleButton from './ToogleButton'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: ["Home", "About", "Contact"]
    }
  }

  render() {
    return (
      <div>
        {
          this.state.list.map((data, index) => {
            return <ToogleButton name={data} key={index}/>
          })
        }
      </div>
    )
  }
}

export default App;
