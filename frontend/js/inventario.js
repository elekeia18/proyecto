import { obteinCategoiries } from "./../apiConnection/consumeApi.js"

document.addEventListener("DOMContentLoaded", () => {
    getCategories();
    
    })

async function getCategories(){
    const categoresObteined= await obteinCategoiries();
    const container = document.querySelector('tbody')
    categoresObteined.forEach((category) => {
       const {	CategoriaID,CategoriaNombre,Descripcion,Imagen} = category 
         const row = document.createElement('tr')
            row.innerHTML = `
            <td>${CategoriaID}
            </td>
            <td>${CategoriaNombre}
            </td>
            <td>${Descripcion}
            </td>
            <td>
            <img src="${Imagen}" width="100px" class="cuenta">
            </td>
            <td>
            <button class = "btn color2" >Detail</button>
            </td>
            <td>
            <button class = "btn color1" >Edit</button>
            </td>
            <td>
            <button class = "btn color3" >Delete</button>
            </td>
            `;
            container.appendChild(row)
    })
}