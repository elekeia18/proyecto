import Plazas from '../Models/Plazas.js';

const obtenerPlazas = async (req, res) => {
  try {
    const plazas = await Plazas.find();
    res.json(plazas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener plazas" });
  }
};

const obtenerPlazasLibres = async (req, res) => {
  try {
    const libres = await Plazas.find({ estado: "libre" });
    res.json(libres);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener plazas libres" });
  }
};

const obtenerPlazasOcupadas = async (req, res) => {
  try {
    const ocupadas = await Plazas.find({ estado: "ocupada" });
    res.json(ocupadas);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener plazas ocupadas" });
  }
};

const crearPlaza = async (req, res) => {
  try {
    const nueva = new Plazas(req.body);
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (error) {
    res.status(400).json({ message: "Error al crear plaza" });
  }
};

const actualizarPlaza = async (req, res) => {
  try {
    const actualizada = await Plazas.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizada);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar plaza" });
  }
};

const ocuparPlaza = async (req, res) => {
  try {
    const plaza = await Plazas.findByIdAndUpdate(req.params.id, { estado: "ocupada" }, { new: true });
    res.json(plaza);
  } catch (error) {
    res.status(500).json({ message: "Error al ocupar plaza" });
  }
};

const liberarPlaza = async (req, res) => {
  try {
    const plaza = await Plazas.findByIdAndUpdate(req.params.id, { estado: "libre" }, { new: true });
    res.json(plaza);
  } catch (error) {
    res.status(500).json({ message: "Error al liberar plaza" });
  }
};

const eliminarPlaza = async (req, res) => {
  try {
    await Plazas.findByIdAndDelete(req.params.id);
    res.json({ message: "Plaza eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar plaza" });
  }
};

export {
  obtenerPlazas,
  obtenerPlazasLibres,
  obtenerPlazasOcupadas,
  crearPlaza,
  actualizarPlaza,
  ocuparPlaza,
  liberarPlaza,
  eliminarPlaza
};
