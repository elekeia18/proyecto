import { Router } from "express";
import { methodHTTP2 as empleadoController } from "../controllers/empleadocontrollers.js"

const router = Router();

//Parcial Endpoints 
router.get("/", empleadoController.getEmpleados); //crud read

export default router;