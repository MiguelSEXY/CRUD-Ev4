
import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Card,Row,Col,Container } from 'react-bootstrap';

function App() {
const [students,setStudents]=useState([]);
const [name,SetName]=useState('');
const [age,SetAge]=useState('');
const handleSubmit=(event)=>{
  event.preventDefault();
  setStudents([...students,{name,age}])
  console.log(students)
  SetName('')
  SetAge('')
}

  return (
    <>
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
        
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su Nombre" value={name} onChange={(e)=>SetName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="number" placeholder="Ingrese su Edad" value={age} onChange={(e)=>SetAge(e.target.value)}/>
            </Form.Group>

            <Button type="submit">Agregar Estudiante</Button>
          </Form>
        </Col>
      </Row>
      <Row>
        {
          students.map((student,index)=>(
            <Col sm={6} key={index}>
            <Card style={{ width: '18rem', marginTop:'18px'}}>
              <Card.Body>
                <Card.Title>Datos Estudiantes</Card.Title>
                <Card.Text>Nombre: {student.name}</Card.Text>
                <Card.Text>Edad: {student.age}</Card.Text>
              </Card.Body>
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
