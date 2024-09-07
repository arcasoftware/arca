
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import Tarjeta from '../componets/Tarjeta'
import User from '../componets/User'
import Usuario from '../componets/usuario'
import { SiChakraui } from "react-icons/si";

import {useEffect , useState} from 'react'

import CircularProgress from '@mui/material/CircularProgress';

//import { useUsuarios } from "./hooks/useUsuarios.js";
import {getUsuarios} from '../services/usuarios.js'

function CardUser() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({
    nombre:"",
    apellido:"",
    correo:"",
    ciudad:"",
    movil:"",
    foto:""
  })



  useEffect (() => {
    setLoading(false)
      getUsuarios().then((response) => {
        setUsers(response.results[0])
        //console.log("datos apps ... " + JSON.stringify(response.results[0]));
      })
      .catch((error) => {
        console.log(error);
      });
     
  }, [])


  useEffect (() => {

     if (users != ""){
      /*
      console.log (" Nombre " + users.name.first)
     console.log (" Apellido " + users.name.last)
     console.log (" Correo " + users.email)
     console.log (" Movil " + users.phone)
     console.log (" Ciudad " + users.location.country)
     console.log (" Foto " + users.picture.large)
     */
     console.log (" Foto " + JSON.stringify(users.picture.large))
     let objeto = {
        foto:users.picture.large,
        nombre:users.name.first,
        apellido:users.name.last,
        correo:users.email,
        ciudad: users.location.city + " " + users.location.country,
        movil:users.phone,
     
      } 
      setUser(objeto)
      setTimeout(() => {
        setLoading(true)

      }, 500);
      
     }
    
    /*
     
*/
   
}, [users])

useEffect (() => {

  console.log (" user " + JSON.stringify(user))
 
}, [user])




 

//style={{width: 150, height: 150, borderRadius: 150/ 2}}
//size={32} color={"#ccc"}
 
  return (
    <>
     
     
      {!loading ? (
      <CircularProgress />
    ) : (<>
          <h4>  Mi App  </h4> 
         <SiChakraui  style={{width: 50, height: 50, color: '#F7946F' , margin:'1rem'}} />
        <User 
        nombre = {user.nombre}
        apellido = {user.apellido}
        correo = {user.correo}
        ciudad = {user.ciudad}
        movil = {user.movil}
        foto = {user.foto}
         />
        </>) }

      
     
    </>
  )
}

export default CardUser
