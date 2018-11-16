import React, { Component } from 'react'
import logo from './logo.svg'
import Board from './Board'
import './App.css'

class App extends Component {
  render() {
    return (
      <main>
        <h1>Minesweeper</h1>
        <Board />
        <button>Play Again</button>
      </main>
    )
  }
}

export default App
