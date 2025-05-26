import express from "express";
import {
  obtenerPisos,
  crearPiso,
  actualizarPiso,
  eliminarPiso,
} from "../controllers/pisos.controllers.js";

const router = express.Router();

router.get("/all", obtenerPisos);
router.post("/", crearPiso);
router.put("/actualizar/:id", actualizarPiso);
router.delete("/eliminar/:id", eliminarPiso);

export default router;
