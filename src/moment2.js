// En asynkron funktion hämtar data från ett API 
async function fetchData() { 
    const response = await fetch('https://webbutveckling.miun.se/files/ramschema_ht24.json'); 
    const data = await response.json(); 
    return data; 
} 
 
// Asynkron Funktion som inväntar och visar data 
async function displayData() { 
    let data = await fetchData(); 
    console.log(data); 
} 
 
displayData(); 