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

// Función para inicializar el dropdown
function inicializarDropdown() {
    const contenedor = document.getElementById('productos');

    const dropdownBtns = contenedor.querySelectorAll('.droptmn-btn');
    dropdownBtns.forEach((btn) => {
        // Al hacer clic en el botón, mostrar u ocultar el dropdown
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evitar que el clic cierre el dropdown
            const menu = btn.nextElementSibling; // Seleccionamos el <ul> de opciones
            menu.classList.toggle('droptmn-show'); // Alternamos el 'display'
        });
    });

    // Cerrar el dropdown si se hace clic fuera del dropdown
    document.addEventListener('click', (e) => {
        const dropdowns = contenedor.querySelectorAll('.droptmn');
        dropdowns.forEach((dropdown) => {
            const menu = dropdown.querySelector('.droptmn-menu');
            const btn = dropdown.querySelector('.droptmn-btn');
            // Si el clic no es dentro del dropdown, cerramos el menú
            if (!dropdown.contains(e.target)) {
                menu.classList.remove('droptmn-show');
            }
        });
    });

    // Cerrar el dropdown cuando se selecciona un tamaño
    const menuItems = contenedor.querySelectorAll('.droptmn-menu li');
    menuItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            const selectedSize = e.target.textContent; // Obtener el texto del tamaño seleccionado
            const menu = e.target.closest('.droptmn-menu');
            const button = menu.previousElementSibling; // Obtener el botón del dropdown
            
            // Actualizar el texto del botón con el tamaño seleccionado
            button.textContent = `${selectedSize}`;
            
            menu.classList.remove('droptmn-show'); // Cerrar el menú después de la selección
        });
    });
}