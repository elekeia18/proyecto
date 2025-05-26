
import express from "express";
import {
  obtenerVehiculos,
  obtenerVehiculosPorCliente,
  crearVehiculo,
  actualizarVehiculo,
  eliminarVehiculo,
} from "../controllers/vehiculos.controllers.js";

const router = express.Router();

router.get("/all", obtenerVehiculos);
router.get("/cliente/:idCliente", obtenerVehiculosPorCliente);
router.post("/", crearVehiculo);
router.put("/actualizar/:id", actualizarVehiculo);
router.delete("/eliminar/:id", eliminarVehiculo);

export default router;
