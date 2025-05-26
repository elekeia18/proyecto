
import express from "express";
import {
  obtenerClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente,
} from "../controllers/clientes.controllers.js";

const router = express.Router();

router.get("/all", obtenerClientes);
router.get("/:id", obtenerClientePorId);
router.post("/", crearCliente);
router.put("/actualizar/:id", actualizarCliente);
router.delete("/eliminar/:id", eliminarCliente);

export default router;
