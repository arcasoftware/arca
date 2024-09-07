import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Usuario({nombre, apellido, ciudad, correo, telefono, foto}) {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={foto}
        sx={{ borderRadius: '10px' }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {nombre} {apellido}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ciudad}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{telefono}</Button>
        <Button size="small">{correo}</Button>
      </CardActions>
    </Card>
    <Box>
     <img style={{width: 150, height: 150, borderRadius: 150/ 2}} 
       src={foto}
     />
    </Box>
    </>
  );
}