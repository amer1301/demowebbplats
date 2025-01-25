// Array med id:n för bilder
const slides = ["slide1", "slide2", "slide3", "slide4", "slide5"];
let currentSlideIndex = 0;

// Funktion för att byta bild
function showSlide(index) {
    // Ta bort "active" från alla bilder
    slides.forEach(slideId => {
        const slide = document.getElementById(slideId);
        slide.classList.remove("active");
    });

    // Lägg till "active" på den aktuella bilden
    const currentSlide = document.getElementById(slides[index]);
    currentSlide.classList.add("active");
}

// Funktion för att gå till nästa bild
function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;  // Cirkulera tillbaka till första bilden
    showSlide(currentSlideIndex);
}

// Starta bildspelet och byt bild var 3:e sekund
setInterval(nextSlide, 3000);

// Visa den första bilden initialt
showSlide(currentSlideIndex);
