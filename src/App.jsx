import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from '../constants'
import { checkWinner, checkEndGame } from './logic/Board'
import { FinishModal } from './components/FinishModal'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    // no actualizar la posición si tiene algo
    if (board[index] || winner) return
    // actualizar tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // ver si hay un ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (
    <main className='flex flex-col justify-center items-center gap-6'>
      <h1 className='font-semibold'>TA-TE-TI</h1>
      <button onClick={resetGame}>Reiniciar</button>
      <section className='grid grid-cols-3 gap-2'>
        {
          board.map((square, index) => {
            return (
              <Square 
              key={index}
              index={index}
              updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold'>Siguiente turno:</h2>
        <div className='flex gap-2'>
          <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
        </div>
      </section>

      <FinishModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
