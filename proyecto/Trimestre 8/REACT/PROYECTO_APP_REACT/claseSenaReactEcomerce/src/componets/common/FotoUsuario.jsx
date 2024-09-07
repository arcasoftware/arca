import Box from '@mui/material/Box'

export default function FotoUsuario({foto}) {
    return (
        <>
    <Box
      sx={{ 
        height:180,
       
    }}
      >
    <Box   
    sx={{ 
     
      height:90,
      border: 1,
      borderColor: '#ccc',
      bgcolor: '#fff'
  }}
   />
    
     {/* caja gris */}
    <Box
    sx={{ 
     
      height:90,
      border: 1,
      borderColor: '#ccc',
      bgcolor: '#ccc'
  }}
    />
  {/* imagen */}
    <img 
      style={{marginTop: -200, 
          width: 100, 
          height: 100, 
          borderRadius: 100/ 2}}  
      src={foto}
    />
     </Box>
     </>
  );

}