import { Coin } from "./components/Coin/Coin"
import "./App.css"
import useCoin from "./hooks/useCoin"

function App() {
  const { flipTheCoin, isHeads } = useCoin()

  return (
    <>
      <main className="coin-main">
        <h1 className="coin-title">Flip the coin</h1>
        <p className="coin-desc">Flip the coin</p>
        <Coin isHeads={isHeads} flipTheCoin={flipTheCoin} />
        <button className="coin-btn" onClick={flipTheCoin}>Flip the coin</button>
      </main>
    </>
  )
}

export default App
