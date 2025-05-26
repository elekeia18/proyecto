import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import conectarDB from "./DB/database.js";

// Importación de rutas
import ClientesRoutes from "./routes/clientes.routes.js";
import EmpleadosRoutes from "./routes/empleados.routes.js";
import EstacionamientosRoutes from "./routes/estacionamientos.routes.js";
import VehiculosRoutes from "./routes/vehiculos.routes.js";
import PisosRoutes from "./routes/pisos.routes.js";
import PlazasRoutes from "./routes/plazas.routes.js";

// Configuración de variables de entorno y conexión a MongoDB
dotenv.config();
conectarDB();

// Crear instancia de Express
const app = express();

// Middlewares globales
app.use(express.json());  // para recibir JSON
app.use(cors());          // habilita CORS para peticiones cross-origin

// Rutas principales del backend
app.use("/clientes", ClientesRoutes);
app.use("/empleados", EmpleadosRoutes);
app.use("/estacionamientos", EstacionamientosRoutes);
app.use("/vehiculos", VehiculosRoutes);
app.use("/pisos", PisosRoutes);
app.use("/plazas", PlazasRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("API funcionando correctamente 🚀");
});

// Exportar app
export default app;
