const dropdownBtn = document.getElementById("dropdown-btn");
const dropdownMenu = document.getElementById("dropdown-menu");

// Función para alternar el menú
function toggleDropdown(event) {
    event.stopPropagation(); // Evita que el click se propague al documento
    const isOpen = dropdownMenu.style.display === "block";
    
    // Alternar visibilidad del menú
    dropdownMenu.style.display = isOpen ? "none" : "block";
    
    // Alternar clase para rotar la flecha
    dropdownBtn.classList.toggle("open", !isOpen);
}

dropdownBtn.addEventListener("click", toggleDropdown);

// Cerrar el dropdown al hacer click fuera de él
document.addEventListener("click", function(event) {
    if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = "none";
        dropdownBtn.classList.remove("open"); // Restablecer la flecha
    }
});

function filtrarCategoria(categoria) {
    console.log("Cargar productos de la categoría:", categoria);
    dropdownMenu.style.display = "none"; // Cierra el dropdown al seleccionar una categoría
    dropdownBtn.classList.remove("open"); // Restablecer la flecha
}

// Función que se ejecuta al cargar la página para mostrar todos los productos por defecto
document.addEventListener('DOMContentLoaded', function() {
    cargarProductos(); // Cargar todos los productos por defecto
});

function filtrarCategoria(categoria) {
    const contenedor = document.querySelector('.productos');
    contenedor.innerHTML = ''; // Limpiar el contenedor de productos

    // Si la categoría es "todos", mostramos todos los productos
    if (categoria.toLowerCase() === 'todos') {
        cargarProductos(); // Llamamos a cargar todos los productos
        return;
    }

    // Filtrar productos según la categoría seleccionada
    const productosFiltrados = productos.filter(producto => producto.categoria.toLowerCase() === categoria.toLowerCase());

    if (productosFiltrados.length === 0) {
        contenedor.innerHTML = '<p>No hay productos en esta categoría.</p>';
        return;
    }

    productosFiltrados.forEach((producto, index) => {
        const precioUSD = (producto.precioARS / tasaVentaUSD).toFixed(2);
        const precio = monedaActual === 'ARS' ? `$${producto.precioARS} ARS` : `$${precioUSD} USD`;

        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>Precio: <span class="precio">${precio}</span></p>
                <a href="${producto.ruta}" class="btn-ver-producto">${producto.boton}</a>
            </div>
        `;
        
        contenedor.innerHTML += productoHTML;

        // Para hacer un "clearfix" cada 5 productos (opcional, si usas un grid)
        if ((index + 1) % 5 === 0) {
            contenedor.innerHTML += '<div class="clearfix"></div>';
        }
    });
}

function cargarProductos() {
    const contenedor = document.querySelector('.productos');
    contenedor.innerHTML = ''; // Limpiar el contenedor de productos

    productos.forEach((producto, index) => {
        const precioUSD = (producto.precioARS / tasaVentaUSD).toFixed(2);
        const precio = monedaActual === 'ARS' ? `$${producto.precioARS} ARS` : `$${precioUSD} USD`;

        const productoHTML = `
            <div class="producto">
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p>Precio: <span class="precio">${precio}</span></p>
                <a href="${producto.ruta}" class="btn-ver-producto">${producto.boton}</a>
            </div>
        `;
        
        contenedor.innerHTML += productoHTML;

        if ((index + 1) % 5 === 0) {
            contenedor.innerHTML += '<div class="clearfix"></div>';
        }
    });
}