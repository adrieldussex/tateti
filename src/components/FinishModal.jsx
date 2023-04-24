export function FinishModal({winner, resetGame}) {
    if (winner == null) return null

    const winnerText = winner == false ? 'Empate' : 'El ganador es:'

    return (
          <section className='bg-slate-300 absolute w-screen h-screen top-0 left-0 grid place-items-center'>
            <div className="bg-slate-200 w-80 p-4 rounded-lg flex flex-col justify-center items-center shadow-lg gap-6">
              <header>
                <h2>{winnerText}</h2>
              </header>
              <main>
                {winner && <p className='text-4xl'>{winner}</p>}
              </main>
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
  )
}

