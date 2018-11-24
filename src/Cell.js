import React, { Component } from 'react'

class Cell extends Component {
  checkCell = event => {
    this.props.checkCell(this.props.row, this.props.col)
  }

  flagCell = event => {
    event.preventDefault()
    this.props.flagCell(this.props.row, this.props.col)
  }

  render() {
    return <td onContextMenu={this.flagCell} onClick={this.checkCell}>{this.props.value}</td>
  }
}

export default Cell
