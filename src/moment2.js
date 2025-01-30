// En asynkron funktion hämtar data från ett API 
async function fetchData() { 
    const response = await fetch('https://webbutveckling.miun.se/files/ramschema_ht24.json'); 
    const data = await response.json(); 
    return data; 
} 
 
// Asynkron Funktion som inväntar och visar data 
async function displayData() { 
    let data = await fetchData(); 

const tableBody = document.querySelector("#courseTable tbody");

//Rensa tabellen om det redan finns data
tableBody.innerHTML = "";

data.forEach(course => {
    const row = document.createElement('tr'); //skapar ny rad

    //skapar celler och lägger till dem
    const codeCell = document.createElement('td');
    codeCell.textContent = course.code;
    row.appendChild(codeCell);


    const nameCell = document.createElement('td');
    nameCell.textContent = course.coursename;
    row.appendChild(nameCell);

    const progressionCell = document.createElement('td');
    progressionCell.textContent = course.progression;
    row.appendChild(progressionCell);

    //lägger till kursplan som en länk
    const syllabusCell = document.createElement('td');
    const syllabusLink = document.createElement('a');
    syllabusLink.href = course.syllabus;
    syllabusLink.textContent = "Kursplan";
    syllabusLink.target = "_blank"; //Öppnar länken i ny flik
    syllabusCell.appendChild(syllabusLink);
    row.appendChild(syllabusCell);

    tableBody.appendChild(row);
});
} 
 
displayData(); 