interface CoinProps {
    isHeads: boolean
    flipTheCoin: () => void
}

export function Coin({ isHeads, flipTheCoin }: CoinProps) {

    return (
        <div className="coin" onClick={flipTheCoin}>
            {isHeads ? (
                <img src="/heads.svg" alt="heads" />
            ) : (
                <img src="/tails.svg" alt="tails" />
            )}
        </div>
    )

}