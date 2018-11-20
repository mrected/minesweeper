import React, { Component } from 'react'

class Board extends Component {

  
  render() {
    return (
      <table>
        <tbody>
        <tr>
          <td className="header" colspan="8">
            <select>
              <option value="0">Easy</option>
              <option value="1">Intermediate</option>
              <option value="0">Hard</option>
            </select>
          </td>
        </tr>
        </tbody>
      </table>
    )
  }
}

export default Board
