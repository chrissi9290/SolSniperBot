document.getElementById('connectWallet').addEventListener('click', async () => {
  if (window.solana && window.solana.isPhantom) {
    try {
      const response = await window.solana.connect();
      document.getElementById('walletAddress').innerText = `Wallet: ${response.publicKey}`;
    } catch (err) {
      console.error("Connection failed:", err);
    }
  } else {
    alert("Please install Phantom Wallet.");
  }
});

// Beispielhafte Tokens (später durch API ersetzt)
const tokens = [
  { name: "MemeMaster", volume: "25 SOL" },
  { name: "Pumpzilla", volume: "40 SOL" },
];

const tbody = document.getElementById('tokenList');
tokens.forEach(token => {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${token.name}</td>
    <td>${token.volume}</td>
    <td><button>Buy</button></td>
  `;
  tbody.appendChild(row);
});
