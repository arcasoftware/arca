
import './App.css'

import Usuario from './componets/Usuario'
import { SiChakraui } from "react-icons/si";

import { useEffect, useState } from 'react'

//datos
import {getUsuarios} from './services/usuarios.js'
import CircularProgress from '@mui/material/CircularProgress';

import Arca from './componets/Arca.jsx';


function App() {
  const [loadig, setLoading] = useState (false)
  const [users , setUsers]= useState([])
  const [user , setUser]= useState({
    nombre: "",
    apellido: "",
    correo: "",
    ciudad: "",
    movil: "",
    foto: "",
  })

  useEffect(()=> {
    setLoading(false)
    getUsuarios().then((response) => {
      //console.log ("datos " + JSON.stringify(response)  )
      setUsers(response.results[0])
    })
    .catch((error) => {
      console.log ("error " + error  )
    })
    
  },[])


  useEffect(()=> {

    if (users != "") {
  let objeto = {
    nombre: users.name.first,
    apellido: users.name.last,
    correo: users.email,
    ciudad: users.location.city  +"," +users.location.country,
    movil: users.cell,
    foto: users.picture.large,
  }
  setUser(objeto)
  setTimeout(() => {
    setLoading(true)
  }, 1000);
  

}

  },[users])

  /*

     {!loadig ? (
       <CircularProgress />
    ): (
      <Usuario 
      nombre = {user.nombre}
      apellido = {user.apellido}
      correo = {user.correo}
      ciudad = {user.ciudad}
      movil = {user.movil}
      foto = {user.foto}
      />
    )}
  */

  return (
    <>
     <Arca/>
    </>
  )
}

export default App
