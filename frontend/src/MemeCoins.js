// frontend/src/MemeCoins.js
import React, { useState, useEffect } from 'react';

function MemeCoins() {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchCoins() {
            try {
                const response = await fetch("https://api.pump.fun/coins/latest");
                if (!response.ok) {
                    throw new Error("Fehler beim Laden der Daten: " + response.statusText);
                }
                const data = await response.json();
                setCoins(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchCoins();
    }, []);

    if (loading) {
        return <div>Lade Meme-Coins...</div>;
    }

    if (error) {
        return <div>Fehler: {error}</div>;
    }

    return (
        <div>
            <h1>Neueste Meme-Coins von Pump.fun</h1>
            <ul>
                {coins.map((coin) => (
                    <li key={coin.id}>
                        <strong>{coin.name}</strong> - Preis: {coin.price} SOL
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MemeCoins;
