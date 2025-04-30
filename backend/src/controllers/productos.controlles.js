import getConnection from "./../DB/database.js"

const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { placa, tipo_vehiculo } = req.body;

        const vehiculo = {
            placa,
            tipo_vehiculo
        };

        const connection = await getConnection();
        const result = await connection.query("UPDATE vehiculos SET ? WHERE id_vehiculo = ?", [vehiculo, id]);

        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error updating vehicle" });
    }
};

export const methodHTTP4 = {
    updateProducto,
};
