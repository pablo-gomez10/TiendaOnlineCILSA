document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        mostrarError("Por favor, complete todos los campos.");
        return;
    }

    // Enviar datos al backend
    iniciarSesion(username, password);
});

function mostrarError(mensaje) {
    const errorMsg = document.getElementById('error-message');
    errorMsg.textContent = mensaje;
    errorMsg.style.display = 'block';
}

function iniciarSesion(username, password) {
    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/tienda.html';
        } else {
            mostrarError("Usuario o contraseña incorrectos.");
        }
    })
    .catch(error => {
        mostrarError("Hubo un error al iniciar sesión.");
        console.error("Error:", error);
    });
}

// Conectar el Frontend con el Backend: En el codigo del fontend, donde tiene el archivo 
// login.js, cambia la URL de la solicitud fetch para que apunte local que acabas de configurar.
function iniciarSesion(username, password) {
    fetch('http://localhost:3000/login', {  // Asegúrate de que coincide con el puerto de tu servidor
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = '/tienda.html';
        } else {
            mostrarError("Usuario o contraseña incorrectos.");
        }
    })
    .catch(error => {
        mostrarError("Hubo un error al iniciar sesión.");
        console.error("Error:", error);
    });
}


