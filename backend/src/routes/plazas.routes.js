import express from "express";
import {
  obtenerPlazas,
  obtenerPlazasLibres,
  obtenerPlazasOcupadas,
  crearPlaza,
  actualizarPlaza,
  eliminarPlaza,
  ocuparPlaza,
  liberarPlaza,
} from "../controllers/plazas.controllers.js";

const router = express.Router();

router.get("/all", obtenerPlazas);
router.get("/disponibles", obtenerPlazasLibres);
router.get("/ocupadas", obtenerPlazasOcupadas);
router.post("/", crearPlaza);
router.put("/actualizar/:id", actualizarPlaza);
router.put("/ocupar/:id", ocuparPlaza);
router.put("/liberar/:id", liberarPlaza);
router.delete("/eliminar/:id", eliminarPlaza);

export default router;
