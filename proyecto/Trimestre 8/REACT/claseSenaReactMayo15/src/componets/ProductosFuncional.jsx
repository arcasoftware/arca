import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardProducto from "./common/CardProducto";


 function  useDatos () {
  const [todoDatos, setTodoDatos] = useState([]);

  useEffect(() => {
    fetch("json/productos.json")
      .then(response => response.json())
      .then(response => {
        console.log ( " response "  + JSON.stringify(response.productos))
        setTodoDatos(response.productos)
      })
  }, [])

  return todoDatos
}



function Productos() {
 
  // const [products, setProducts] = useState([]); 
  let menuCategoria;

  const existeCategoria = (arreglo, id) => {
    let existe = false
    arreglo.forEach((item) => {
      if (item.idCategoria === id) 
         existe = true
          return existe;
    });
    return existe
  }

  let  products = []


  const datos  = useDatos()
    
    if (datos.length > 0) {
      products = datos
      console.log ( " products "  + JSON.stringify(datos))
    }
 


  useEffect(() => {
    menuCategoria = [];
    products.forEach((item) => {
     console.log(item.nombreCategoria + "  " + existeCategoria(menuCategoria, item.idCategoria));

     if (!existeCategoria(menuCategoria, item.idCategoria)) {
        let objeto= {
          idCategoria:item.idCategoria,
          nombreCategoria:item.nombreCategoria
        }
        menuCategoria.push(objeto)
     }

    });
    console.log(" menuCategoria " + JSON.stringify(menuCategoria))
  }, [products]);

  return (
    <Box>
      {products.map((item) => (
        <CardProducto  key ={item.id}
          id={item.id}
          titulo={item.nombre}
          precio={item.precio}
          descripcion={item.descripcion}
          foto={item.foto}
        />
      ))}
    </Box>
  );
}

export default Productos;
