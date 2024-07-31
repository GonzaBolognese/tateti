import { useState, useEffect } from "react"
import confetti from "canvas-confetti"
import Square from "./components/Square"
import { TURNS } from "./constants"
import { checkWinner } from "./logic/board"
import { Winner } from "./components/Winner"
import Header from "./components/Header"

function App() {
  const [board, setBoard] = useState(() => {
    const boardsFromStorage = window.localStorage.getItem('board')
    return boardsFromStorage ? JSON.parse(boardsFromStorage) : Array(9).fill(null);
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X;
  })

  const [history, setHistory] = useState(() => {
    const historyFromStorage = window.localStorage.getItem('history')
    return historyFromStorage ? JSON.parse(historyFromStorage) : [0, 0]
  }) 
  //null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null) 

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X)
    setWinner(null)
    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const resetHistory = () => {
    setHistory([0,0])
    window.localStorage.removeItem('history')
  }
  
  const updateBoard = (index) =>{
    if(board[index] || winner) return
      //Completa el cuadro seleccionado
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      //Revisar si hay un ganador
      const newWinner = checkWinner(newBoard)
      if(newWinner){
        confetti()
        const newHistory = [...history]
        if(newWinner === TURNS.X){
          newHistory[0] ++;
        }else {
          newHistory[1] ++;
        }
        setHistory(newHistory)
        return setWinner(newWinner)
      } else if(!newBoard.includes(null)){
        setWinner(false);
      }

      //Cambiar de turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
      setTurn(newTurn);

      
    }

    useEffect(() => {
      window.localStorage.setItem('board', JSON.stringify(board))
      window.localStorage.setItem('turn', turn)
      window.localStorage.setItem('history', JSON.stringify(history))
    },[turn, board, history])



  return ( 
    <>
    <Header resetGame={resetGame} resetHistory={resetHistory} />
      <main className="board">
        <section className="game">
          {
            board.map((_, index) => {
              return(
                <Square 
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                  >
                    {board[index]}
                  </Square>
              )
            })
          }
        </section>
        <section className="turn">
          <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
        </section>
        <section className="turn">
          <Square >{history[0]}</Square>
          <Square >{history[1]}</Square>
        </section>
        <Winner winner={winner} resetGame={resetGame} />
      </main>
    </> 
  )
}

export default App
