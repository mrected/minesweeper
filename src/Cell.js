import React, { Component } from 'react';

class Cell extends Component {

    flagCell = (event) => {
        console.log(event)
    }

    render() {
        return (
            <td onClick={this.flagCell}>
                {this.props.value}
            </td>
        );
    }
}

export default Cell;
