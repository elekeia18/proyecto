
import express from "express";
import {
  obtenerEmpleados,
  crearEmpleado,
  actualizarEmpleado,
  eliminarEmpleado,
} from "../controllers/empleados.controllers.js";

const router = express.Router();

router.get("/all", obtenerEmpleados);
router.post("/", crearEmpleado);
router.put("/actualizar/:id", actualizarEmpleado);
router.delete("/eliminar/:id", eliminarEmpleado);

export default router;
