import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from './Sliders'


export default function CardImage() {

    const arrayImagenes=[
    
        'https://picsum.photos/id/1000/400',
        'https://picsum.photos/id/1001/400',
        'https://picsum.photos/id/1002/400',  
      ];
      return <Slider imagenes={arrayImagenes}/>;


}