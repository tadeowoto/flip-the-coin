import { useState } from "react"

export default function useCoin() {
    const [isHeads, setIsHeads] = useState(true)

    function flipTheCoin() {
        const isHeads = Math.random() < 0.5;
        setIsHeads(isHeads);
    }

    return { isHeads, flipTheCoin }
}