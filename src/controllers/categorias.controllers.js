import getConnection from "./../DB/database.js"

const getcategorias = async (req, res) => {

    try {
        const connection = await getConnection();

        const result = await connection.query("SELECT CategoriaID,CategoriaNombre,Descripcion,Imagen FROM categorias");

        res.json(result);

    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving categories" });
    }
    
}

export const methodHTTP = {
    getcategorias
}
