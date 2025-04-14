
const activityFeed = document.getElementById('activityFeed');
function addActivity(message) {
    const item = document.createElement('li');
    item.textContent = message;
    activityFeed.prepend(item);
}

document.getElementById('connectWallet').addEventListener('click', async () => {
    try {
        const provider = window.phantom?.solana;
        if (!provider || !provider.isPhantom) {
            alert('Bitte Phantom Wallet installieren');
            return;
        }
        const resp = await provider.connect();
        document.getElementById('walletAddress').innerText = `Verbunden: ${resp.publicKey.toString()}`;
        addActivity(`✅ Wallet verbunden: ${resp.publicKey.toString()}`);
    } catch (err) {
        console.error('Wallet Fehler:', err);
        addActivity('❌ Wallet-Verbindung fehlgeschlagen');
    }
});

document.getElementById('snipeBtn').addEventListener('click', async () => {
    document.getElementById('snipeStatus').innerText = "Sniping ausgeführt...";
    addActivity("🟢 Sniper gestartet – Demo-Kauf ausgeführt (0.1 SOL)");
});
