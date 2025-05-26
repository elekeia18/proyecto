import Clientes from '../Models/clientes.js';

const obtenerClientes = async (req, res) => {
  try {
    const clientes = await Clientes.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los clientes" });
  }
};

const obtenerClientePorId = async (req, res) => {
  try {
    const cliente = await Clientes.findById(req.params.id);
    if (!cliente) return res.status(404).json({ message: "No encontrado" });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el cliente" });
  }
};

const crearCliente = async (req, res) => {
  try {
    const nuevo = new Clientes(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ message: "Error al crear cliente" });
  }
};

const actualizarCliente = async (req, res) => {
  try {
    const actualizado = await Clientes.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar cliente" });
  }
};

const eliminarCliente = async (req, res) => {
  try {
    await Clientes.findByIdAndDelete(req.params.id);
    res.json({ message: "Cliente eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar cliente" });
  }
};

export {
  obtenerClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente
};
