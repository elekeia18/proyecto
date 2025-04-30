import getConnection from "./../DB/database.js"

const getcategorias = async (req, res) => {
    try {
        const connection = await getConnection();

        const result = await connection.query(
            `SELECT 
                id_estacionamiento, 
                placa_vehiculo, 
                hora_entrada, 
                hora_salida, 
                id_empleado_entrada, 
                id_empleado_salida 
             FROM estacionamientos`
        );

        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving estacionamientos" });
    }
};

const postCategorias = async (req, res) => {
    try {
        const { placa_vehiculo, hora_entrada, id_empleado_entrada, hora_salida, id_empleado_salida } = req.body;

        const estacionamiento = {
            placa_vehiculo,
            hora_entrada,
            id_empleado_entrada,
            hora_salida,
            id_empleado_salida
        };

        const connection = await getConnection();
        const result = await connection.query("INSERT INTO estacionamientos SET ?", [estacionamiento]);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error inserting estacionamiento" });
    }
};

const getcategory = async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query(
            `SELECT 
                id_estacionamiento, 
                placa_vehiculo, 
                hora_entrada, 
                hora_salida, 
                id_empleado_entrada, 
                id_empleado_salida 
             FROM estacionamientos 
             WHERE id_estacionamiento = ?`, 
            [id]
        );
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving estacionamiento" });
    }
};

const deletecategory = async (req, res) => {
    try {
        console.log("Id a borrar", req.params);
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM estacionamientos WHERE id_estacionamiento = ?", id);
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error deleting estacionamiento" });
    }
};

const updatecategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { placa_vehiculo, hora_entrada, id_empleado_entrada, hora_salida, id_empleado_salida } = req.body;

        const estacionamiento = {
            placa_vehiculo,
            hora_entrada,
            id_empleado_entrada,
            hora_salida,
            id_empleado_salida
        };

        const connection = await getConnection();
        const result = await connection.query("UPDATE estacionamientos SET ? WHERE id_estacionamiento = ?", [estacionamiento, id]);
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Error updating estacionamiento" });
    }
};

export const methodHTTP = {
    getcategorias,
    postCategorias,
    getcategory,
    deletecategory,
    updatecategory,
};
