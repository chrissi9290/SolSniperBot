
const { Connection, PublicKey, Transaction, SystemProgram, sendTransaction } = solanaWeb3;
const activityFeed = document.getElementById('activityFeed');

function addActivity(msg) {
    const li = document.createElement('li');
    li.textContent = msg;
    activityFeed.prepend(li);
}

let provider = null;
let publicKey = null;

document.getElementById('connectWallet').addEventListener('click', async () => {
    provider = window.phantom?.solana;
    if (!provider?.isPhantom) return alert("Bitte Phantom installieren");
    try {
        const res = await provider.connect();
        publicKey = res.publicKey;
        document.getElementById('walletAddress').innerText = `Verbunden: ${publicKey.toString()}`;
        addActivity(`✅ Verbunden mit ${publicKey.toString()}`);
    } catch (err) {
        addActivity('❌ Verbindung fehlgeschlagen');
    }
});

document.getElementById('snipeBtn').addEventListener('click', async () => {
    if (!provider || !publicKey) return alert("Bitte zuerst Wallet verbinden");
    try {
        const connection = new Connection("https://api.devnet.solana.com");
        const feeWallet = new PublicKey("6UnfcAwWPcD17ZJ2D1PtJkaRr9uhymZUa793zgyRARzB");
        const targetWallet = new PublicKey("GvDMoD7U8KnLwEnG13t2kJ5Xm3e7TZhrmvwFazsWz2iw"); // Beispiel-Adresse

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: targetWallet,
                lamports: 90000000 // 0.09 SOL
            }),
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: feeWallet,
                lamports: 10000000 // 0.01 SOL Fee
            })
        );

        const { signature } = await provider.signAndSendTransaction(transaction);
        addActivity(`🟢 Sniping TX gesendet: https://solscan.io/tx/${signature}?cluster=devnet`);
        document.getElementById('snipeStatus').innerText = "Sniping gesendet!";
    } catch (err) {
        console.error(err);
        addActivity("❌ Fehler beim Snipen");
    }
});
