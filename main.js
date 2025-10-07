
const gasStations = [
  { name: "Shell Station", location: "Lagos", distance: "1.2 km" },
  { name: "TotalEnergies", location: "Abuja", distance: "2.3 km" },
  { name: "Oando Fuel", location: "Port Harcourt", distance: "1.1 km" },
  { name: "NNPC Mega Station", location: "Lagos", distance: "3.5 km" },
  { name: "MRS Filling Station", location: "Kano", distance: "4.2 km" },
  { name: "Conoil Station", location: "Abuja", distance: "2.7 km" }
];


const searchInput = document.getElementById('city-input');
const resultsPanel = document.getElementById('results-panel');


searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  
  
  resultsPanel.innerHTML = '';
  
  
  if (searchTerm === '') {
    resultsPanel.innerHTML = '<p style="color: gray;">Start typing to find stations...</p>';
    return;
  }
  
  
  const matchedStations = gasStations.filter(station =>
    station.location.toLowerCase().includes(searchTerm)
  );
  
  
  if (matchedStations.length === 0) {
    resultsPanel.innerHTML = '<p style="color: red;">No stations found for this location.</p>';
  } else {
    matchedStations.forEach(station => {
      const stationDiv = document.createElement('div');
      stationDiv.classList.add('station-item');
      stationDiv.innerHTML = `
        <h4>${station.name}</h4>
        <p>Location: ${station.location}</p>
        <p>Distance: ${station.distance}</p>
        <hr>
      `;
      resultsPanel.appendChild(stationDiv);
    });
  }
});