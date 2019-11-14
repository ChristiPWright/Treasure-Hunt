import React, { Component } from 'react';
import './App.css';

class Grid extends Component {
    render() {
    return (
      <div className ="grid">
        <section className="square" id="0" onClick={this.props.boxes}>{this.props.questionBoard[0]} </section>
        <section className="square"  id ="1" onClick = {this.props.boxes}>{this.props.questionBoard[1]}</section>
        <section className="square"  id = "2" onClick = {this.props.boxes}>{this.props.questionBoard[2]}</section>
        <section className="square"  id = "3" onClick = {this.props.boxes}>{this.props.questionBoard[3]}</section>
        <section className="square"  id ="4" onClick = {this.props.boxes}>{this.props.questionBoard[4]}</section>
        <section className="square"  id ="5" onClick = {this.props.boxes}>{this.props.questionBoard[5]}</section>
        <section className="square"  id = "6" onClick = {this.props.boxes}>{this.props.questionBoard[6]}</section>
        <section className="square"  id = "7" onClick = {this.props.boxes}>{this.props.questionBoard[7]}</section>
        <section className="square"  id = "8" onClick = {this.props.boxes}>{this.props.questionBoard[8]}</section>
        <p>{this.props.winner}</p>
      </div>
    );
  }
}

export default Grid