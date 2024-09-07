import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Tarjeta({nombre, apellido, ciudad, correo, telefono, foto}) {
  
     
    
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={foto} />
      <Card.Body>
        <Card.Title>{nombre} {apellido}</Card.Title>
        <Card.Text> {ciudad} </Card.Text>
        <Card.Text> {correo} </Card.Text>
        <Card.Text> {telefono} </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Tarjeta;