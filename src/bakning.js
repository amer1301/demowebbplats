document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Hämta receptet som knappen refererar till
            const receptId = this.getAttribute('data-recept');

            // Dölj alla recept-sektioner
            document.querySelectorAll('.recept div').forEach(div => {
                div.style.display = 'none';
            });

            // Visa rätt recept-sektion
            const receptSection = document.getElementById(receptId);
            if (receptSection) {
                receptSection.style.display = 'block'; // Gör receptet synligt

                // Scrolla till receptsektionen
                receptSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
