import Estacionamientos from '../Models/Estacionamientos.js';

const obtenerEstacionamientos = async (req, res) => {
  try {
    const data = await Estacionamientos.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener estacionamientos" });
  }
};

const registrarEntrada = async (req, res) => {
  try {
    const nuevo = new Estacionamientos(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ message: "Error al registrar entrada" });
  }
};

const registrarSalida = async (req, res) => {
  try {
    const actualizado = await Estacionamientos.findByIdAndUpdate(
      req.params.id,
      { hora_salida: new Date() },
      { new: true }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(500).json({ message: "Error al registrar salida" });
  }
};

export { obtenerEstacionamientos, registrarEntrada, registrarSalida };
