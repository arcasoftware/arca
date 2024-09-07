import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function CardText() {

    return(
        <>
         <Paper elevation={3}  sx={{
            margin: '1rem', padding : '1rem'
         }}>
         <Typography variant='h3'> Titulo de la Card</Typography>
         <Typography align='justify' 
          
         > Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
         
         <Box sx={{ width: '100%', display:'flex', justifyContent:'space-between' , padding:'1rem'}}  >
         <img 
         style={{  
        
            height: 70,}}
         
         src='./logo.jpg'/>
         <Button variant="contained">Contained</Button>
         </Box>
         </Paper>
        </>
    )


}