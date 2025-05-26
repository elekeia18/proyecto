import Vehiculos from '../Models/Vehiculos.js';

const obtenerVehiculos = async (req, res) => {
  try {
    const vehiculos = await Vehiculos.find();
    res.json(vehiculos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener vehículos" });
  }
};

const obtenerVehiculosPorCliente = async (req, res) => {
  try {
    const vehiculos = await Vehiculos.find({ id_cliente: req.params.idCliente });
    res.json(vehiculos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener vehículos por cliente" });
  }
};

const crearVehiculo = async (req, res) => {
  try {
    const nuevo = new Vehiculos(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ message: "Error al crear vehículo" });
  }
};

const actualizarVehiculo = async (req, res) => {
  try {
    const actualizado = await Vehiculos.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar vehículo" });
  }
};

const eliminarVehiculo = async (req, res) => {
  try {
    await Vehiculos.findByIdAndDelete(req.params.id);
    res.json({ message: "Vehículo eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar vehículo" });
  }
};

export {
  obtenerVehiculos,
  obtenerVehiculosPorCliente,
  crearVehiculo,
  actualizarVehiculo,
  eliminarVehiculo
};
