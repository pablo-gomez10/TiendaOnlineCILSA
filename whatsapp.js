// whatsapp.js

  document.addEventListener("DOMContentLoaded", function() {
    // se Obtiene el elemento del botón de WhatsApp
    var whatsappButton = document.querySelector(".whatsapp-button");
  
    // Este es evento de clic al botón
    whatsappButton.addEventListener("click", function() {
      // Obtener el número de teléfono y el texto del mensaje
      var phoneNumber = "5493571676981"; // Reemplaza con el número de teléfono deseado
      var messageText = "Hola, ¿cómo estás?"; // Reemplaza con el texto del mensaje deseado
  
      // Crear el enlace de WhatsApp con el número de teléfono y el texto del mensaje codificados
      var whatsappLink = "https://api.whatsapp.com/send?phone=" + phoneNumber + "&text=" + encodeURIComponent(messageText);
  
      // Abrir una nueva ventana o pestaña con el enlace de WhatsApp
      window.open(whatsappLink);
    });
  });