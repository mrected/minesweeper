import React, { Component } from 'react'
import axios from 'axios'

import './App.css'

import Cell from './Cell'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playing: false,
      info: '',
      difficulty: 0,
      game: {
        id: 1,
        board: [
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
          [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        ],
        state: 'new',
        mines: 10
      }
    }
  }

  newGame = event => {
    axios
      .post('https://minesweeper-api.herokuapp.com/games', {
        difficulty: this.state.difficulty
      })
      .then(response => {
        this.setState({
          playing: true,
          game: response.data
        })
      })
  }

  checkCell = (row, col) => {
    if (this.state.playing) {
      axios
        .post(
          `https://minesweeper-api.herokuapp.com/games/${
            this.state.game.id
          }/check`,
          {
            id: this.state.game.id,
            row: row,
            col: col
          }
        )
        .then(response => {
          this.setState({
            game: response.data
          })
        })
    }
  }

  flagCell = (row, col) => {
    if (this.state.playing) {
      axios
        .post(
          `https://minesweeper-api.herokuapp.com/games/${
            this.state.game.id
          }/flag`,
          {
            id: this.state.game.id,
            row: row,
            col: col
          }
        )
        .then(response => {
          this.setState({
            game: response.data
          })
        })
    }
  }

  checkPlaying = () => {
    if (this.state.playing) {
      if (this.state.game.state === 'won') {
        return 'You win!'
      }
      if (this.state.game.state === 'lost') {
        return 'You lost!'
      }
      return `Game ${this.state.game.id}`
    }
    return 'Start a new game!'
  }

  numberOfMines = () => {
    if (this.state.playing) {
      return `There are ${this.state.game.mines} left`
    }
    return 'Play Again?'
  }

  buttonText = () => {
    if (this.state.game.state === 'lost') {
      return '😭'
    } else {
      return '💣'
    }
  }

  chooseDifficulty = event => {
    this.setState({
      difficulty: parseInt(event.target.value)
    })
  }

  boardRows = () => {
    return this.state.game.board.map((row, rowIndex) => {
      return (
        <tr key={rowIndex}>
          {row.map((value, index) => {
            return (
              <Cell
                key={index}
                checkCell={this.checkCell}
                flagCell={this.flagCell}
                row={rowIndex}
                col={index}
                value={value}
              />
            )
          })}
        </tr>
      )
    })
  }

  render() {
    return (
      <main>
        <h1>Minesweeper</h1>
        <table>
          <tbody>
            <tr>
              <td className="header" colSpan={this.state.game.board.length}>
                <select
                  value={this.state.difficulty}
                  onChange={this.chooseDifficulty}
                >
                  <option value="0">Easy</option>
                  <option value="1">Intermediate</option>
                  <option value="2">Hard</option>
                </select>
                <button onClick={this.newGame}>{this.buttonText()}</button>
              </td>
            </tr>
            <tr>
              <td
                className="header not-playing"
                colSpan={this.state.game.board.length}
              >
                {this.checkPlaying()}
              </td>
            </tr>
            {this.boardRows()}
            <tr>
              <td className="header" colSpan={this.state.game.board.length}>
                {this.numberOfMines()}
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    )
  }
}

export default App
