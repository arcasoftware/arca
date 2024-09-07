import Box from '@mui/material/Box'
export default function FotoUsuario({foto}){
    return(
        <Box
        sx={{ 
         width:'100%',
          height:180,
          display:'flex',
          flexDirection:'column',
          alignItems:'center'
    
      }}
        >
    
        <Box   
        sx={{ 
          width:'100%',
          height:90,
          border: 1,
          borderColor: '#ccc',
          bgcolor: '#fff'
      }}
       />
      
        <Box
        sx={{ 
          width:'100%',
          height:90,
          border: 1,
          borderColor: '#ccc',
          bgcolor: '#ccc'
      }}
        />
  
        <img 
          style={{marginTop: -130, 
              width: 100, 
              height: 100, 
              borderRadius: 100/ 2}}  
          src={foto}
        />
         </Box>
    );
}