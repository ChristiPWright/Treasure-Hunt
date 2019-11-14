import React, { Component } from 'react';
import './App.css';

class PlayAgain extends Component {
    render() {
    return (
        <div>
            <button onClick = {this.props.refresh}>Play Again!</button>
        </div>
    )}
}

export default PlayAgain