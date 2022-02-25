import React, {useState} from 'react';
import Square from './Component/Square';
const boardStyle = {
  "height": "100px",
  "margin": "50px",
  "text-align": "center"
}
const style = {
  background: "white",
  width:"100px",
  height:"100px",
  fontSize:"40px",
  border:"2px solid",
  cursor: "pointer",
  position: "relative"
}
const fontStyle = {
  "margin-top": "20px",
  "fontSize": "40px",
  "text-align": "center"
}


function App() {
  const[click, setClick] = useState(Array(9).fill(null));
  const[isNext, setIsNext] = useState(true);

  let winner = null;  
  function getWinner(click) {
    const winCondition = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < winCondition.length; i++) {
      const [a, b, c] = winCondition[i];
      if (click[a] && click[a] === click[b] && click[a] === click[c]) {
        return click[a];
      }
    }
    return null;
  } 
  
  function renderSquare(i)
  {return <Square
    style = {style}
    value={click[i]}
    onClick= {()=>{
      if(click[i] != null || winner!=null ){
        return;
      }
      const next = click.slice();
      next[i] = isNext ? "O" : "X";
      setClick(next);
      setIsNext(!isNext);
  }}>
  </Square>
}

  function isFull(click){
    for(let i = 0; i < 9; i++){
      if(click[i] == null){
        return false;
      }
    }  
    return true;
  }
  winner = getWinner(click);
  function getWin(){
    if(winner!=null){
      return "Winner: " +  winner;
    }else if(isFull(click)){
      return "Draw!"
    }else{
      return "Next: " + (isNext ? "O" : "X");
    }
  }

  return (
    <div style = {boardStyle}>
      <h1>Tic Tac Toe</h1>
      <div className='main'>
      
        <div className='row1' >
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        </div>
        <div className='row2'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        </div>
        <div className='row3' >
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>
      </div>
      <div className="game-info" style={fontStyle}>{getWin()}</div>
      </div>
  );
}

export default App;
