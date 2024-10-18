// Efecto de scroll suave en los enlaces
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mostrar el botón cuando el usuario haga scroll hacia abajo
window.onscroll = function() {
    let button = document.getElementById('backToTop');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Volver al inicio cuando se hace clic en el botón
document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animación de fade cuando el mouse se coloca sobre las imágenes del carrusel
document.querySelectorAll('.card-img-top').forEach(img => {
    img.addEventListener('mouseover', () => {
        img.style.transition = 'opacity 0.5s ease';
        img.style.opacity = '0.8';
    });
    
    img.addEventListener('mouseout', () => {
        img.style.opacity = '1';
    });
});

// Mostrar mensaje de bienvenida al cargar la página
window.onload = function() {
    setTimeout(function() {
        alert('¡Bienvenido a CodigoArgentino! Explora nuestros cursos para potenciar tu carrera.');
    }, 2000); // 2 segundos de retraso
};

// Validación básica del formulario de búsqueda
document.querySelector('form').addEventListener('submit', function(e) {
    let searchInput = document.querySelector('input[type="search"]');
    if (searchInput.value.trim() === "") {
        e.preventDefault(); // Evita el envío del formulario
        alert('Por favor, ingresa un término de búsqueda.');
    }
});
