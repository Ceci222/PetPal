# PetPal

**PetPal** es una aplicación web diseñada para ayudar a las personas a encontrar y adoptar mascotas. La aplicación ofrece una interfaz fácil de usar donde los usuarios pueden buscar y explorar diferentes tipos de mascotas disponibles para adopción a través de un API de búsqueda de mascotas. Además, los usuarios pueden agregar sus mascotas favoritas a una lista y contactarse para obtener más información.

## Características

- **Búsqueda de mascotas**: Los usuarios pueden buscar diferentes mascotas (como perros y gatos) usando filtros.
- **Lista de favoritos**: Los usuarios pueden marcar mascotas como favoritas para revisarlas más tarde.
- **Formulario de contacto**: Los usuarios pueden enviar un mensaje a través de un formulario para obtener más información sobre las mascotas.
- **Navegación fluida**: La aplicación incluye una navegación fluida entre diferentes secciones, como "Home", "Pet Finder", "Favorites" y "Contact".
- **Barra de búsqueda**: Los usuarios pueden buscar directamente mascotas disponibles usando una barra de búsqueda que actualiza los resultados de manera dinámica.

## Tecnologías

- **HTML5**: Estructura y contenido básico de la aplicación.
- **CSS3**: Estilo visual y diseño responsivo.
- **JavaScript**: Funcionalidad interactiva y dinámica en el cliente.
- **API externa de búsqueda de mascotas**: Usada para obtener información sobre mascotas disponibles para adopción.

## Requisitos

Antes de poner en marcha el proyecto, asegúrate de tener instalado:

- Un navegador web moderno (como Chrome, Firefox, etc.).
- Un editor de código (como VS Code, Sublime Text, etc.).
- Clonar y hacer pull del repositorio

## Acceder a la API de PetFinder

Para utilizar la API y mostrar las mascotas disponibles para adopción en el proyecto **PetPal**, primero debes obtener una clave de API de **PetFinder**. A continuación, te explico cómo hacerlo:

### 1. Registrarse en PetFinder

1. Ve al sitio web de [PetFinder](https://www.petfinder.com/developers/).
2. Regístrate para obtener una cuenta de desarrollador si aún no tienes una.
3. Una vez registrado, podrás generar una clave de API (API Key) desde el panel de control.

### 2. Obtener tu clave de API

- Después de iniciar sesión en tu cuenta de desarrollador, ve a la sección de "API Keys" y solicita una clave (Api key y secret)
- Importante: Asegúrate de guardar esta clave de API, ya que la necesitarás para autenticarte y hacer solicitudes a la API de PetFinder.

### 3. Integrar la API en el proyecto

En tu proyecto, necesitarás realizar peticiones a la API de PetFinder para obtener los datos de las mascotas. Aquí te dejo un ejemplo básico de cómo hacer una solicitud GET para obtener información de las mascotas:

```javascript
const apiKey = 'TU_API_KEY_AQUÍ'; 
const apiSecret = 'API_SECRET_AQUÍ'
const url = 'https://api.petfinder.com/v2/animals';
```


