import { Coin } from "./components/Coin/Coin"
import "./App.css"
import useCoin from "./hooks/useCoin"

function App() {
  const { flipTheCoin, isHeads, isFlipping } = useCoin()

  return (
    <>
      <main className="coin-main">
        <h1 className="coin-title">Coin Flip</h1>
        <p className="coin-desc">Just make a decision</p>
        <Coin isHeads={isHeads} flipTheCoin={flipTheCoin} isFlipping={isFlipping} />
        <button className="coin-btn" onClick={flipTheCoin}>Flip the coin</button>
      </main>
    </>
  )
}

export default App
