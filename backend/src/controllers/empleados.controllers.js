import Empleados from '../Models/Empleados.js';

const obtenerEmpleados = async (req, res) => {
  try {
    const empleados = await Empleados.find();
    res.json(empleados);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener empleados" });
  }
};

const crearEmpleado = async (req, res) => {
  try {
    const nuevo = new Empleados(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ message: "Error al crear empleado" });
  }
};

const actualizarEmpleado = async (req, res) => {
  try {
    const actualizado = await Empleados.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar empleado" });
  }
};

const eliminarEmpleado = async (req, res) => {
  try {
    await Empleados.findByIdAndDelete(req.params.id);
    res.json({ message: "Empleado eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar empleado" });
  }
};

export {
  obtenerEmpleados,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado
};
