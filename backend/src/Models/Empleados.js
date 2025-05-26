import mongoose from 'mongoose';

const empleadoSchema =  mongoose.Schema(
  {
    nombre: { type: String, required: true, trim: true },
    cargo: { type: String, required: true, trim: true },
    usuario: { type: String, required: true, trim: true, unique: true },
    password_hash: { type: String, required: true, trim: true, unique: true },
    telefono: { type: String, required: true },
    fecha_ingreso: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Empleados = mongoose.model('Empleados', empleadoSchema);
export default Empleados;