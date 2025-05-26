// js/ui-clientes.js
export function renderClientesTabla(clientes) {
  // Ordenar por ID descendente (más nuevo arriba)
  const clientesOrdenados = [...clientes].sort((a, b) => b.id_cliente - a.id_cliente);

  const html = `
    <section class="clientes-section">
      <h2>Lista de Clientes</h2>
      <input type="search" id="buscador" class="buscador" placeholder="Buscar clientes por nombre...">
      
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Dirección</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody id="tabla-cuerpo">
            ${clientesOrdenados.map(cliente => `
              <tr>
                <td>${cliente.id_cliente}</td>
                <td>${cliente.nombre}</td>
                <td>${cliente.telefono}</td>
                <td>${cliente.email}</td>
                <td>${cliente.direccion}</td>
                <td>
                  <button data-id="${cliente.id_cliente}" class="action-btn editar" title="Editar">✏️</button>
                  <button data-id="${cliente.id_cliente}" class="action-btn eliminar" title="Eliminar">🗑️</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;

  document.getElementById("content").innerHTML = html;

  const buscador = document.getElementById('buscador');
  buscador.addEventListener('input', (e) => {
    const texto = e.target.value.toLowerCase();
    const filas = document.querySelectorAll('#tabla-cuerpo tr');
    filas.forEach(fila => {
      const nombre = fila.children[1].textContent.toLowerCase();
      fila.style.display = nombre.includes(texto) ? '' : 'none';
    });
  });
}
