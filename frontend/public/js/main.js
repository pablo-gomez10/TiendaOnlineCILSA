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
    // Ejemplo de datos de los cursos (esto podría venir de tu backend o ser dinámico en tu aplicación)
    const cursosDisponibles = {
        BICILSA2024: {
            id: 'addToCartButton',
            name: 'Curso Analísis de Datos en Power Bi 2024',
            price: 45000,
        },
        // Agrega más cursos aquí si es necesario
    };

    // Obtener el curso seleccionado
    const curso = cursosDisponibles[cursoId];

    if (!curso) {
        console.error(`Curso con ID ${cursoId} no encontrado.`);
        return;
    }

    // Obtener carrito actual de LocalStorage o inicializarlo
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // Verificar si el curso ya está en el carrito
    const cursoExistente = carrito.find(item => item.id === curso.id);

    if (cursoExistente) {
        // Incrementar la cantidad si ya existe en el carrito
        cursoExistente.quantity += 1;
    } else {
        // Agregar el curso al carrito
        carrito.push({ ...curso, quantity: 1 });
    }

    // Guardar el carrito actualizado en LocalStorage
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Confirmación al usuario
    console.log(`Curso "${curso.name}" agregado al carrito.`);
    alert(`Curso "${curso.name}" agregado al carrito.`);
}