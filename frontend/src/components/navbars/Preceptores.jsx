import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const PreceptoresNavbar = () => {
  console.log(useSelector(state => state.usuario))
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Instituto Politécnico Formosa</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Vista general</Nav.Link>
            <Nav.Link href="#features">Alumnos</Nav.Link>
            <Nav.Link href="#pricing">Carreras</Nav.Link>
            <Nav.Link href="#profesores">Profesores</Nav.Link>
            <Button variant='primary'> Algo </Button>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}