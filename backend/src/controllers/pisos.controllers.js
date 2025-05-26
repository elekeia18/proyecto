import Pisos from '../Models/Pisos.js';

const obtenerPisos = async (req, res) => {
  try {
    const pisos = await Pisos.find();
    res.json(pisos);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener pisos" });
  }
};

const crearPiso = async (req, res) => {
  try {
    const nuevo = new Pisos(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ message: "Error al crear piso" });
  }
};

const actualizarPiso = async (req, res) => {
  try {
    const actualizado = await Pisos.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar piso" });
  }
};

const eliminarPiso = async (req, res) => {
  try {
    await Pisos.findByIdAndDelete(req.params.id);
    res.json({ message: "Piso eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar piso" });
  }
};

export { obtenerPisos, crearPiso, actualizarPiso, eliminarPiso };
