import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js"


/*Creamos el Enrutador */
const router = Router();

/*Configuramos Respuesta metodo http get */
router.get("/", categoriaController.getcategorias); //crud read
router.post("/", categoriaController.postCategorias);//crud create
/*ruta que recibe un parametro*/
router.get("/:id", categoriaController.getcategory);// crud read 1 fila
/*ruta que recibe un parametro a borrar*/
router.delete("/:id", categoriaController.deletecategory);// crud delete 1 fila
/*ruta que recibe un parametro a modificar*/
router.put("/:id", categoriaController.updatecategory);// crud update 1 fila
/*Hacemos Disponible Al Router En Toda la aplicacion */


//Parcial Endpoints 
//router.get("/", categoriaController.getEmpleados); //crud read



export default router;