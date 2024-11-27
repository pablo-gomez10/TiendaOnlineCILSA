const API_URL = 'http://localhost:3000/api/courses';

// Obtener cursos desde la API
const obtenerCursos = async () => {
    try {
        const response = await fetch(API_URL);
        const cursos = await response.json();
        console.log(cursos);
        // Lógica para renderizar los cursos en la página
    } catch (error) {
        console.error('Error al obtener cursos:', error);
    }
};

// Llama a la función cuando cargue la página
document.addEventListener('DOMContentLoaded', obtenerCursos);

// Cargar cursos al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    fetchCursos();
});

function fetchCursos() {
    fetch('http://localhost:3000/api/courses')
        .then(response => response.json())
        .then(data => {
            mostrarCursos(data);
        })
        .catch(error => console.error('Error al obtener los cursos:', error));
}

// Mostrar los cursos en la página
function mostrarCursos(cursos) {
    const cursosContainer = document.getElementById('cursos-container'); // Asegúrate de tener este contenedor en tu HTML
    cursosContainer.innerHTML = ''; // Limpiar contenido previo

    cursos.forEach(curso => {
        const cursoElement = document.createElement('div');
        cursoElement.className = 'curso';
        cursoElement.innerHTML = `
            <h3>${curso.nombre}</h3>
            <p>${curso.descripcion}</p>
            <button onclick="agregarAlCarrito(${curso.id})">Agregar al carrito</button>
        `;
        cursosContainer.appendChild(cursoElement);
    });
}

// Función para agregar un curso al carrito
function agregarAlCarrito(cursoId) {
    console.log(`Curso agregado al carrito: ${cursoId}`);
    // Aquí podrías implementar la lógica para actualizar el carrito en el frontend o enviar una solicitud al backend.
}
