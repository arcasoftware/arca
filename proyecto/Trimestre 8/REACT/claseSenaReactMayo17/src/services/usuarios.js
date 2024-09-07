import axios from "axios";

// const  END_POINT = "https://jsonplaceholder.typicode.com/users"

const  END_POINT = "https://randomuser.me/api/"

export const getUsuarios = async () => {
    try {
    const response = await axios.get(END_POINT);
    // console.log ("datos servicio ... " + JSON.stringify(response.data))
    return(response.data);
} catch (error) {
    return ("error" + error)
}
};



/*
export const getUsuarios = async () => {
    try {
        console.log ("Ejecuntado servicio .....")
        await axios.get(END_POINT)
        .then(res => {
          const datos = res.data;
          console.log ("datos " + JSON.stringify(datos))
          return(datos);
        })
     
     
    } catch (error) {
        return ("error" + error)
    }
 

}
*/


