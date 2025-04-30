import { Router } from "express";
import { methodHTTP3 as clienteController } from "../controllers/clientes.controllers.js"

const router = Router();

//Parcial Endpoints 
router.post("/", clienteController.postClientes); //crud create


export default router;