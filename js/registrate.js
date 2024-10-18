// Escuchar el evento 'submit' del formulario
document.getElementById('form').addEventListener('submit', function(e) {
    // Evitar el envío del formulario por defecto
    e.preventDefault();

    // Obtener los valores de los campos
    const nombre = document.getElementById('usuario').value.trim();
    const email = document.getElementById('mail').value.trim();
    const razon = document.querySelector('select[name="razon"]').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validación
    let valid = true;
    let errorMessage = "";

    if (nombre === "") {
        valid = false;
        errorMessage += "El campo 'Nombre y Apellido' es obligatorio.\n";
    }
    
    if (email === "" || !validateEmail(email)) {
        valid = false;
        errorMessage += "Por favor, ingresa un correo electrónico válido.\n";
    }

    if (razon === "") {
        valid = false;
        errorMessage += "Por favor, selecciona una razón para la consulta.\n";
    }

    if (mensaje === "") {
        valid = false;
        errorMessage += "Por favor, ingresa una descripción para tu consulta.\n";
    }

    // Mostrar los errores o enviar el formulario si todo está bien
    if (!valid) {
        alert(errorMessage); // Mostrar los errores en un popup
    } else {
        alert('Formulario enviado exitosamente');
        // Puedes permitir el envío del formulario después de la validación exitosa
        // Por ejemplo, con e.target.submit();
    }
});

// Función para validar el formato del email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
