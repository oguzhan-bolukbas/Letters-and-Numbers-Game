import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

var words;  // To keep words

function Square(props) {
   return (
      <button className="square" onClick={props.onClick}>
         {props.value}
      </button>
   );
}


function FuncButtons(props) {
   return (
      <button className="func_buttons" onClick={props.onClick}>
         {props.value}
      </button>
   );
}


class Board extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         squares: Array(9).fill(null),
         xIsNext: true,
         word: "",
         score: 0
      };
   }

   startButtons(){
      const squares = this.state.squares.slice();
      for(let i = 0; i < 10; i++){
         squares[i] = i;
         this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
         });
      }

      var min = 1;
      var max = 22;
      var random;
      for (var j = 0; j < 5; j++) {
         random = Math.floor(Math.random() * (+max - +min) + +min);
         switch(random){
            case 1:   squares[j] = "B"; break;
            case 2:   squares[j] = "C"; break;
            case 3:   squares[j] = "D"; break;
            case 4:   squares[j] = "F"; break;
            case 5:   squares[j] = "G"; break;
            case 6:   squares[j] = "H"; break;
            case 7:   squares[j] = "J"; break;
            case 8:   squares[j] = "K"; break;
            case 9:   squares[j] = "L"; break;
            case 10:  squares[j] = "M"; break;
            case 11:  squares[j] = "N"; break;
            case 12:  squares[j] = "P"; break;
            case 14:  squares[j] = "R"; break;
            case 13:  squares[j] = "Q"; break;
            case 15:  squares[j] = "S"; break;
            case 16:  squares[j] = "T"; break;
            case 17:  squares[j] = "V"; break;
            case 18:  squares[j] = "W"; break;
            case 19:  squares[j] = "X"; break;
            case 20:  squares[j] = "Y"; break;
            case 21:  squares[j] = "Z"; break;
            default:                    break;
         }
      }

      min = 1;
      max = 6;
      for (var m = 5; m < 8; m++) {
         random = Math.floor(Math.random() * (+max - +min) + +min);
         switch(random){
            case 1:   squares[m] = "I"; break;
            case 2:   squares[m] = "A"; break;
            case 3:   squares[m] = "E"; break;
            case 4:   squares[m] = "O"; break;
            case 5:   squares[m] = "U"; break;
            default:                    break;
         }
      }
      squares[8] = "?";

   }

   resetStatus(){
      this.setState({
         word: ""
      });
   }

   submit(){
      let length = words.length;
      var new_score = 0;
      for(let i = 0; i < length; i++){
         if(this.state.word.trim() === words[i].trim()){
            new_score = words[i].length - 1;
            break;
         }
      }
      this.setState({
         score: Math.pow(2, new_score)
      });
   }

   uploadFile() {
      var file = document.querySelector('input[type=file]').files[0];
      var reader = new FileReader()
      reader.onload = function (event) {
         words = event.target.result.split('\n');
      }
      reader.readAsText(file);
   }

   handleClick(i) {
      const squares = this.state.squares.slice();
      this.setState({
         squares: squares,
         xIsNext: !this.state.xIsNext,
         word: this.state.word.concat(squares[i])
      });
   }

   renderSquare(i) {
      return (<Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />);
   }

   render() {
      let status = "" + this.state.word;
      let score = this.state.score;
      var a = <div>
         <div className="status">{status}</div>
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
         </div>
         <div className="board-row">
            {<FuncButtons value={"START"} onClick={() => this.startButtons()} />}
            {<FuncButtons value={"RESET"} onClick={() => this.resetStatus()} />}
            {<FuncButtons value={"SUBMIT"} onClick={() => this.submit()} />}
         </div>
         <input className="file_reader" type="file" onChange={() => this.uploadFile()}/>
      </div>

      var b = <div className="score">{"Your score is: ".concat(score)}</div>

      if(score === 0)
         return a;
      else
         return b;
   }
}


class Game extends React.Component {
   render() {
      return (
         <div className="game">
            <div className="game-board">
               <Board />
            </div>
         </div>
      );
   }
}

// ========================================

ReactDOM.render(
   <Game />,
   document.getElementById('root')
);
