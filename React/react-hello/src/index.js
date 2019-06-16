import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as fs from 'fs';

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
            {this.renderSquare(13)}
        </div>

         <div className="board-row">



          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
               {this.renderSquare(17)}

                         {this.renderSquare(18)}
        </div>

        <div className="board-row">




          {this.renderSquare(19)}
          {this.renderSquare(20)}
         {this.renderSquare(21)}
          {this.renderSquare(22)}

                    {this.renderSquare(23)}
        </div>
        <div className="board-row">



          {this.renderSquare(24)}
          {this.renderSquare(25)}
        {this.renderSquare(26)}
             {this.renderSquare(27)}
                       {this.renderSquare(28)}
        </div>
          <div className="board-row">




            {this.renderSquare(29)}
          {this.renderSquare(30)}
          {this.renderSquare(31)}
       {this.renderSquare(32)}

                    {this.renderSquare(33)}
        </div>
          <div className="board-row">


          {this.renderSquare(34)}
          {this.renderSquare(35)}
          {this.renderSquare(36)}
            {this.renderSquare(37)}
             {this.renderSquare(38)}

        </div>
      </div>

    );
  }
}
function aaa() {

document.write("Times is UP!\n");
document.write("Score is: ");
document.write("100" - nur);

    setTimeout(ccc,3000);

}
function bbb() {

count = count - 1;
document.write(count)


}
function ccc() {


window.location.replace("index.js")

// Requiring fs module in which
// writeFile function is defined.
}

function readfileautomatically () {
   var client = new XMLHttpRequest();
   client.open('GET', 'C://Kullanıcılar//Nurcihane//Masaüstü//words_alpha.txt');
   client.onreadystatechange = function(){
      if( client.responseText != ''){
          var text = client.responseText.split("\n");
          document.getElementById("words").innerHTML = "nur";
          alert("nur2")
      }
        alert("nur")
   }
   client.send();
}


// 1. Create the button
var button = new Array();
button[0] = document.createElement("button");
button[0].innerHTML = "Do Something";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button[0]);

// 3. Add event handler
button[0].addEventListener ("click", function() {
  alert("did something");
});

button[1] = document.createElement("button");
button[1].innerHTML = "Do Something";

// 2. Append somewhere
body.appendChild(button[1]);

// 3. Add event handler
button[1].addEventListener ("click", function() {
  alert("did something");
});

var nur ;
var count;
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
         squares[history.length + 12] = "=";
        if(squares[history.length + 10] == "+"){
             squares[history.length + 13] = squares[history.length + 9] + squares[history.length + 11];
              squares[13] = Math.abs(squares[7] - squares[history.length + 13]);
              nur =   squares[13];

           }
        else if(squares[history.length + 10] == "-"){
             squares[history.length + 13] = squares[history.length + 9] - squares[history.length + 11];
                  squares[13] = Math.abs(squares[7] - squares[history.length + 13]);
                    nur =   squares[13];
           }
        else if(squares[history.length + 10] == "*"){
             squares[history.length + 13] = squares[history.length + 9] * squares[history.length + 11];
                  squares[13] = Math.abs(squares[7] - squares[history.length + 13]);
                    nur =   squares[13];
           }
        else if(squares[history.length + 10] == "/"){
             squares[history.length + 13] = squares[history.length + 9] / squares[history.length + 11];
                squares[13] = Math.abs(squares[7] - squares[history.length + 13]);
                  nur =   squares[13];
           }

         } else{
        squares[history.length + 12] = squares[i];
      }

    }else{

    if(i===0){
      readfileautomatically();

count = 10
      setTimeout(aaa,30000);
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



        var countDownDate = 31;
          var now = 0;

        var x = setInterval(function() {

          // Get today's date and time
          now = now + 1;

          // Find the distance between now and the count down date
          var distance = countDownDate - now;

          // Display the result in the element with id="demo"
          document.getElementById("demo").innerHTML = distance + "s ";

          // If the count down is finished, write some text

        }, 1000);

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




    return (
      <div className="game">
      <div
               align="center"  id="demo">
                </div>

                <div
                         align="right"  id="words">
                          </div>
        <div align="center" className="game-board">
          <Board
            squares={current.squares}
            onClick={(i,move) => this.handleClick(i,move)}
          />
        </div>
        <div  align="right"className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
        <div
                 align="center"  id="jump">
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
