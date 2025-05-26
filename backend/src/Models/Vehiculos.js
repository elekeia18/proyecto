import mongoose from 'mongoose';

const vehiculoSchema = new mongoose.Schema(
  {
    placa: { type: String, required: true, unique: true },
    marca: { type: String, required: true },
    modelo: { type: String, required: true },
    color: { type: String, required: true },
    id_cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Clientes' },
    fecha_registro: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Vehiculos = mongoose.model('Vehiculos', vehiculoSchema);
export default Vehiculos;
