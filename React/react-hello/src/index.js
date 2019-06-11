import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
             <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
           {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare(10)}
           {this.renderSquare(11)}
           {this.renderSquare(12)}
        </div>

         <div className="board-row">



          {this.renderSquare(13)}
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
               {this.renderSquare(17)}
        </div>

        <div className="board-row">



          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
         {this.renderSquare(21)}
          {this.renderSquare(22)}
        </div>
        <div className="board-row">



          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
        {this.renderSquare(26)}
             {this.renderSquare(27)}
        </div>
          <div className="board-row">



          {this.renderSquare(28)}
            {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
       {this.renderSquare(32)}
        </div>
          <div className="board-row">


             {this.renderSquare(33)}
          {this.renderSquare(34)}
          {this.renderSquare(35)}
          {this.renderSquare(36)}
            {this.renderSquare(37)}

        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(37).fill(null)


        }
      ],
      h : 0,
      stepNumber: 0,
      xIsNext: true
    };
  }

  handleClick(i,move) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      if(i === 12){
         squares[history.length + 11] = "=";
        if(squares[history.length + 9] == "+"){
             squares[history.length + 12] = squares[history.length + 8] + squares[history.length + 10];
           }
        else if(squares[history.length + 9] == "-"){
             squares[history.length + 12] = squares[history.length + 8] - squares[history.length + 10];
           }
        else if(squares[history.length + 9] == "*"){
             squares[history.length + 12] = squares[history.length + 8] * squares[history.length + 10];
           }
        else if(squares[history.length + 9] == "/"){
             squares[history.length + 12] = squares[history.length + 8] / squares[history.length + 10];
           }

         } else{
        squares[history.length + 11] = squares[i];
      }

    }else{

    if(i===0){
      squares[0] = "";
       squares[8] = "+";
       squares[9] = "-";
      squares[10] = "*";
      squares[11] = "/";
      squares[12] = "=";
    for (var j = 1; j < 6; j++) {
      var min=1;
      var max=22;
      var random = Math.random() * (+max - +min) + +min;
      var intvalue = Math.floor( random );
      switch(intvalue){
case 1:   squares[j] = "B"; break;
case 2:   squares[j] = "C"; break;
case 3:   squares[j] = "D"; break;
case 4:   squares[j] = "F"; break;
case 5:   squares[j] = "G"; break;
case 6:   squares[j] = "H"; break;
case 7:   squares[j] = "J"; break;
case 8:   squares[j] = "K"; break;
case 9:   squares[j] = "L"; break;
case 10:   squares[j] = "M"; break;
case 11:   squares[j] = "N"; break;
case 12:   squares[j] = "P"; break;
case 14:   squares[j] = "R"; break;
case 13:   squares[j] = "Q"; break;
case 15:   squares[j] = "S"; break;
case 16:   squares[j] = "T"; break;
case 17:   squares[j] = "V"; break;
case 18:   squares[j] = "W"; break;
case 19:   squares[j] = "X"; break;
case 20:   squares[j] = "Y"; break;
case 21:   squares[j] = "Z"; break;
default:  squares[j] = "Z"; break;
      }
      squares[i] = this.state.xIsNext ? intvalue : intvalue;
    }

    for (var m = 6; m < 9; m++) {
      var min=1;
      var max=6;
        var random = Math.random() * (+max - +min) + +min;
      var intvalue = Math.floor( random );

      console.log(intvalue);
      switch(intvalue){
case 1:   squares[m] = "I"; break;
case 2:   squares[m] = "A"; break;
case 3:   squares[m] = "E"; break;
case 4:   squares[m] = "O"; break;
case 5:   squares[m] = "U"; break;

      }
      squares[i] = intvalue;
    }
  squares[9] = "?";

    }

    else{
            squares[i] = this.state.xIsNext ? "0" : "0";
          }

    }





    this.setState({
      history: history.concat([
        {
          squares: squares
        }
      ]),

      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = (current.squares[7] - current.squares[history.length]);
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i,move) => this.handleClick(i,move)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
 if(squares[7] != null ){
    return true;
  }else{
    return false;
  }
}
