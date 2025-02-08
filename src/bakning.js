        // Hämta alla knappar
        const buttons = document.querySelectorAll('.button');

        // Lägg till en eventlyssnare på varje knapp
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                // Hämta receptet som knappen refererar till
                const receptId = this.getAttribute('data-recept');

                // Dölj alla receptsektioner
                document.querySelectorAll('.recept div').forEach(div => {
                    div.style.display = 'none';
                });

                // Visa rätt receptsektion
                const receptSection = document.getElementById(receptId);
                if (receptSection) {
                    receptSection.style.display = 'block';

                    // Scrolla till receptsektionen
                    receptSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });