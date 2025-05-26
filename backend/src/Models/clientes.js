import mongoose, { Schema, SchemaTypes } from "mongoose";

const clientesSchema = mongoose.Schema

(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    telefono: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: false,
    },
    direccion: {
      type: String,
      required: true,
    },
    fecha_registro: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Crea createdAt y updatedAt automáticamente
  }
);

const Clientes = mongoose.model('Clientes', clientesSchema);

export default Clientes;
