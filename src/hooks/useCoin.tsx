import { useState } from "react"

export default function useCoin() {
    const [isHeads, setIsHeads] = useState(true)
    const [isFlipping, setIsFlipping] = useState(false)

    function flipTheCoin() {
        if (isFlipping) return;

        setIsFlipping(true);

        setTimeout(() => {
            const result = Math.random() < 0.5;
            setIsHeads(result);
            setIsFlipping(false);
        }, 1000);
    }

    return { isHeads, flipTheCoin, isFlipping }
}