/**
 * Hämtar koordinater för en plats via Nominatim API.
 * @param {string} location - Den plats som användaren söker efter.
 */
async function getCoordinates(location) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}&addressdetails=1`);
        const data = await response.json();
        
        if (data.length > 0) {
            const lat = data[0].lat;
            const lon = data[0].lon;
            updateMap(lat, lon);  // Uppdatera kartan med de nya koordinaterna
        } else {
            alert('Platsen kunde inte hittas!');
        }
    } catch (error) {
        console.error('Fel vid hämtning av koordinater:', error);
        alert('Något gick fel när platsen skulle sökas.');
    }
}

/**
 * Uppdaterar Leaflet-kartan med den valda platsen.
 * @param {number} lat - Latituden för platsen.
 * @param {number} lon - Longituden för platsen.
 */
function updateMap(lat, lon) {
    const map = L.map('map').setView([lat, lon], 13);  // Skapar en karta med den valda platsen
    
    // Lägg till OpenStreetMap lager
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Lägg till markör på den valda platsen
    L.marker([lat, lon]).addTo(map)
        .bindPopup('Du sökte efter denna plats')
        .openPopup();
}

/**
 * Hanterar sökningen av platsen när användaren skriver i textfältet.
 */
document.getElementById('search-btn').addEventListener('click', function() {
    const location = document.getElementById('location-input').value;
    if (location) {
        getCoordinates(location);  // Hämtar koordinater för den angivna platsen
    } else {
        alert('Vänligen ange en plats!');
    }
});
