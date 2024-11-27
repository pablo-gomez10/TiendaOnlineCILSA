// Variables
const carrito = document.querySelector('#carrito tbody');
const totalCarrito = document.querySelector('#total');
const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
let carritoItems = [];

// Escuchar eventos
document.addEventListener('DOMContentLoaded', () => {
    // Escuchar el clic en el botón "Agregar al carrito"
    document.querySelectorAll('.agregar-carrito').forEach(btn => {
        btn.addEventListener('click', agregarCurso);
    });

    // Escuchar clic en "Vaciar carrito"
    btnVaciarCarrito.addEventListener('click', vaciarCarrito);
});

// Función para agregar curso al carrito
function agregarCurso(e) {
    const button = e.target;
    const curso = {
        id: button.dataset.id,
        nombre: button.dataset.nombre,
        precio: parseFloat(button.dataset.precio)
    };

    // Añadir el curso al carrito
    carritoItems.push(curso);
    actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    // Limpiar el carrito anterior
    carrito.innerHTML = '';

    // Recalcular el total
    let total = 0;

    // Recorrer los elementos del carrito
    carritoItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.nombre}</td>
            <td>${item.precio} ARS</td>
            <td><button class="borrar-curso" data-id="${item.id}">Eliminar</button></td>
        `;
        carrito.appendChild(row);

        // Sumar al total
        total += item.precio;
    });

    // Actualizar el total en la página
    totalCarrito.textContent = total;

    // Escuchar los botones de eliminar
    document.querySelectorAll('.borrar-curso').forEach(btn => {
        btn.addEventListener('click', eliminarCurso);
    });
}

// Función para eliminar curso del carrito
function eliminarCurso(e) {
    const id = e.target.dataset.id;

    // Eliminar del array del carrito
    carritoItems = carritoItems.filter(item => item.id !== id);

    // Actualizar la vista del carrito
    actualizarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carritoItems = [];
    actualizarCarrito();
}
