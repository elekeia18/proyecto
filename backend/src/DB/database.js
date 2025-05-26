import mongoose from "mongoose";


const conectarDB = async () => {
    try {
        const connectionDB = await mongoose.connect(process.env.MONGODB_URI);
        const url = `CONECTADO A MONGO SERVER ${connectionDB.connection.host}-EN EL PUERTO:${connectionDB.connection.port}`;
        console.log(url);
        console.log("Base de datos conectada");
    } catch (error) {
        console.log("Error al conectar a la base de datos", error);
        process.exit(1); // Detener la aplicación
        
    }

}


export default conectarDB;
