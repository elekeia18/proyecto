
import app from "./app.js";

const PORT = process.env.PORT

const main = () => {
    app.listen(PORT);
    console.log(`el servidor esta corriendo en el puerto ${PORT}`);
    

    
}

main();