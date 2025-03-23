function filtrarProductos() {
    const input = document.getElementById('buscador').value.toLowerCase();
    const productosDiv = document.querySelectorAll('.producto');

    productosDiv.forEach(function(productoDiv) {
        const nombreProducto = productoDiv.getAttribute('data-nombre').toLowerCase(); // Obtener el nombre del producto
        if (nombreProducto.includes(input)) {
            productoDiv.style.display = ''; // Mostrar el producto si coincide
        } else {
            productoDiv.style.display = 'none'; // Ocultar el producto si no coincide
        }
    });
}