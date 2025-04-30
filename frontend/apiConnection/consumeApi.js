const url = "http://localhost:5000/api/categorias"

export const obteinCategoiries = async () => {
    try {
        const resultado = await fetch(url);//then
        const categorias = await resultado.json();//then
        return categorias;
    } catch (error) {
        console.error("Error fetching categories:", error);
        
    }
}