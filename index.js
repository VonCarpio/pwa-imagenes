document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('imagenes'); // Para selecciona el div con id 'imagenes'
  
    // Llamada a la API de fotos
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then((photos) => {
            // Iteración sobre las primeras 20 fotos
            photos.slice(0, 20).forEach(photo => {
                // Se crea un div para cada foto
                const element = document.createElement('div');
                element.classList.add('photos'); // Asegúrate de que sea 'photos' para que se aplique el CSS
  
                // Se crea una imagen (thumbnail)
                const thumbnail = document.createElement('img');
                thumbnail.src = photo.thumbnailUrl; // asignacion de la url
                thumbnail.alt = photo.title; // alternativa para accesibilidad
  
                // Creacion de un enlace que lleva a la URL completa de la foto
                const link = document.createElement('a');
                link.href = photo.url; // Asignacion de la URL completa de la foto
                link.target = '_blank'; // Se abre en una nueva pestaña
                link.appendChild(thumbnail); // Añade la miniatura al enlace
  
                // Creacion de un título (h3) para el título de la foto
                const title = document.createElement('h3');
                title.textContent = photo.title; // Asignacion del título de la foto
  
                // Añadir enlace y el título al div
                element.appendChild(link);
                element.appendChild(title);
  
                // Añadir el div al contenedor principal
                container.appendChild(element);

            // Cachear la imagen en el service worker
        caches.open('v1').then(cache => {
            cache.add(photo.thumbnailUrl); // Cachea la miniatura
          });
        });
      })
      .catch((error) => console.log(error));
  });
