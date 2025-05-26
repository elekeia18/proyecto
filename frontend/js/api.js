// Configuración base
const BASE_URL = "http://localhost:4000";
const API_ENDPOINTS = {
  clientes: `${BASE_URL}/clientes`,
  vehiculos: `${BASE_URL}/vehiculos`,
  plazas: `${BASE_URL}/plazas`,
  pisos: `${BASE_URL}/pisos`  // agregado
};

// Utilidad para manejar peticiones
async function handleRequest(url, method = 'GET', data = null) {
  const config = {
    method,
    headers: { 'Content-Type': 'application/json' },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, config);
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en la petición:', error);
    throw error;
  }
}

// Módulo Clientes
export const clienteAPI = {
  obtenerTodos: async () => handleRequest(`${API_ENDPOINTS.clientes}/all`),
  obtenerPorId: async (id) => handleRequest(`${API_ENDPOINTS.clientes}/${id}`),
  crear: async (data) => handleRequest(API_ENDPOINTS.clientes, 'POST', data),
  actualizar: async (id, data) => handleRequest(`${API_ENDPOINTS.clientes}/actualizar/${id}`, 'PUT', data),
  eliminar: async (id) => handleRequest(`${API_ENDPOINTS.clientes}/eliminar/${id}`, 'DELETE')
};

