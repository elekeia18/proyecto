import express from "express";
import {
  obtenerEstacionamientos,
  registrarEntrada,
  registrarSalida,
} from "../controllers/estacionamientos.controllers.js";

const router = express.Router();

router.get("/all", obtenerEstacionamientos);
router.post("/entrada", registrarEntrada);
router.put("/salida/:id", registrarSalida);

export default router;
