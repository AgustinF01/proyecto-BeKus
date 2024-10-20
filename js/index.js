// Menu hamburguesa para moviles
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const track = document.querySelector('.carousel-track');

// Duplicamos las imágenes para crear el efecto infinito
const images = Array.from(track.children);
images.forEach(img => {
    const clone = img.cloneNode(true);
    track.appendChild(clone);
});