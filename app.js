const apiKey = 'tEwrCx246VXwNKxohtba2oSPOlavCSVe1priEwKx';  // Replace with your actual API key

// The endpoint for MLB players' stats might look like this
const url = `https://api.sportradar.com/mlb/trail/v8/en/seasons/2024/REG/leaders/statistics.json`;

async function getPlayersStats() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    // Assuming 'data' has a list of players
    const playerList = data.players;
    const playerListDiv = document.getElementById("player-list");

    playerList.forEach(player => {
      const playerDiv = document.createElement("div");
      playerDiv.innerHTML = `
        <h3>${player.full_name}</h3>
        <p>Batting Average: ${player.stats.batting.avg}</p>
      `;
      playerListDiv.appendChild(playerDiv);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

getPlayersStats();
