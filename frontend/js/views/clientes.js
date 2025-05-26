import { clienteAPI } from '../api.js';

let clienteEditando = null;

export async function render() {
    const clientes = await clienteAPI.obtenerTodos();
    const content = document.getElementById('content');
    
    content.innerHTML = `
        <div class="form-container card p-4 mb-4">
            <h2>${clienteEditando ? 'Editar' : 'Nuevo'} Cliente</h2>
            <form id="cliente-form">
                <div class="form-group mb-3">
                    <label for="nombre">Nombre</label>
                    <input type="text" id="nombre" class="form-control" required>
                </div>
                <div class="form-group mb-3">
                    <label for="telefono">Teléfono</label>
                    <input type="text" id="telefono" class="form-control" required>
                </div>
                <div class="form-group mb-3">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control" required>
                </div>
                <div class="form-group mb-3">
                    <label for="direccion">Dirección</label>
                    <input type="text" id="direccion" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary me-2">
                    ${clienteEditando ? 'Actualizar' : 'Guardar'}
                </button>
                ${clienteEditando ? 
                    '<button type="button" id="cancelar-edicion" class="btn btn-danger">Cancelar</button>' : ''}
            </form>
        </div>

        <div class="card table-responsive">
            <h2 class="card-header">Clientes Registrados</h2>
            <div class="card-body">
                <table class="table table-hover align-middle">
                    <thead class="table-primary">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${clientes.map(cliente => `
                            <tr>
                                <td class="font-monospace">${cliente._id}</td>
                                <td>${cliente.nombre}</td>
                                <td>${cliente.telefono}</td>
                                <td><a href="mailto:${cliente.email}">${cliente.email}</a></td>
                                <td class="text-nowrap">
                                    <button class="btn btn-sm btn-outline-primary editar" data-id="${cliente._id}">
                                        <i class="bi bi-pencil"></i> Editar
                                    </button>
                                    <button class="btn btn-sm btn-outline-danger eliminar" data-id="${cliente._id}">
                                        <i class="bi bi-trash"></i> Eliminar
                                    </button>
                                </td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;

    if (clienteEditando) {
        document.getElementById('nombre').value = clienteEditando.nombre;
        document.getElementById('telefono').value = clienteEditando.telefono;
        document.getElementById('email').value = clienteEditando.email;
        document.getElementById('direccion').value = clienteEditando.direccion;
    }

    setupEventListeners();
}

function setupEventListeners() {
    // Formulario
    document.getElementById('cliente-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const clienteData = {
            nombre: document.getElementById('nombre').value,
            telefono: document.getElementById('telefono').value,
            email: document.getElementById('email').value,
            direccion: document.getElementById('direccion').value
        };
        
        let success = false;
        
        try {
            if (clienteEditando) {
                success = await clienteAPI.actualizar(clienteEditando._id, clienteData);
            } else {
                success = await clienteAPI.crear(clienteData);
            }
            
            if (success) {
                clienteEditando = null;
                await render();
            }
        } catch (error) {
            console.error('Error al guardar cliente:', error);
            alert('Ocurrió un error al guardar el cliente');
        }
    });
    
    // Cancelar edición
    const cancelBtn = document.getElementById('cancelar-edicion');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            clienteEditando = null;
            render();
        });
    }
    
    // Botones de editar
    document.querySelectorAll('.editar').forEach(btn => {
        btn.addEventListener('click', async () => {
            const id = btn.getAttribute('data-id');
            try {
                clienteEditando = await clienteAPI.obtenerPorId(id);
                render();
            } catch (error) {
                console.error('Error al obtener cliente:', error);
                alert('No se pudo cargar el cliente para editar');
            }
        });
    });
    
    // Botones de eliminar
    document.querySelectorAll('.eliminar').forEach(btn => {
        btn.addEventListener('click', async () => {
            const id = btn.getAttribute('data-id');
            if (confirm('¿Estás seguro de eliminar este cliente?')) {
                try {
                    const success = await clienteAPI.eliminar(id);
                    if (success) {
                        if (clienteEditando && clienteEditando._id == id) {
                            clienteEditando = null;
                        }
                        await render();
                    }
                } catch (error) {
                    console.error('Error al eliminar cliente:', error);
                    alert('No se pudo eliminar el cliente');
                }
            }
        });
    });
}
