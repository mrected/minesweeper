import React, { Component } from 'react'

class Row extends Component {
  render() {
    return (
      <tr>
        {this.state.game.board[index].map((value, index) => {
          return (
            <Cell
              checkCell={this.checkCell}
              flagCell={this.flagCell}
              row={row}
              col={index}
              value={value}
            />
          )
        })}
      </tr>
    )
  }
}

export default Row
