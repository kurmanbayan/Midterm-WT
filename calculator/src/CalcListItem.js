import React, {Component} from 'react'

class CalcListItem extends Component {
  render() {
    return (
      <div className="row">
        {
          this.props.data.map((el, index) => {
            return <div key={index} className="col-md-3">
              <button className="calcButton" value={el} onClick={this.props.onButtonClick}> {el} </button>
            </div>
          })
        }
      </div>
    )
  }
}

export default CalcListItem
