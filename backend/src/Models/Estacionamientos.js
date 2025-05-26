import mongoose from 'mongoose';

const estacionamientoSchema = new mongoose.Schema(
  {
    placa_vehiculo: { type: String, required: true },
    hora_entrada: { type: Date, required: true },
    hora_salida: { type: Date },
    id_empleado_entrada: { type: mongoose.Schema.Types.ObjectId, ref: 'Empleados', required: true },
    id_empleado_salida: { type: mongoose.Schema.Types.ObjectId, ref: 'Empleados' },
  },
  { timestamps: true }
);

const Estacionamientos = mongoose.model('Estacionamientos', estacionamientoSchema);
export default Estacionamientos;
