import React, { Component } from 'react'
import Spaces from './Spaces'

class Board extends Component {
  render() {
    return (
      <table>
        <Spaces />
        <Spaces />
        <Spaces />
        <Spaces />
        <Spaces />
        <Spaces />
        <Spaces />
        <Spaces />
      </table>
    )
  }
}

export default Board
