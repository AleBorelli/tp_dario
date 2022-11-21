import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import {LinkContainer} from 'react-router-bootstrap'
import { useDispatch} from 'react-redux'
import { cambiarTipoUsuario } from '../../redux/reducers/usuario';


const DefaultNavbar = () => {
    const dispatch = useDispatch()

    const obtenerTipoUsuario = (miTipo) =>{
        dispatch(cambiarTipoUsuario(miTipo))
    }

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Instituto Politécnico Formosa</Navbar.Brand>
          <Nav className="float-end">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Ingresar como
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <LinkContainer to={'/Login'}>
                            <Dropdown.Item onClick = {() => obtenerTipoUsuario('Alumno')}> Alumno
                            </Dropdown.Item>
                          </LinkContainer>
                          <LinkContainer to={'/Login'}>
                            <Dropdown.Item onClick = {() => obtenerTipoUsuario('Profesor')}>Profesor
                            </Dropdown.Item>
                          </LinkContainer>
                          <LinkContainer to={'/Login'}>
                            <Dropdown.Item onClick = {() => obtenerTipoUsuario('Preceptor')}>Preceptor
                            </Dropdown.Item>
                          </LinkContainer>
                        <LinkContainer to={'/Login'}>
                          <Dropdown.Item onClick = {() => obtenerTipoUsuario('Administrador')}>Administrador
                          </Dropdown.Item>
                        </LinkContainer>
                    </Dropdown.Menu>
                </Dropdown>
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}

export default DefaultNavbar