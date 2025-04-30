import getConnection from "./../DB/database.js"

//Parcial Endpoints

const getEmpleados = async (req, res) => {
    try {
        const connection = await getConnection();

        const result = await connection.query("SELECT * FROM empleados");

        res.json(result);
    } 
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error retrieving employees" });
    }
}

export const methodHTTP2 = {
    getEmpleados,
};
