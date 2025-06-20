document.addEventListener("DOMContentLoaded", () => {
    // Botón de compra - abre el modal
    const btnCompra = document.getElementById("btn-compra");
    const modal = document.getElementById("modal-compra");
    const cerrar = document.getElementById("cerrar-modal");
    const formCompra = document.getElementById("form-compra");

    if (btnCompra) {
        btnCompra.addEventListener("click", (e) => {
            e.preventDefault();
            modal.style.display = "flex";
        });
    }

    // Cierra el modal
    if (cerrar) {
        cerrar.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    // Simula el envío del formulario
    if (formCompra) {
        formCompra.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("nombre").value;
            const auto = document.getElementById("auto").value;
            alert(`¡Gracias, ${nombre}! Tu compra del ${auto} ha sido registrada.`);
            modal.style.display = "none";
        });
    }


    // Función de botones "Más información"
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
            const extraInfo = button.nextElementSibling;
            if (extraInfo && extraInfo.classList.contains("info-extra")) {
                const visible = extraInfo.style.display === 'block';
                extraInfo.style.display = visible ? 'none' : 'block';
                button.textContent = visible ? 'Más información' : 'Ocultar información';
            }
        });
    });
});
