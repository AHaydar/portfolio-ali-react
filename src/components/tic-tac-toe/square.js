import React, { Component } from 'react';
import './game.css';

class Square extends Component {
    render () {
        return (
            <button className="square" onClick={() => alert('click')}>
                {this.props.value}
            </button>
        )
    }
}

export default Square;