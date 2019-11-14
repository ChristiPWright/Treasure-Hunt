import React, { Component } from 'react';
import './App.css';
import Grid from './Grid.js';
import PlayAgain from './PlayAgain.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      attemptsLeft: 5,
      board: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
      resultBoard: ['tree', 'tree', 'bomb', 'tree', 'treasure', 'tree', 'tree', 'tree', 'tree'],
      won: 'Make a guess!'
    }
  }
  
  handleClick = (e) => {
    var guessCount = this.state.attemptsLeft - 1;
    var buttonIndex = e.target.id;
    if (guessCount >= 0) {
      if(this.state.resultBoard[buttonIndex] === "treasure") {
        this.state.board.splice(buttonIndex, 1, this.state.resultBoard[buttonIndex])
        this.setState({board: this.state.board, attemptsLeft: 0, won: 'You Won!'})
        console.log(this.state.attemptsLeft)
      } else if (this.state.resultBoard[buttonIndex] === "bomb" || guessCount === 0) {
        this.state.board.splice(buttonIndex, 1, this.state.resultBoard[buttonIndex])
        this.setState({board: this.state.board, attemptsLeft: 0, won: 'You Lost!'})
      } else {
        this.state.board.splice(buttonIndex, 1, this.state.resultBoard[buttonIndex])
        this.setState({board: this.state.board, attemptsLeft: guessCount, won: 'Keep Trying'})
      }
    }
  }
  
  startOver = () => {
    //update board state
     //resultBoard with special index defined with  Math.floor(Math.random() * 9)
    let newBoard = []
    for (let i = 0; i < this.state.board.length; i++) {
      newBoard.push('?');
    }
    
    let newResultBoard = [];
    for (let i = 0; i < this.state.resultBoard.length; i++) {
      newResultBoard.push('tree');
    }
   
    let treasureIndex
    let bombIndex
    do {
      treasureIndex = Math.floor(Math.random()*9)
      bombIndex = Math.floor(Math.random()*9)
    } while (treasureIndex === bombIndex)
    
    
    this.state.resultBoard = newResultBoard
    this.state.resultBoard.splice(treasureIndex,1,'treasure')
    this.state.resultBoard.splice(bombIndex,1,'bomb')
   
    this.setState({resultBoard: this.state.resultBoard,
      board: newBoard, attemptsLeft: 5, won: 'Make a guess!'
    })
  }
    
  
  render() {
    return (
        <div class="whole_app" >
          <h2>
            Welcome young pirate! So you think you have what it takes to sail the high seas for fortune and fame aye?
          </h2>
          <h3>
            Let's see if you have the skills to sniff out when treasure is afoot. Check out the below treasure map. You have five chances to find the treasure or you'll not be coming aboard. But keep sharp! There's traps where you least expect them. 
          </h3>
          <div>
            <Grid boxes={this.handleClick}
              
              questionBoard={this.state.board}/>
          </div>
          <div>
            <h4> Remaining Tries: {this.state.attemptsLeft}</h4>
            <h4> {this.state.won} </h4>
          </div>
          <div className ="PlayAgain">
            <PlayAgain refresh = {this.startOver}/>
          </div>
        </div>
    );
  }
}

export default App;
