// frontend/src/App.js
import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/")
            .then((res) => res.text())
            .then((data) => setMessage(data))
            .catch((err) => console.error("API Fehler", err));
    }, []);

    return <div>{message ? message : "Lade..."}</div>;
}

export default App;
