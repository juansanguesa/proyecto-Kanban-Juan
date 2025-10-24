// Muestra la fecha actual en el footer
document.addEventListener("DOMContentLoaded", () => {
    const fecha = new Date().toLocaleDateString('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById("fecha").textContent = `Hoy es ${fecha}`;
    console.log("Página cargada correctamente ✅");
});
