document.addEventListener("DOMContentLoaded", function () {
    // Función para alternar visibilidad de la contraseña
    document.querySelectorAll(".toggle-password").forEach(toggle => {
        toggle.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const passwordInput = document.getElementById(targetId);

            // Verificar si el evento está siendo disparado
            console.log(`Hiciste clic en el ícono de visibilidad para: ${targetId}`);

            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                this.textContent = "🙈"; // Cambia el icono a un ícono de ocultar
            } else {
                passwordInput.type = "password";
                this.textContent = "👁️"; // Cambia el icono a un ícono de mostrar
            }
        });
    });
});