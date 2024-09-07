import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

function MenuCategoria({objeto, getValor}) {
  

    const handleOpcion= (myVal) => {
        getValor(myVal)
        
        //console.log (" valor " + myVal)
     
      };
 

    return (
        <Box color="primary" marginTop={'1rem'} sx={{ display: 'flex', justifyContent:'center'}}>
              <Stack  direction="row" spacing={4}>

              <IconButton  key={0} size="large" 
             onClick={()=> handleOpcion(`00`)}>
             <Avatar  sx={{ width: 50, height: 50  , margin: '3px'}}
                alt={'Todos los productos'} src={`./icoMenuA.svg`} 
                /> 
           </IconButton>

        {objeto.map((item)=>(
             <IconButton  key={item.idCategoria} size="large" 
             onClick={()=> handleOpcion(`${item.idCategoria}`)}>
             <Avatar  sx={{ width: 50, height: 50  , margin: '3px'}}
                alt={item.nombreCategoria} src={`./${item.idCategoria}.png`} 
                /> 
           </IconButton>
         
              
               

        ))}

         
         </Stack>

         <Box>
          <IconButton
             
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <AddShoppingCartIcon  sx={{ fontSize:"20"}} />
              </Badge>
            </IconButton>
          </Box>

      </Box>
    );
  }
  
  export default MenuCategoria;

  