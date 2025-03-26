// Función para inicializar los dropdowns de medidas
function inicializarDropdown() {
    document.querySelectorAll('.droptmn').forEach(dropdown => {
        const btn = dropdown.querySelector('.textomed');
        const menu = dropdown.querySelector('.droptmn-menu');

        if (!btn || !menu) return;

        // Toggle del menú al hacer clic en el botón
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita que el clic cierre el menú inmediatamente
            menu.classList.toggle('droptmn-show');
        });

        // Cerrar el menú si se hace clic fuera de él
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                menu.classList.remove('droptmn-show');
            }
        });

        // Cerrar con tecla ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                menu.classList.remove('droptmn-show');
            }
        });

        // Seleccionar medida y cerrar menú
        menu.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', () => {
                btn.textContent = item.textContent; // Actualizar el texto del botón
                menu.classList.remove('droptmn-show'); // Cerrar menú
            });
        });
    });
}

// Ejecutar la inicialización después de cargar productos
document.addEventListener('DOMContentLoaded', () => {
    inicializarDropdown();
});