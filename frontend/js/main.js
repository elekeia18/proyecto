document.addEventListener('DOMContentLoaded', () => {
    loadSection('clientes'); // carga clientes por defecto
    
    document.querySelectorAll('#nav-menu button').forEach(btn => {
        btn.addEventListener('click', () => {
            const section = btn.getAttribute('data-section');
            loadSection(section);
        });
    });
});

async function loadSection(section) {
    try {
        const content = document.getElementById('content');
        content.className = 'container';  // Mantener container y limpiar clases
        content.classList.add(`${section}-section`);  // añadir clase por sección
        
        const module = await import(`./views/${section}.js`);
        await module.render();
    } catch (error) {
        console.error(`Error al cargar la sección ${section}:`, error);
        document.getElementById('content').innerHTML = `
            <div class="error-message">
                <h2>Error 404</h2>
                <p>Módulo no encontrado: ${section}</p>
            </div>
        `;
    }
}
