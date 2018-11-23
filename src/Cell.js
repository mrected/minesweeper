import React, { Component } from 'react'

class Cell extends Component {
  flagCell = event => {
    console.log(
      `this was clicked at row ${this.props.row} and col ${this.props.col}`
    )
  }

  render() {
    return <td onClick={this.flagCell}>{this.props.value}</td>
  }
}

export default Cell
