import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from "react-redux";
import { cerrarError } from '../../redux/reducers';

const Error = () => {
    const selector = useSelector(state => state.server)
    const distpach = useDispatch(cerrarError())
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Error! Pero un error controlado y previsto:</Card.Title>
          <Card.Text>
            {selector.errorMensaje}
          </Card.Text>
          <Button variant="primary">Llevame a un sitio seguro</Button>
        </Card.Body>
      </Card>
    )
}

export default Error