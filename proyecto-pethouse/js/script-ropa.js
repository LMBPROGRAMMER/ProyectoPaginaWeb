

// Hacer una petición a la API
fetch('https://fakestoreapi.com/products')
    .then(response => response.json()) // Convertir la respuesta a JSON
    .then(data => {
        // Acceder a la lista de productos en la respuesta
        const products = data;

        // Seleccionar el contenedor donde se mostrarán las imágenes
        const imageContainer = document.querySelector('#image-container');

        // Iterar sobre cada producto y crear un elemento HTML para mostrar su imagen
        products.forEach(product => {
            // Crear un elemento de tarjeta
            const card = document.createElement('div');
            card.classList.add('card');

            // Crear un elemento de imagen
            const img = document.createElement('img');

            // Asignar la URL de la imagen al atributo src
            img.src = product.image;

            // Asignar el texto alternativo de la imagen al atributo alt
            img.alt = product.title;

            // Crear un elemento de título
            const title = document.createElement('h3');
            title.textContent = product.title;

            // Crear un elemento de descripción
            const description = document.createElement('p');
            description.textContent = product.description;

            // Agregar la imagen, el título y la descripción a la tarjeta
            card.appendChild(img);
            card.appendChild(title);
            card.appendChild(description);

            // Agregar la tarjeta al contenedor
            imageContainer.appendChild(card);
        });
    })
    .catch(error => {
        // Mostrar un mensaje de error si la petición falla
        console.error('Error al obtener los productos:', error);
    });
