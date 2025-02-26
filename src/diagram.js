/**
 * Hämtar data från ett API.
 * @returns {Promise<Object>} Data från API:et som ett JSON-objekt.
 */
async function fetchData() { 
    const response = await fetch('https://studenter.miun.se/~mallar/dt211g/'); 
    const data = await response.json(); 
    return data; 
}

/**
 * Skapar och visar stapeldiagram för de mest sökta kurserna.
 * @param {Array} courses - Lista med kurser.
 */
function createBarChart(courses) {
    const ctx = document.getElementById('barChart');
    
    const chartData = {
        labels: courses.map(course => course.name),  // Namn på kurser
        datasets: [{
            label: 'Totalt antal sökande',
            data: courses.map(course => course.applicantsTotal), // Totalt antal sökande per kurs
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgb(255, 255, 255)',
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

/**
 * Skapar och visar cirkeldiagram för de mest sökta programmen.
 * @param {Array} programs - Lista med program.
 */
function createPieChart(programs) {
    const ctx = document.getElementById('pieChart');
    

    const chartData = {
        labels: programs.map(program => program.name),  // Namn på program
        datasets: [{
            label: 'Totalt antal sökande',
            data: programs.map(program => program.applicantsTotal),  // Totalt antal sökande per program
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)'],
            borderColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 206, 86)', 'rgb(75, 192, 192)', 'rgb(153, 102, 255)'],
            borderWidth: 1
        }]
    };

    new Chart(ctx, {
        type: 'pie',
        data: chartData,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                }
            }
        }
    });
}

/**
 * Hämtar data och skapar diagrammet när datan är redo.
 */
async function displayData() { 
    try {
        const data = await fetchData(); 
        console.log(data);  // Debugging: skriv ut data i konsolen för att kontrollera strukturen

        // Filtrera kurser och program
        const courses = data.filter(item => item.type === "Kurs").sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 6);
        const programs = data.filter(item => item.type === "Program").sort((a, b) => b.applicantsTotal - a.applicantsTotal).slice(0, 5);

        // Skapa diagrammen
        createBarChart(courses);
        createPieChart(programs);
    } catch (error) {
        console.error('Fel vid hämtning eller skapande av diagram:', error);
    }
}

// Kör funktionen för att hämta och visa data
displayData();
