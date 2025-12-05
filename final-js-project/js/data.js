// JSON-like data: 5 TV show records, each with 4 fields
const tvShows = [
  {
    name: "Stranger Things",
    mainCharacter: "Eleven",
    service: "Netflix",
    startDate: "July 15, 2016"
  },
  {
    name: "The Witcher",
    mainCharacter: "Geralt of Rivia",
    service: "Netflix",
    startDate: "December 20, 2019"
  },
  {
    name: "The Mandalorian",
    mainCharacter: "Din Djarin",
    service: "Disney+",
    startDate: "November 12, 2019"
  },
  {
    name: "Breaking Bad",
    mainCharacter: "Walter White",
    service: "AMC / Netflix",
    startDate: "January 20, 2008"
  },
  {
    name: "Arcane",
    mainCharacter: "Vi & Jinx",
    service: "Netflix",
    startDate: "November 6, 2021"
  }
];

function renderTvShows() {
  const container = document.getElementById("tv-show-list");
  if (!container) return;

  tvShows.forEach(show => {
    const card = document.createElement("div");
    card.className = "show-card";

    card.innerHTML = `
      <h3>${show.name}</h3>
      <p><strong>Main character:</strong> ${show.mainCharacter}</p>
      <p><strong>Network / Service:</strong> ${show.service}</p>
      <p><strong>Start / Publish Date:</strong> ${show.startDate}</p>
    `;

    container.appendChild(card);
  });
}

// Run when DOM is ready
document.addEventListener("DOMContentLoaded", renderTvShows);
