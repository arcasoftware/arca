import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardProducto from "./common/CardProducto";


/*
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
*/

import {getProductos} from '../services/productos.js'
import MenuCategoria from "./common/MenuCategoria.jsx";
import LinearProgress from '@mui/material/LinearProgress';


function Productos() {

  const [menu, setMenu] = useState([{
    idCategoria: "",
    nombreCategoria: ""
  }]);


  const [filtro, setFiltro] = useState([]);
  const [loadign, setLoading] = useState(false);

  

 


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
  const datos  = getProductos()
    
    if (datos.length > 0) {
      //console.log ("tamano del vector " + datos.length)
      products = datos
  

      //console.log ( " products "  + JSON.stringify(datos))
    }

  const opcionMenu = (opcion) => {
    setLoading(false)
    console.log (" Opcion ----> " + opcion)
   
    if (opcion == "00") {
      setFiltro(products)
    }else {

  
    let result  = products.filter((item) => item.idCategoria == opcion);
    //console.log (" result " + JSON.stringify(result))
    setFiltro(result)
    
  }
  setTimeout(() => {
    setLoading(true)
  }, 500); 
  }


  useEffect(() => {
    setLoading(false)
    let menuCategoria = []; //verifico que la categoria no existe en el Menu Categorias y la inserto
    products.forEach((item) => {
     //console.log(item.nombreCategoria + "  " + existeCategoria(menuCategoria, item.idCategoria));
     if (!existeCategoria(menuCategoria, item.idCategoria)) {
        let objeto= {
          idCategoria:item.idCategoria,
          nombreCategoria:item.nombreCategoria
        }
        menuCategoria.push(objeto)
     }
     setMenu(menuCategoria)
    });
    //console.log(" menuCategoria " + JSON.stringify(menuCategoria))
    setFiltro(products)
    
    setTimeout(() => {
      setLoading(true)
    }, 500);

  }, [products]);

  return (
    <Box sx={{ bgcolor:"#ffffff"}}>
       <MenuCategoria
         objeto={menu}
         getValor={opcionMenu}
        />

     {!loadign ? (
      <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
     ) : ( 
      <Box sx={{ display : 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      {filtro.map((item) => (
        <CardProducto  key ={item.id}
          id={item.id}
          titulo={item.nombre}
          precio={item.precio}
          descripcion={item.descripcion}
          foto={item.foto}
        />
      ))}
      </Box>
    )}


    </Box>
  );
}

export default Productos;
