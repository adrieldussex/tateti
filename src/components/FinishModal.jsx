export function FinishModal({winner, resetGame}) {
    if (winner == null) return null

    const winnerText = winner == false ? 'Empate' : 'El ganador es:'

    return (
          <section className='flex flex-col gap-2'>
            <header>
              <h2>{winnerText}</h2>
            </header>
            <main>
              {winner && <p className='text-xl bg-red-200 px-6 py-4 rounded-full'>{winner}</p>}
            </main>
            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
          </section>
  )
}

