
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Card,Row,Col,Container } from 'react-bootstrap';


function App() {
const [recordatorios,setRecordatorios]=useState([]);
const [titulo,SetTitulo]=useState('');
const [descripcion,SetDescripcion]=useState('');
const [fecha,SetFecha]=useState('')
const [editIndex,setEditIndex]=useState(null);


const handleSubmit=(event)=>{
  event.preventDefault();

if(editIndex !== null){
  const nuevosRecordatorios=[...recordatorios];
  nuevosRecordatorios[editIndex]={ titulo,descripcion,fecha}
 setRecordatorios(nuevosRecordatorios)
 setEditIndex(null)

}else{
  setRecordatorios([...recordatorios,{titulo,descripcion,fecha}])
}

SetTitulo('')
SetDescripcion('')
SetFecha('')
}
const handleDelete=(index)=>{
const nuevosRecordatorios=[...recordatorios];
  nuevosRecordatorios.splice(index,1);
  setRecordatorios(nuevosRecordatorios);
  }
  
const handleEdit=(index)=>{
    SetTitulo(recordatorios[index].titulo);
    SetDescripcion(recordatorios[index].descripcion);
    SetFecha(recordatorios[index].fecha)
    setEditIndex(index);
  
  }

const handleCheck=()=>{
  let importancia=document.getElementById('myCheck')
  let bloque=document.getElementByid('aviso')

  if(importancia===true){
    document.getElementByid('aviso').style.backgroundColor='red'
  }{
    bloque.style.display='none'
  }
}


 
  return (
    <>
    <Container style={{backgroundColor:'rgba(220,220,220,80%)'}}>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
        
            <Form.Group className="mb-3">
              <Form.Label style={{fontWeight:'bold',fontSize:'25px'}}>Titulo del Recordatorio</Form.Label>
              <Form.Control type="text" placeholder="Ingrese el titulo que tendra el recordatorio" value={titulo} onChange={(e)=>SetTitulo(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" placeholder="¿Que debe recordar?" value={descripcion} onChange={(e)=>SetDescripcion(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Fecha</Form.Label>
              <Form.Control type="date" placeholder="DD/MM/YYYY" value={fecha} onChange={(e)=>SetFecha(e.target.value)}/>
            </Form.Group>

            <div style={{display:'flex',alignContent:'start',justifyContent:'start', marginBottom:'15px'}}>
              <input type="checkbox" id="myCheck" onChange={() => handleCheck()}/>
              <label> &nbsp;¿Soy Importante?</label>
            </div>

            <Button type="submit" style={{margin:'0 0 20px'}}>
              {editIndex !==null ? 'Editar Recordatorio' : 'Agregar Recordatorio'}
              
            </Button>
            
          </Form>
        </Col>
      </Row>
      <Row>
        {
          recordatorios.map((recordatorios,index)=>(
            <Col sm={6} key={index}>
           
            <Card style={{ width: '18rem', marginTop:'18px'}}>
              <div id='aviso' style={{alignContent:'start',justifyContent:'start'}}>
              <input type="checkbox" />
              <label> &nbsp;Soy Importante, ¡¡no me olvides!!</label>
            
              </div>
              <Card.Body>
                <Card.Title style={{textTransform:'capitalize'}}>{recordatorios.titulo}</Card.Title>
                <Card.Text>{recordatorios.descripcion}</Card.Text>
                <Card.Text >Fecha: {(recordatorios.fecha)}</Card.Text>
              </Card.Body>
              <div style={{display:'flex',alignContent:'center',justifyContent:'center'}}>
              <Button variant="warning" onClick={() => handleEdit(index)} >
                Editar
              </Button>
              <Button variant="danger" onClick={() => handleDelete(index)} style={{ marginLeft: '10px'}}>
                Eliminar
              </Button>
              </div>
            </Card>
            
            </Col>
          ))
          
        }
      </Row>
    </Container>
    </>
  )
}

export default App
