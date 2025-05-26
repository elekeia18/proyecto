import mongoose from 'mongoose';

const plazaSchema =  mongoose.Schema(
  {
    numero: { type: String, required: true, unique: true },
    id_piso: { type: mongoose.Schema.Types.ObjectId, ref: 'Pisos', required: true },
    tipo: { type: String, enum: ['auto', 'moto', 'camion'], required: true },
    estado: { type: String, enum: ['libre', 'ocupada'], default: 'libre' },
  },
  { timestamps: true }
);

const Plazas = mongoose.model('Plazas', plazaSchema);
export default Plazas;
