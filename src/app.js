import express from "express";
import CategoriasRoutes from "./routes/categorias.routes.js";

/*asignamos a app todas las fumciones de express*/
const app = express();

/* seteamos un puerto a mi web server*/
app.set("port",3000)

/*Routes*/
app.use("/api/categorias/",CategoriasRoutes)

/* hacemos disponible a toda mi app*/
export default app;