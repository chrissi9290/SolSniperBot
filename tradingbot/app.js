async function fetchTrendingCoins() {
  try {
    const response = await fetch("https://pump.fun/api/projects?limit=20");
    const data = await response.json();

    const tbody = document.getElementById('tokenList');
    tbody.innerHTML = ""; // Reset

    data.projects.forEach(project => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${project.ticker}</td>
        <td>${(project.volume24h / 1e9).toFixed(2)} SOL</td>
        <td><a href="https://pump.fun/${project.id}" target="_blank"><button>View</button></a></td>
      `;
      tbody.appendChild(row);
    });

  } catch (error) {
    console.error("Pump.fun API error:", error);
  }
}

// On load
fetchTrendingCoins();
