import React, {  useState } from 'react'
import Square from './Square'

const Board = () => {

    const [game, setGame] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState(true);
   
    // logic the box check 
    const check_Winner = () => {
        const winner_Logic = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
    
        for (let logic of winner_Logic) {
          const [a, b, c] = logic;
          if (game[a] !== null && game[a] === game[b] && game[a] === game[c]) {
            return game[a];
          }
        }
    
        return false;
      };
    
      const Winner = check_Winner();

    const click = (index)=>{
      // this case will be use to disable double click 
        if(game[index]!== null){
            return;
        }
        const game_copy = [...game];
        // there are two player "X" or "0"

        game_copy[index] = player ? "X" : "O";
        setGame( game_copy);

      
        setPlayer(!player);

    }
    // the game the restart when array is null 
    const handleReset = ()=>{
        setGame(Array(9).fill(null));
    }
  return (
    <>
      <div className='container'>
        {
                    Winner ? (
                        <>
                        <span>{Winner} won the game</span>
                        <button onClick={handleReset}>Play Again</button>
                      </>
                    ):(
                        <>
                        <h4>Player <span>{player ? "X" : "O"}</span> your turn</h4>
                        <div className='row'>
                            <Square onClick={() => click(0)} value={game[0]}/>
                            <Square onClick={() => click(1)} value={game[1]}/>
                            <Square onClick={() => click(2)} value={game[2]}/>
                        </div>
                        <div className='row'>
                            <Square onClick={() => click(3)} value={game[3]}/>
                            <Square onClick={() => click(4)} value={game[4]}/>
                            <Square onClick={() => click(5)} value={game[5]}/>
                        </div>
                        <div className='row'>
                            <Square onClick={() => click(6)} value={game[6]}/>
                            <Square onClick={() => click(7)} value={game[7]}/>
                            <Square onClick={() => click(8)} value={game[8]}/>
                        </div>
                        </>
                    )
        }
    
      </div>
    </>
  )
}

export default Board
