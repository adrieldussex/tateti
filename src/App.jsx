import { useState } from 'react'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from '../constants'

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)

  const updateBoard = (index) => {
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <main className='flex flex-col justify-center items-center gap-6'>
      <h1 className='font-semibold'>TA-TE-TI</h1>
      <section className='grid grid-cols-3 gap-2'>
        {
          board.map((_, index) => {
            return (
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
      <section className='flex flex-col gap-2'>
        <h2 className='text-xl font-semibold'>Siguiente turno:</h2>
        <div className='flex gap-2'>
          <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
        </div>
      </section>
    </main>
  )
}

export default App
