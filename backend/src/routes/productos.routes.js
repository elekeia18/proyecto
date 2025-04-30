import { Router } from "express";
import { methodHTTP4 as productoController } from "../controllers/productos.controlles.js"

const router = Router();

router.put("/:id", productoController.updateProducto); //crud update

export default router;
