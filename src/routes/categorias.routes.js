import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js"


/*Creamos el Enrutador */
const router = Router();

/*Configuramos Respuesta metodo http get */
router.get("/", categoriaController.getcategorias);

/*Hacemos Disponible Al Router En Toda la aplicacion */
export default router;