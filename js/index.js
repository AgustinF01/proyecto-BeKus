// Menu hamburguesa para moviles
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active'); // Alterna la clase 'active'
});

// Agrega un evento de clic al botón de cierre
document.getElementById('close').addEventListener('click', function() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.remove('active'); // Elimina la clase 'active' para cerrar el menú
});

// ----------------------------------------------------

const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
const imageWidth = images[0].getBoundingClientRect().width;
let currentIndex = 0;

function moveToNextSlide() {
    currentIndex++;
    
    // Si llegamos al final, reiniciamos el índice
    if (currentIndex >= images.length / 2) {
        currentIndex = 0;
        track.style.transition = 'none'; // Desactivar la transición
        track.style.transform = `translateX(0)`;
        
        // Esperar un pequeño tiempo antes de volver a aplicar la transición
        setTimeout(() => {
            track.style.transition = 'transform 0.7s ease-in-out'; // Volver a activar la transición
            moveToNextSlide(); // Mover a la siguiente imagen
        }, 50); // Esperar 50ms
    } else {
        const offset = -currentIndex * imageWidth;
        track.style.transition = 'transform 0.7s ease-in-out'; // Asegúrate de que la transición esté activa
        track.style.transform = `translateX(${offset}px)`;
    }
}

// Cambia cada 3 segundos
setInterval(moveToNextSlide, 3000);