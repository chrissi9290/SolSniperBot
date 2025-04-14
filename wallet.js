
const activityFeed = document.getElementById('activityFeed');
function addActivity(message) {
    const item = document.createElement('li');
    item.textContent = message;
    activityFeed.prepend(item);
}

// Wallet Connect
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

// Simulierter Token-Daten Abruf
function loadTokenData() {
    document.getElementById('tokenName').innerText = "Token: $PRINTER";
    document.getElementById('tokenPrice').innerText = "Preis: 0.000023 SOL";
    document.getElementById('tokenVolume').innerText = "Volumen: 6.3 SOL";
    document.getElementById('tokenChange').innerText = "24h Änderung: +13.4%";
}
loadTokenData();

// Sniper Buy (Demo)
document.getElementById('snipeBtn').addEventListener('click', async () => {
    document.getElementById('snipeStatus').innerText = "Sniping ausgeführt (Simuliert)...";
    addActivity("🟢 $PRINTER gesniped – 0.1 SOL (Demo)");
});
