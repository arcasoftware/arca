import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardProducto from "./common/CardProducto";
import Button from "@mui/material/Button";
import CardDetalleCarrito from "./common/CardDetalleCarrito";
import CardTotal from "./common/CardTotal";




import {getProductos} from '../services/productos.js'
import MenuCategoria from "./common/MenuCategoria.jsx";
import LinearProgress from '@mui/material/LinearProgress';


import Modal from '@mui/material/Modal';


import { getMenu , getFiltro , addCompra , deleteCompra , actualizarCantidades} from "../hooks/useCompras.js";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Productos() {

  const [open, setOpen] =  useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [menu, setMenu] = useState([{
    idCategoria: "",
    nombreCategoria: ""
  }]);


  const [filtro, setFiltro] = useState([]);
  const [loadign, setLoading] = useState(false);
  const [compra, setCompra] = useState([]);
  const [carrito, setCarrito] = useState(0);
  const [total, setTotal] = useState(0);


 let  listaProductos = []
 const datos  = getProductos()
 if (datos.length > 0) {
  listaProductos = datos
   //console.log ( "... listaProductos " + JSON.stringify(listaProductos))
}

useEffect (()=> {
  setFiltro (listaProductos)
  setMenu (getMenu(listaProductos))
  setLoading (true)
} , [listaProductos])

useEffect (()=> {
   let suma = 0
   if (compra.length > 0) {
    compra.map ((item) => {
      suma  =  suma +  item.precio * item.cantidad
    })
   }
   setTotal(suma)
   setCarrito (compra.length)

   let nuevoFiltro = actualizarCantidades(filtro)
   setFiltro(nuevoFiltro)
 
}, [compra])


  const opcionMenu = (opcion) => {
    //console.log (" Opcion ----> " + opcion)
    if (opcion == '00')
       setFiltro(listaProductos)
      else 
      setFiltro(getFiltro(listaProductos, opcion))

  }

  const generarCompra = (objeto) => {
    //console.log ( "... generarCompra " + JSON.stringify(objeto))
    let nuevaCompra = addCompra(objeto)
    setCompra(nuevaCompra)

 }


  const eliminarCompra = (id) => {
    console.log ( "... eliminarCompra " + JSON.stringify(id))
    let nuevaCompra  = deleteCompra(id)
    setCompra(nuevaCompra)

  }

 const actualizarCantidad = (objeto) => {
  console.log ( "... actualizarCantidad " + JSON.stringify(objeto))

 }

 const confirmarCompra = (objeto) => {
  console.log ( "... confirmarCompra " + JSON.stringify(objeto))
  let nuevaCompra = addCompra(objeto)
  setCompra(nuevaCompra)

 }

  return (
    <Box sx={{ bgcolor:"#ffffff"}}>
       <MenuCategoria
         objeto={menu}
         getValor={opcionMenu}
         noCompras = {carrito}
         openModal= {handleOpen}
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
          noProductos = {item.cantidad}
          foto={item.foto}
          compra={generarCompra}
          monitor={actualizarCantidad}
        />
      ))}
    
      </Box>
    )}

   {/* MODAL */}

   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
           <Box>
           {compra.map((item) => (
        <CardDetalleCarrito  key ={item.id}
          id={item.id}
          titulo={item.titulo}
          precio={item.precio}
          foto={item.foto}
          cantidad={item.cantidad}
          borrar= {eliminarCompra}
          monitor={confirmarCompra}
        />
      ))}
           
           <CardTotal valor={total }/>

           </Box>
          <Button onClick={handleClose}> Cerrar </Button>
        </Box>
      </Modal>

{/* MODAL */} 

    </Box>
  );
}

export default Productos;
