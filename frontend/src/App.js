import React, { useState, useEffect } from 'react';

function App() {
    const [message, setMessage] = useState("Lade...");

    useEffect(() => {
        fetch("/api/index")
            .then((response) => response.json())
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
