// Menú de navegación en móviles: Mostrar/ocultar el menú
document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('menu-toggle');  // Botón de hamburguesa
    const navbar = document.getElementById('navbar');

    // Toggle del menú de navegación
    toggleButton.addEventListener('click', function () {
        navbar.classList.toggle('active');  // Cambia la visibilidad del menú
    });
});

// Desplazamiento suave al hacer clic en los enlaces
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Desplazarse suavemente a la sección
        window.scrollTo({
            top: targetElement.offsetTop - 70, // Ajuste de desplazamiento
            behavior: 'smooth'
        });
    });
});

// Función para el slider de imágenes
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Mostrar la siguiente imagen en el slider
function showNextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Mostrar la imagen previa en el slider
function showPreviousSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

// Configurar el cambio de imagen cada 5 segundos
setInterval(showNextSlide, 5000);

// Agregar controladores de eventos para los botones del slider (si los tienes)
const nextButton = document.getElementById('next-slide');
const prevButton = document.getElementById('prev-slide');

if (nextButton) {
    nextButton.addEventListener('click', showNextSlide);
}

if (prevButton) {
    prevButton.addEventListener('click', showPreviousSlide);
}
