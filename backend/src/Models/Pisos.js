import mongoose from 'mongoose';

const pisoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String },
  },
  { timestamps: true }
);

const Pisos = mongoose.model('Pisos', pisoSchema);
export default Pisos;
