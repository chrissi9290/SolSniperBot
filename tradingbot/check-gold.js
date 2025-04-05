<script type="module">
  import { Connection, PublicKey } from "https://esm.sh/@solana/web3.js";

  const SPP_MINT = "AJwynGxHawX14e2ZL9VQV1kpXGKxWtTdqAxWMaL53H3H";
  const RPC = "https://api.mainnet-beta.solana.com";
  const connection = new Connection(RPC);

  async function checkGoldAccess(publicKey) {
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(new PublicKey(publicKey), {
      programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA")
    });

    let hasGold = false;

    tokenAccounts.value.forEach((account) => {
      const tokenAmount = account.account.data.parsed.info.tokenAmount;
      const mint = account.account.data.parsed.info.mint;

      if (mint === SPP_MINT && parseFloat(tokenAmount.uiAmount) >= 100) {
        hasGold = true;
      }
    });

    const statusDiv = document.getElementById("goldStatus");
    statusDiv.innerText = hasGold ? "✅ Gold Access Granted" : "❌ Gold Access Locked";
    if (!hasGold) {
      statusDiv.style.color = "red";
    }
  }

  // Trigger after wallet connects
  window.checkGold = (walletAddress) => checkGoldAccess(walletAddress);
</script>
