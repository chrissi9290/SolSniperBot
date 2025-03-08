import React, { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState("Lade...");

    useEffect(() => {
        fetch("https://sol-sniper-bot-8o9k.vercel.app/api/index")
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Netzwerkantwort war nicht ok: ' + response.statusText);
                }
                return response.json();
            })
            .then((data) => setMessage(data.message))
            .catch((error) => setMessage("Fehler beim Laden des Backends: " + error.message));
    }, []);

    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default App;