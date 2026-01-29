import './Coin.css'

interface CoinProps {
    isHeads: boolean
    isFlipping: boolean
    flipTheCoin: () => void
}

export function Coin({ isHeads, flipTheCoin, isFlipping }: CoinProps) {
    return (
        <div
            className={`coin ${isFlipping ? 'flipping' : ''}`}
            onClick={flipTheCoin}
        >
            {isHeads ? (
                <img src="/heads.svg" alt="heads" />
            ) : (
                <img src="/tails.svg" alt="tails" />
            )}
        </div>
    )
}