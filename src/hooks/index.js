import { useState, useEffect } from 'react'

export const useCrypto = (socket, symbol) => {
    const [dailyChange, setDailyChange] = useState()
    const [volume, setVolume] = useState()
    const [lastPrice, setLastPrice] = useState()

    useEffect(() => {
        socket.onopen = () => socket.send(JSON.stringify({
            "event": "subscribe",
            "channel": "ticker",
            "symbol": symbol
        }));
        socket.onmessage = (msg) => {
            let response = JSON.parse(msg.data)
            if (response[1]) {
                setDailyChange(() => +(response[1][5] * 100).toFixed(2))
                setVolume(() => Math.trunc(response[1][9] * 1000))
                setLastPrice(() => response[1][2])
            }
            return () => socket.send(
                JSON.stringify({
                    "event": "unsubscribe",
                    "channel": "ticker",
                    "symbol": symbol
                })
            )
        }
    }, [dailyChange, volume, lastPrice])

    return [dailyChange, volume, lastPrice]
}




