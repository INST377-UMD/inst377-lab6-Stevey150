function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

// Initialize map centered over the US
var map = L.map('map').setView([37.8, -96], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// Generate random coordinates
let lat1 = getRandomInRange(30, 35, 3);
let lon1 = getRandomInRange(-90, -100, 3);
let lat2 = getRandomInRange(30, 35, 3);
let lon2 = getRandomInRange(-90, -100, 3);
let lat3 = getRandomInRange(30, 35, 3);
let lon3 = getRandomInRange(-90, -100, 3);

// Add markers for random coordinates
let marker1 = L.marker([lat1, lon1]).addTo(map);
let marker2 = L.marker([lat2, lon2]).addTo(map);
let marker3 = L.marker([lat3, lon3]).addTo(map);

// Function to fetch locality data
async function fetchLocality(lat, lon, elementId) {
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`);
    const data = await response.json();
    document.getElementById(elementId).innerText = `Marker (${lat}, ${lon}): ${data.locality}`;
}

// Fetch locality for each marker
fetchLocality(lat1, lon1, 'marker1');
fetchLocality(lat2, lon2, 'marker2');
fetchLocality(lat3, lon3, 'marker3');
