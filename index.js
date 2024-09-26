document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('imagenes'); // Selecciona el div con id 'imagenes'

  // Llamada a la API de fotos
  fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then((photos) => {
          // Itera sobre las primeras 20 fotos, por ejemplo
          photos.slice(0, 20).forEach(photo => {
              // Crea un div para cada foto
              const element = document.createElement('div');
              element.classList.add('photos'); // Asegúrate de que sea 'photos' para que se aplique el CSS

              // Crea una imagen (thumbnail)
              const thumbnail = document.createElement('img');
              thumbnail.src = photo.thumbnailUrl; // Asigna la URL de la miniatura
              thumbnail.alt = photo.title; // Alternativa para accesibilidad

              // Crea un enlace que lleva a la URL completa de la foto
              const link = document.createElement('a');
              link.href = photo.url; // Asigna la URL completa de la foto
              link.target = '_blank'; // Abre en una nueva pestaña
              link.appendChild(thumbnail); // Añade la miniatura al enlace

              // Crea un título (h3) para el título de la foto
              const title = document.createElement('h3');
              title.textContent = photo.title; // Asigna el título de la foto

              // Añade el enlace y el título al div
              element.appendChild(link);
              element.appendChild(title);

              // Añade el div al contenedor principal
              container.appendChild(element);
          });
      })
      .catch((error) => console.log(error)); // Manejo de errores
});
