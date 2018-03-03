import React, {Component} from 'react'
import CalcListItem from './CalcListItem'

class CalcList extends Component {
  constructor() {
    super()
    this.state = {
      calcList: [
         ["7", "8", "9", "*"],
         ["4", "5", "6", "-"],
         ["1", "2", "3", "+"],
         ["+/-", "0", "=", "/"]
      ]
    }
  }

  render() {
    return (
        <div className="column" style={{"width": "30%"}}>
          {
            this.state.calcList.map((data, index) => {
              return <CalcListItem data={data} key={index} onButtonClick={this.props.onButtonClick}/>
            })
          }
        </div>
    )
  }
}

export default CalcList
