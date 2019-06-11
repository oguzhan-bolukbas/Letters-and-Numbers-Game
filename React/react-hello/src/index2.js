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
       squares[8] = this.state.xIsNext ? "+" : "+";
       squares[9] = this.state.xIsNext ? "-" : "-";
      squares[10] = this.state.xIsNext ? "*" : "*";
      squares[11] = this.state.xIsNext ? "/" : "/";
      squares[12] = this.state.xIsNext ? "=" : "=";
    for (var i = 1; i < 5; i++) {
      var min=1;
      var max=10;
      var random = Math.random() * (+max - +min) + +min;
      var intvalue = Math.floor( random );
      squares[i] = this.state.xIsNext ? intvalue : intvalue;
    }

    for (var i = 5; i < 7; i++) {
      var min=10;
   var max=99;
   var random = Math.random() * (+max - +min) + +min;
   var intvalue = Math.floor( random );
   squares[i] = this.state.xIsNext ? intvalue : intvalue;
    }
    if(i===7){
    var min=100;
    var max=999;
    var random = Math.random() * (+max - +min) + +min;
    var intvalue = Math.floor( random );
    squares[i] = this.state.xIsNext ? intvalue : intvalue;
        }
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
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
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
