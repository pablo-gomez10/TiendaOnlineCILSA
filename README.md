* Descripción del Proyecto
Desarrollar un sitio web responsivo para una tienda online que permita a los usuarios explorar los productos desde diferentes dispositivos, como computadoras de escritorio, tablets y celulares (3 resoluciones).
 
* Requerimientos Funcionales
Página principal que muestra los productos destacados y las promociones actuales de la tienda.
Páginas de categorías que permiten a los usuarios explorar productos por categorías específicas (definan mínimo 2 categorías).
Página de detalles del producto que muestra información detallada sobre un producto seleccionado (pueden trabajar con un mínimo de 3 productos por categoría).

* Requerimientos No Funcionales
Las imágenes deben tener texto alternativo (Accesibilidad)
Diseño responsivo utilizando Bootstrap para garantizar una experiencia de usuario consistente en diferentes dispositivos y tamaños de pantalla.


Tomamos como base el proyecto, que vende cursos y la adaptamos a la consigna
categorizar los cursos y sus respectiva información de cada curso:
   Ofimática: excel para económicas, Análisis de Datos en Power bi, 
   Programación: rpa automatización con bots, programación en r, automatizacion excel con python, Power Apps 
   Idiomas: Inglés básico para economicas, portugues para economicas
   Análisis de Datos: data science, Python para Data, SQL
   Gestión de proyectos: power apps para gestión de negocios, digital proyect manager y scrum

En el index como se muestra esta la pag principal de los cursos con sus dos cursos de promocion
En la parte de navegacion se encuentra su contenido de inicio, los cursos agrupados por categoria, quienes somos y el contacto y un acceso directo de busqueda de curso

En el index lo que se hizo fue: 

1- Descripción Detallada del Código
    Head
    En la sección <head>, tenemos las siguientes características importantes:
    
    Se establece el encoding del documento como UTF-8 y se define una metaetiqueta para hacer la página responsiva (<meta name="viewport" content="width=device-width, initial-scale=1.0">).
    Se cargan varias hojas de estilo:
    Bootstrap v5.3.3: Para darle a la página un diseño moderno y responsivo.
    Font Awesome: Para incluir íconos en botones o secciones de la página.
    Hojas de estilo personalizadas (mobile.css, tablet.css, desktop.css): Estas hojas de estilo permiten adaptar el diseño a diferentes tamaños de pantalla.

    Header
    El <header> contiene el logotipo del sitio web que se muestra en la parte superior de la página.

    Navbar (Barra de Navegación)
    La barra de navegación está configurada con Bootstrap, haciéndola responsive. Tiene opciones como "Inicio", un menú desplegable de Cursos con subcategorías (Ofimática, Programación, Idiomas, Análisis de Datos, Gestión de Proyectos), además     de enlaces a "Acerca de Nosotros" y "Contacto".
    
    Hay un formulario de búsqueda al final, que permite a los usuarios buscar cursos o contenido en el sitio.
    
    Sección Principal
    En el <body>, hay un bloque principal que presenta el sitio como una "comunidad de aprendizaje en línea". También incluye un botón para redirigir a la página de contacto.

    Cursos en Promoción
    Se muestran dos tarjetas (cards) promocionando dos cursos: "Excel para Económicas" y "Data Science". Cada tarjeta incluye una imagen, una breve descripción del curso, y un botón para ver más detalles.

    Footer (Pie de Página)
    En el pie de página se invita a los usuarios a seguir las redes sociales del sitio, con iconos para Facebook, Twitter, YouTube y LinkedIn, estilizados mediante Font Awesome.

    WhatsApp Button
    Incluye un enlace a WhatsApp con una imagen flotante que permite a los usuarios contactarse directamente.

    Bootstrap Scripts
    Al final del cuerpo se carga el script de Bootstrap para manejar el comportamiento interactivo de los componentes, como el menú desplegable.


El acerca de nosotros se explica en:

    Encabezado y Logotipo: El encabezado muestra un logotipo de la empresa y tiene un menú de navegación que permite moverse entre secciones como "Inicio", "Acerca de Nosotros", y "Contacto".
    
    Menú de Navegación: El menú es responsive y está construido con Bootstrap, lo que lo hace adaptable a diferentes tamaños de pantalla. Incluye opciones para buscar cursos y diferentes categorías de cursos que podrían estar comentados o por      implementar en una versión futura.
    
    Presentación del Equipo: La sección más importante es la del equipo docente, donde se presentan cuatro miembros del equipo, incluyendo nombre junto con una breve descripción de tus credenciales.
    
    Redes Sociales y WhatsApp: El pie de página invita a los usuarios a seguir a la academia en varias redes sociales y cuenta con un botón flotante para contacto rápido vía WhatsApp.

En la etapa de los Cursos se comenta en general: 
    
     El curso Digital Manager y Scrum 2024 de la Academia CILSA es una excelente oportunidad para cualquier persona que quiera adentrarse en el mundo del marketing digital y la gestión de proyectos. Ofrece una formación sólida y actualizada,        avalada por una certificación profesional y el respaldo de importantes empresas del mercado.

    La combinación de teoría y práctica hace que este curso sea accesible para principiantes y útil para profesionales que desean perfeccionar sus habilidades. Además, el formato asincrónico permite a los estudiantes aprender a su propio ritmo      y tener acceso a las actualizaciones de por vida.

Y como el curso de digital manager se maneja en los demas curso.



