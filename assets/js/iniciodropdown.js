document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.getElementById("dropdown-btn");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (!dropdownBtn || !dropdownMenu) {
        console.error("❌ Error: No se encontró el botón o menú del dropdown.");
        return;
    }

    // Función para alternar el menú
    function toggleDropdown(event) {
        event.stopPropagation();
        const isOpen = dropdownMenu.style.display === "block";
        dropdownMenu.style.display = isOpen ? "none" : "block";
        dropdownBtn.classList.toggle("open", !isOpen);
    }

    dropdownBtn.addEventListener("click", toggleDropdown);

    // Cerrar el dropdown si se hace clic fuera
    document.addEventListener("click", function (event) {
        if (!dropdownBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = "none";
            dropdownBtn.classList.remove("open");
        }
    });

    // Función para filtrar por categoría
    function filtrarCategoria(categoria) {
        dropdownMenu.style.display = "none";
        dropdownBtn.classList.remove("open");

        // Llamar a la función de filtrado de productos en `inicio.js`
        if (typeof cargarProductosPorCategoria === "function") {
            cargarProductosPorCategoria(categoria);
        }
    }

    // Asignar eventos a las opciones del dropdown
    document.querySelectorAll("#dropdown-menu a").forEach(link => {
        link.addEventListener("click", function () {
            filtrarCategoria(this.getAttribute("onclick").match(/\('(.+)'\)/)[1]);
        });
    });
});