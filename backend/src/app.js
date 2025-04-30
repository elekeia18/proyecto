import express from "express";
import cors from "cors"
import CategoriasRoutes from "./routes/categorias.routes.js";
import CategoriasEmpleados from "./routes/empleados.routes.js";
import CategoriasClientes from "./routes/clientes.routes.js";
import CategoriasProductos from "./routes/productos.routes.js";

/*asignamos a app todas las fumciones de express*/
const app = express();

/* seteamos un puerto a mi web server*/
app.set("port",5000)

app.use(express.json());
app.use(cors());

/*Routes*/
app.use("/api/categorias/",CategoriasRoutes)
app.use("/api/empleados/",CategoriasEmpleados)
app.use("/api/clientes/",CategoriasClientes)
app.use("/api/productos/",CategoriasProductos)

/* hacemos disponible a toda mi app*/
export default app;